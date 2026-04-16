import { Heart } from "lucide-react";
import InstagramIcon from "@/components/InstagramIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">Shop The Heights</h3>
            <p className="font-body text-sm opacity-80 leading-relaxed">
              Supporting the local small businesses that make up the community fabric of Jersey City Heights.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Explore</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
              <Link to="/about" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">About</Link>
              <Link to="/get-involved" className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity">Get Involved</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Connect</h4>
            <a
              href="https://www.instagram.com/shoptheheightsjc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <InstagramIcon className="w-5 h-5" /> @shoptheheightsjc
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="font-body text-xs opacity-60 flex items-center justify-center gap-1">
            Made with <Heart className="w-3 h-3 text-primary" /> in Jersey City Heights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
