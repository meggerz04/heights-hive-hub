import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import Seo from "@/components/Seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InstagramIcon from "@/components/InstagramIcon";
import BingoMap from "@/components/BingoMap";
import { bingoBusinesses } from "@/data/bingoBusinesses";
import bingoCardFront from "@/assets/bingo-card-2026-front.png";
import hewsLogo from "@/assets/hews-logo.png";

const steps = [
  {
    title: "Pick up your card",
    text: "Visit any participating business to pick up your bingo card. Each square belongs to a local store.",
  },
  {
    title: "Shop to earn stickers",
    text: "Make any purchase at each store between 11/27–11/29 to earn the sticker for that square.",
  },
  {
    title: "Collect 5+ stickers",
    text: "After you collect 5 stickers, your bingo card turns into a raffle entry. More stickers = more entries.",
  },
  {
    title: "Drop off & win",
    text: "Drop off your card by 11/29 at any participating location to be entered to win 1 of 5 prizes!",
  },
];

const entryChart: [number, number][] = [
  [5, 1],
  [6, 2],
  [7, 3],
  [8, 4],
  [9, 5],
  [10, 6],
  [11, 7],
  [12, 8],
  [13, 9],
  [14, 10],
  [15, 11],
  [16, 12],
  [17, 13],
  [18, 14],
];

const Bingo = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Shop The Heights Bingo — Nov 27–29 | Shop The Heights"
        description="Shop local in Jersey City Heights from November 27–29, collect stickers from 20 participating businesses, and turn your bingo card into raffle entries to win prizes."
        path="/bingo"
        image={bingoCardFront}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
                Fri. 11/27 – Sun. 11/29
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
                Shop The Heights Bingo
              </h1>
              <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
                Win big for shopping local in JC Heights! Pick up a bingo card at any participating
                business, collect stickers as you shop, and turn your card into raffle entries for
                prizes.
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                Every purchase is a vote for the neighborhood you want to live in.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={hewsLogo}
                  alt="Heights Entrepreneurial Women's Society logo"
                  className="h-14 w-14 rounded-full"
                />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Presented by the{" "}
                  <a
                    href="https://www.hewsofjc.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground underline decoration-primary/40 underline-offset-4 hover:text-primary transition-colors"
                  >
                    Heights Entrepreneurial Women's Society
                  </a>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-primary/10"
              />
              <img
                src={bingoCardFront}
                alt="Shop The Heights Bingo card featuring all 20 participating businesses"
                className="relative rounded-2xl border border-border shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How to play */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
              How To Play
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              Four steps to prizes
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background rounded-2xl border border-border p-6 hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <span className="font-heading text-4xl font-bold text-primary/30 block mb-4">
                  {i + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entries chart + Instagram bonus */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                More stickers, more entries
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                You must collect at least 5 stickers to be eligible for prizes. Every additional
                sticker earns you another raffle entry — and a full card is worth 25 entries.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[entryChart.slice(0, 7), entryChart.slice(7)].map((column, colIndex) => (
                  <div key={colIndex} className="flex flex-col gap-2">
                    {column.map(([stickers, entries]) => (
                      <div
                        key={stickers}
                        className="flex items-center justify-between rounded-lg border border-border bg-card px-4 py-2"
                      >
                        <span className="font-body text-sm font-semibold text-foreground">
                          {stickers} stickers
                        </span>
                        <span className="font-body text-sm text-primary font-semibold">
                          {entries} {entries === 1 ? "entry" : "entries"}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
                <div className="col-span-2 flex items-center justify-between rounded-lg bg-primary px-4 py-2">
                  <span className="font-body text-sm font-semibold text-primary-foreground">
                    Whole card
                  </span>
                  <span className="font-body text-sm font-bold text-primary-foreground">
                    25 entries
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <InstagramIcon className="w-6 h-6 text-primary" />
                <h3 className="font-heading text-2xl font-bold text-foreground">Bonus entries</h3>
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6">
                Post about your bingo run on Instagram and tag us for bonus entries:
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="font-body text-sm font-semibold bg-primary/10 text-primary rounded-full px-4 py-1.5">
                  #ShopTheHeightsBINGO
                </span>
                <a
                  href="https://www.instagram.com/shoptheheightsjc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-semibold bg-primary/10 text-primary rounded-full px-4 py-1.5 hover:bg-primary/20 transition-colors"
                >
                  @ShopTheHeightsJC
                </a>
                <a
                  href="https://www.instagram.com/hewsofjc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm font-semibold bg-primary/10 text-primary rounded-full px-4 py-1.5 hover:bg-primary/20 transition-colors"
                >
                  @HEWSofJC
                </a>
              </div>
              <div className="border-t border-border pt-6">
                <p className="font-body text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                  Drop finished cards
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  at any shop listed below by 11/29. Don't forget to fill in your name, email,
                  phone, and Instagram on the back of your card — contact info is required to be
                  eligible to win.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shop-local message */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="font-heading text-2xl md:text-3xl font-semibold text-primary-foreground leading-snug">
            When you shop local, you invest in The Heights — supporting the people behind our
            storefronts and keeping our neighborhood vibrant, connected, and full of character.
          </p>
        </div>
      </section>

      {/* Map */}
      <BingoMap businesses={bingoBusinesses} />

      {/* Business list */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
              Participating Businesses
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
              20 Neighborhood Favorites
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
              Pick up your card at any of these shops, and drop it off at any of them when you're
              done (by 11/29).
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[...bingoBusinesses]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((biz, i) => (
              <motion.div
                key={biz.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1 }}
                className="bg-background rounded-2xl border border-border p-6 flex flex-col hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  {biz.logo && (
                    <img
                      src={biz.logo}
                      alt={`${biz.name} logo`}
                      loading="lazy"
                      className="h-16 w-16 shrink-0 rounded-full border border-border object-cover"
                    />
                  )}
                  <h3 className="font-heading text-xl font-bold text-foreground">{biz.name}</h3>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(biz.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 mb-4"
                >
                  <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors leading-relaxed">
                    {biz.address}
                  </span>
                </a>
                <div className="mt-auto flex flex-wrap gap-2">
                  {biz.website && (
                    <a
                      href={biz.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wide text-primary border border-primary/20 bg-primary/10 rounded-lg px-3 py-1.5 hover:bg-primary/15 transition-colors"
                    >
                      Website <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {biz.instagram && (
                    <a
                      href={biz.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-body text-xs font-semibold uppercase tracking-wide text-primary border border-primary/20 bg-primary/10 rounded-lg px-3 py-1.5 hover:bg-primary/15 transition-colors"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" /> Instagram
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing message */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Local shops keep our neighborhood walkable, welcoming, and uniquely ours. Thanks for
            playing — and for shopping The Heights.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Bingo;
