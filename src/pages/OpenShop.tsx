import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, MessageSquare, MapPin, ClipboardList } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import openshopLogo from "@/assets/openshop-logo.png";
import openshopIcon from "@/assets/openshop-icon.png";

const benefits = [
  "A personalized list of the best Jersey City markets based on your wants and needs",
  "Step-by-step checklist tailored to your business",
  "Direct links to vendor applications",
  "Required permits and documents explained",
  "Most vendors can be ready to sell in 2–4 weeks using this plan",
];

const steps = [
  {
    icon: MessageSquare,
    title: "Answer a few quick questions",
    description: "Tell us about your business, what you sell, and what you're looking for.",
  },
  {
    icon: MapPin,
    title: "Get matched with the best local markets",
    description: "We'll recommend Jersey City markets that fit your products and schedule.",
  },
  {
    icon: ClipboardList,
    title: "Follow your customized checklist",
    description: "Everything you need — permits, applications, and prep — laid out step by step.",
  },
];

const OpenShop = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <img src={openshopLogo} alt="OpenShop" className="h-14 md:h-20 mx-auto mb-8" />

            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Become a Jersey City farmers market vendor — faster
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              OpenShop gives you a step-by-step plan to go from idea to your first market, including where to apply, what you need, and how to get started.
            </p>

            <a
              href="#start"
              className="inline-flex items-center gap-3 bg-foreground text-background font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              Start My Vendor Plan
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              Everything you need to get started
            </h2>

            <ul className="space-y-5">
              {benefits.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-primary mt-0.5 shrink-0" />
                  <span className="font-body text-lg text-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-14 text-center">
              How it works
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 mb-5">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-20 bg-secondary/10" id="start">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for local businesses in Jersey City
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-10">
              OpenShop is created by Shop The Heights, a trusted local platform supporting small businesses and driving foot traffic across the Heights community.
            </p>

            <a
              href="#start"
              className="inline-flex items-center gap-3 bg-foreground text-background font-body font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-all hover:scale-105"
            >
              Start Using OpenShop
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OpenShop;
