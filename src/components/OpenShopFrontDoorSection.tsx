import { motion } from "framer-motion";
import { ArrowRight, Store, Rocket, Users } from "lucide-react";
import openshopLogo from "@/assets/openshop-logo.png";

const highlights = [
  {
    icon: Store,
    title: "Start Your Business",
    description:
      "A clear path from deciding to open a local business to opening your doors — no guesswork.",
  },
  {
    icon: Rocket,
    title: "Launch faster",
    description: "Permits, applications, and next steps organized into one simple path.",
  },
  {
    icon: Users,
    title: "Built for locals",
    description: "Made for independent owners building something in their own neighborhood.",
  },
];

const OpenShopFrontDoorSection = () => {
  return (
    <section className="py-24 bg-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <img src={openshopLogo} alt="OpenShop" className="h-14 md:h-20 mx-auto mb-8" />

          <span className="inline-block font-body text-xs font-semibold uppercase tracking-widest text-background/60 mb-4">
            Coming soon
          </span>

          <h2 className="font-heading text-3xl md:text-5xl font-bold text-background mb-4">
            OpenShop is the front door to starting your business
          </h2>
          <p className="font-body text-lg text-background/70 max-w-2xl mx-auto mb-12">
            A growing set of tools that help everyday people open storefronts in their
            community — starting right here in Jersey City.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="rounded-2xl border border-background/15 bg-background/5 p-6"
              >
                <item.icon className="w-6 h-6 text-background mb-4" />
                <h3 className="font-heading text-lg font-bold text-background mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-background/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          <a
            href="https://getopenshop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-background text-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105"
          >
            Visit OpenShop
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default OpenShopFrontDoorSection;
