import { motion } from "framer-motion";
import { Heart, MapPin, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const values = [
  {
    icon: Heart,
    title: "Why We Started",
    description:
      "Shop The Heights was born from a simple belief: the small businesses on our blocks are the heartbeat of this neighborhood. We saw incredible entrepreneurs doing amazing work — but struggling to be seen. We built this platform to change that.",
  },
  {
    icon: MapPin,
    title: "Our Connection to the Heights",
    description:
      "We live here. We shop here. We know the barista who remembers your order and the boutique owner who wraps every gift by hand. Jersey City Heights isn't just where we work — it's home.",
  },
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To increase foot traffic, amplify visibility, and foster collaboration among independent businesses in Jersey City Heights. We believe that when local businesses thrive, the whole community wins.",
  },
];

const About = () => {
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
            <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              For the Heights,{" "}
              <span className="text-primary">by the Heights</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Shop The Heights is a local business activation platform that drives foot traffic, visibility, and collaboration among independent businesses in Jersey City Heights.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};

export default About;
