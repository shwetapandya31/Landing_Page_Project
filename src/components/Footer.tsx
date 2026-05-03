import { Mail, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <div className="text-2xl font-black text-white tracking-tighter font-display">
              STRAT_OS
            </div>
            <div className="label-caps text-on-surface-variant">
              © 2024 STRAT_OS Infrastructure. Engineered for Scale.
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 label-caps">
            {["Privacy Policy", "Terms of Service", "Security", "Status"].map(link => (
              <a key={link} href="#" className="text-on-surface-variant hover:text-tertiary transition-colors">{link}</a>
            ))}
          </div>

          <div className="flex gap-6">
            <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-lg hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:info@strat-os.tech" className="p-3 bg-white/5 rounded-lg hover:bg-tertiary hover:text-on-tertiary transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-on-surface-variant/40 text-sm">
            Contact: info@strat-os.tech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
