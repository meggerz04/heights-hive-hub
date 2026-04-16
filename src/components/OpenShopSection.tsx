import { motion } from "framer-motion";
import { Lightbulb, ArrowRight } from "lucide-react";

const OpenShopSection = () => {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
              <Lightbulb className="w-8 h-8 text-accent-foreground" />
            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Thinking about starting a business in the Heights?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              OpenShop helps aspiring entrepreneurs navigate the process of opening a local business — from finding a space to connecting with the community.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-3 bg-foreground text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              Learn About OpenShop
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenShopSection;
