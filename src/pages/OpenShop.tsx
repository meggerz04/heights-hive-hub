import { motion } from "framer-motion";
import { Lightbulb, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OpenShop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
              <Lightbulb className="w-8 h-8 text-accent-foreground" />
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Thinking about selling at a Jersey City farmers market?
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              OpenShop gives you a simple step-by-step plan to become a vendor — including where to apply, what you need, and how to get started.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coming Soon
            </h2>
            <p className="font-body text-muted-foreground">
              We're building out the full OpenShop guide. Check back soon for step-by-step resources to help you get started as a vendor.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenShop;
