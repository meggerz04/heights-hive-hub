import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import bingoCardFront from "@/assets/bingo-card-2026-front.png";

const BingoPromoSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-primary/10"
            />
            <img
              src={bingoCardFront}
              alt="Shop The Heights Bingo card featuring 20 participating local businesses"
              className="relative rounded-2xl shadow-lg w-full"
              loading="lazy"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="order-1 md:order-2"
          >
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
              Fri. 11/27 – Sun. 11/29
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
              Shop The Heights Bingo is back
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
              Shop at 20 neighborhood favorites, collect stickers with every purchase, and turn your
              card into raffle entries for prizes — all while supporting the businesses that make
              The Heights home.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Presented by the Heights Entrepreneurial Women's Society.
            </p>
            <Link
              to="/bingo"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all"
            >
              How to Play
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BingoPromoSection;
