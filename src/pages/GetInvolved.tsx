import { motion } from "framer-motion";
import { Handshake, Megaphone, CalendarHeart, ArrowRight } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ways = [
  {
    icon: Handshake,
    title: "Join an Initiative",
    description:
      "Participate in Shop The Block Bingo, holiday markets, and neighborhood-wide events. Get your business in front of new customers.",
  },
  {
    icon: Megaphone,
    title: "Promote Your Events",
    description:
      "Have a special, sale, or event? We'll help amplify it to the neighborhood through our platform and Instagram community.",
  },
  {
    icon: CalendarHeart,
    title: "Partner With Us",
    description:
      "Collaborate on cross-business initiatives, sponsorships, and community programs that benefit everyone in the Heights.",
  },
];

const GetInvolved = () => {
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
              For Businesses
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground mb-6">
              Let's grow{" "}
              <span className="text-primary">together</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              Whether you're a longtime Heights shop or just opening your doors, there's a place for you in our community.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {ways.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-background p-8 rounded-2xl border border-border hover:border-primary/30 transition-all"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to get started?
            </h2>
            <p className="font-body text-muted-foreground mb-8">
              Reach out on Instagram to connect with us. We'd love to hear from you.
            </p>
            <a
              href="https://www.instagram.com/shoptheheightsjc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-body font-semibold px-8 py-4 rounded-full hover:scale-105 transition-all"
            >
              <Instagram className="w-5 h-5" />
              Message Us on Instagram
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;
