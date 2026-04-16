import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import heroImg from "@/assets/hero-heights.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Jersey City Heights neighborhood with local storefronts"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
      </div>

      <div className="relative container mx-auto px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block font-body text-sm font-semibold tracking-widest uppercase text-accent mb-6"
          >
            Jersey City Heights, NJ
          </motion.span>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] text-primary-foreground mb-6">
            Discover, support, and shop local in{" "}
            <span className="text-accent">the Heights</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-lg leading-relaxed">
            Find events, explore local businesses, and be part of what's happening in your neighborhood.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.instagram.com/shoptheheightsjc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              <Instagram className="w-5 h-5" />
              See What's Happening Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
