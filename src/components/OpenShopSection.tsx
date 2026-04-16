import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import openshopIcon from "@/assets/openshop-icon.png";

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
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-foreground/10 mb-6 overflow-hidden">
              <img src={openshopIcon} alt="OpenShop" className="w-12 h-12 object-contain" />
            </div>

            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
              Thinking about selling at a Jersey City farmers market?
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              OpenShop gives you a simple step-by-step plan to become a vendor — including where to apply, what you need, and how to get started.
            </p>

            <Link
              to="/openshop"
              className="inline-flex items-center gap-3 bg-foreground text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              Explore OpenShop
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenShopSection;
