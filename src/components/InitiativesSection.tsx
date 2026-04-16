import { motion } from "framer-motion";
import { Gamepad2, Gift, Users } from "lucide-react";
import bingoImg from "@/assets/bingo-card.jpg";
import marketImg from "@/assets/holiday-market.jpg";

const initiatives = [
  {
    icon: Gamepad2,
    title: "Shop The Block Bingo",
    description: "Visit local shops, collect stamps, and win prizes. A fun way to explore the neighborhood and support small businesses.",
    image: bingoImg,
    tag: "Community Game",
  },
  {
    icon: Gift,
    title: "Holiday Markets",
    description: "Seasonal markets bringing together local vendors, artisans, and the community for festive shopping and celebration.",
    image: marketImg,
    tag: "Seasonal Event",
  },
  {
    icon: Users,
    title: "HEWS Collaborations",
    description: "Partnering with Heights East-West Side organizations to amplify local business visibility and community impact.",
    tag: "Partnership",
  },
];

const InitiativesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-body text-sm font-semibold tracking-widest uppercase text-primary mb-4 block">
            What We Do
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
            Community Initiatives
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
            Programs and events that bring neighbors together and drive foot traffic to our local businesses.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-lg"
            >
              {item.image && (
                <div className="overflow-hidden h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <item.icon className="w-5 h-5 text-primary" />
                  <span className="font-body text-xs font-semibold tracking-wide uppercase text-primary">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;
