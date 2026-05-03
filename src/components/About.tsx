import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-tertiary/20 rounded-xl blur-3xl group-hover:bg-tertiary/30 transition-all duration-700" />
            <img 
              className="relative rounded-xl border border-white/10 shadow-2xl object-cover aspect-video w-full" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8L2wBbslbEHhbrf8oRVFSfesIszAYAOEXrDKbYVlWroLCh08I6aWDz7ONglfpBWLReSXma8AqxGUYA6JYEJrabmkMGVjOvJuo9WHsrlByFq97eCWv7Um20hU2w4wei3XyrMdXzTvTe33zkTKzFDphXHguf-bwbEx9vUzXWgwCr7ECm63nnU99kEnPGWbcxR-Lf6bSdw_p1IFeMDktfUwDn9wDdAHneh4rgCb5_LYmxSyYnZljzGTKbSRyacy1PUrrvlvX0Wp8mbeW"
              alt="High-tech server architecture"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <span className="label-caps text-tertiary">Our Mission</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">Architecting the Backbone of Tomorrow</h2>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              STRAT_OS was born from the need for absolute reliability in an increasingly fragmented digital world. We don't just build cloud tools; we engineer the foundations of modern enterprise.
            </p>
            <p className="text-on-surface-variant/80 leading-relaxed">
              Our team of systems architects and AI researchers work tirelessly to eliminate technical debt and bridge the gap between legacy systems and the future of distributed computing. We believe infrastructure should be invisible, intelligent, and infinite.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/5 mt-4">
              <div>
                <div className="text-tertiary text-4xl font-bold font-display">500+</div>
                <div className="label-caps text-on-surface-variant mt-1">Global Nodes</div>
              </div>
              <div>
                <div className="text-tertiary text-4xl font-bold font-display">24/7</div>
                <div className="label-caps text-on-surface-variant mt-1">Threat Monitoring</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
