import { useEffect, useMemo, useRef } from "react";
import {
  Map as MapLibreMap,
  Popup,
  NavigationControl,
  AttributionControl,
  setWorkerUrl,
} from "maplibre-gl";
import type { GeoJSONSource } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
// MapLibre loads its worker from a path relative to its own file, which breaks
// once the app is bundled for production. Point it at an emitted copy instead.
import maplibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";

setWorkerUrl(maplibreWorkerUrl);

type LngLat = [number, number];
type PinFeature = {
  type: "Feature";
  properties: {
    id: string;
    business_name: string;
    business_address: string;
    website_url: string;
  };
  geometry: { type: "Point"; coordinates: LngLat };
};
type PinFeatureCollection = { type: "FeatureCollection"; features: PinFeature[] };

export type BingoBusiness = {
  id: string;
  name: string;
  address: string;
  website?: string;
  instagram?: string;
  latitude: number;
  longitude: number;
};

const PRIMARY = "hsl(262, 35%, 55%)";
const CLUSTER_RING = "hsla(262, 35%, 55%, 0.25)";
const PIN_STROKE = "hsl(30, 20%, 97%)";

const popupHtml = (s: BingoBusiness) => {
  const pinIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
  const arrowIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>';

  const address = `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    s.address
  )}" target="_blank" rel="noopener noreferrer" class="group flex items-start gap-2.5 no-underline">
      <span class="mt-0.5 shrink-0 text-muted-foreground/70 transition-colors group-hover:text-primary">${pinIcon}</span>
      <span class="text-xs leading-relaxed text-muted-foreground border-b border-transparent transition-colors group-hover:border-border group-hover:text-foreground">${s.address}<span class="sr-only"> (opens in a new tab)</span></span>
    </a>`;
  const website = s.website
    ? `<a href="${s.website}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 transition-colors hover:bg-primary/15">
        <span class="font-body text-[11px] font-medium uppercase tracking-wide text-primary">Visit website</span>${arrowIcon}<span class="sr-only">(opens in a new tab)</span>
      </a>`
    : "";
  return `<div class="p-5">
    <h3 class="mb-3 pr-5 font-heading text-lg font-semibold leading-tight text-primary">${s.name}</h3>
    <div class="flex flex-col gap-3">${address}${website}</div>
  </div>`;
};

const BingoMap = ({
  businesses,
  heading = "Plan your route.",
  intro = "All 20 participating businesses are right here in The Heights. Tap a pin for the address and a link to their site.",
  ariaLabel = "Map of Shop The Heights Bingo participating businesses in Jersey City Heights",
}: {
  businesses: BingoBusiness[];
  heading?: string;
  intro?: string;
  ariaLabel?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<MapLibreMap | null>(null);
  const pinsRef = useRef<BingoBusiness[]>([]);

  const pins = useMemo(() => businesses, [businesses]);
  pinsRef.current = pins;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const geojson: PinFeatureCollection = {
      type: "FeatureCollection",
      features: pins.map(
        (s): PinFeature => ({
          type: "Feature",
          properties: {
            id: s.id,
            business_name: s.name,
            business_address: s.address,
            website_url: s.website ?? "",
          },
          geometry: { type: "Point", coordinates: [s.longitude, s.latitude] },
        })
      ),
    };

    // Map already exists — just refresh the data.
    if (mapRef.current) {
      (mapRef.current.getSource("bingo-businesses") as GeoJSONSource | undefined)?.setData(geojson);
      return;
    }

    const map = new MapLibreMap({
      container,
      style: "https://tiles.openfreemap.org/styles/positron",
      center: [-74.0455, 40.7455],
      zoom: 15,
      scrollZoom: false,
      attributionControl: false,
    });
    mapRef.current = map;

    map.addControl(
      new NavigationControl({ showCompass: false }),
      "top-left"
    );
    map.addControl(
      new AttributionControl({
        customAttribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://openfreemap.org" target="_blank">OpenFreeMap</a>',
      })
    );

    const setup = () => {
      map.addSource("bingo-businesses", {
        type: "geojson",
        data: geojson,
        cluster: true,
        clusterRadius: 45,
      });

      map.addLayer({
        id: "clusters",
        type: "circle",
        source: "bingo-businesses",
        filter: ["has", "point_count"],
        paint: {
          "circle-color": PRIMARY,
          "circle-radius": 20,
          "circle-stroke-width": 6,
          "circle-stroke-color": CLUSTER_RING,
        },
      });

      map.addLayer({
        id: "cluster-count",
        type: "symbol",
        source: "bingo-businesses",
        filter: ["has", "point_count"],
        layout: {
          "text-field": ["get", "point_count_abbreviated"],
          "text-font": ["Noto Sans Regular"],
          "text-size": 14,
        },
        paint: { "text-color": "hsl(300, 15%, 92%)" },
      });

      map.addLayer({
        id: "single-point",
        type: "circle",
        source: "bingo-businesses",
        filter: ["!", ["has", "point_count"]],
        paint: {
          "circle-color": PRIMARY,
          "circle-radius": 13,
          "circle-stroke-width": 4,
          "circle-stroke-color": PIN_STROKE,
        },
      });

      map.on("mouseenter", ["clusters", "single-point"], () => {
        map.getCanvas().style.cursor = "pointer";
      });
      map.on("mouseleave", ["clusters", "single-point"], () => {
        map.getCanvas().style.cursor = "";
      });

      map.on("click", "clusters", (e) => {
        const feature = e.features?.[0];
        if (!feature) return;
        const clusterId = feature.properties?.cluster_id as number;
        const source = map.getSource("bingo-businesses") as GeoJSONSource;
        source.getClusterExpansionZoom(clusterId).then((zoom) => {
          map.easeTo({
            center: feature.geometry.coordinates as [number, number],
            zoom,
          });
        });
      });

      map.on("click", "single-point", (e) => {
        const feature = e.features?.[0];
        if (!feature) return;
        const { id } = feature.properties ?? {};
        const spot = pinsRef.current.find((s) => s.id === id);
        if (!spot) return;
        new Popup({ offset: 18, closeButton: true, maxWidth: "260px" })
          .setLngLat(feature.geometry.coordinates as [number, number])
          .setHTML(popupHtml(spot))
          .addTo(map);
      });
    };

    const fitToPins = () => {
      if (pins.length === 0) return;
      const lons = pins.map((s) => s.longitude);
      const lats = pins.map((s) => s.latitude);
      const bounds: [[number, number], [number, number]] = [
        [Math.min(...lons), Math.min(...lats)],
        [Math.max(...lons), Math.max(...lats)],
      ];
      map.fitBounds(bounds, { padding: 48, maxZoom: 16, duration: 0 });
    };

    if (map.loaded() || map.isStyleLoaded()) {
      setup();
    } else {
      map.on("load", setup);
    }
    map.on("load", fitToPins);

    return () => {
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pins]);

  return (
    <section className="py-24 bg-background" aria-labelledby="bingo-map-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <h2 id="bingo-map-heading" className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              {heading}
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">{intro}</p>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute inset-0 translate-x-2 -translate-y-2 md:translate-x-4 md:-translate-y-4 rounded-2xl bg-primary/5" />
            <div className="relative rounded-2xl border border-border overflow-hidden shadow-lg">
              <div
                ref={containerRef}
                className="bingo-map h-[420px] md:h-[560px] w-full z-0"
                role="application"
                aria-label={ariaLabel}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BingoMap;
