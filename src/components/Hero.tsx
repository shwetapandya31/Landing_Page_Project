import { motion } from "motion/react";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-surface via-surface to-primary-container/40" />
        <img 
          className="w-full h-full object-cover opacity-30" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU_q_O2owtA_MRkfJNuMYmvkkNy4L8BxHlkjQ15bysCX-7_KJ3h3kr7HQEqOgRlEF-fnbvU9gKj8IX4mHOdbrGsWDrmJYidl6dbSs_LqUsYgGhc2bWeqyieCT3YWYWQyZVQC-oE3YCSptFDV2xtlPHlxQm7vIebK2sGYWLwFq6XzuoCZRc_7whvzYR4f_ASwIFD2rpuqAigEkaBHzpTvg8i2jv7p7-xyMEw2qTMo_IJCzDhFmNZXKkGq3d9KYMac3HLwtKph4_MwE9"
          alt="Abstract tech background"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col gap-6"
        >
          <span className="label-caps text-tertiary tracking-[0.2em]">Intelligence at Scale</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] tracking-tighter">
            Scale Your Infrastructure with Intelligence
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed">
            STRAT_OS provides the underlying neural fabric for modern enterprise IT. Deploy autonomous cloud ecosystems and AI-driven management layers that adapt to your growth in real-time.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-tertiary text-on-tertiary px-8 py-4 label-caps rounded-sm flex items-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-tertiary/20">
              Get Started
              <Rocket size={18} />
            </button>
            <button className="border border-outline text-on-surface px-8 py-4 label-caps rounded-sm hover:bg-white/5 transition-all active:scale-95">
              View Demo
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="glass-card p-10 rounded-xl relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-tertiary/10 blur-[100px] rounded-full" />
            <div className="border-t-4 border-tertiary mb-8 w-12" />
            <h3 className="text-2xl font-bold text-white mb-6">Core Metrics</h3>
            <div className="space-y-8">
              {[
                { label: "Network Latency", value: "1.2ms" },
                { label: "Uptime Reliability", value: "99.999%" },
                { label: "AI Optimization", value: "Active" }
              ].map((metric) => (
                <div key={metric.label} className="flex justify-between items-end border-b border-white/5 pb-2 hover:border-white/20 transition-colors">
                  <span className="text-on-surface-variant label-caps">{metric.label}</span>
                  <span className="text-tertiary text-2xl font-bold font-display">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
