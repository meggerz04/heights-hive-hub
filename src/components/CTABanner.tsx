import { motion } from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";

const CTABanner = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stay in the loop
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Follow us on Instagram for the latest events, specials, and neighborhood happenings.
          </p>
          <a
            href="https://www.instagram.com/shoptheheightsjc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-foreground text-foreground font-body font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all"
          >
            <Instagram className="w-5 h-5" />
            Follow @shoptheheightsjc
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
