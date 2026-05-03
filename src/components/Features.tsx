import { motion } from "motion/react";
import { Cloud, Cpu, ShieldCheck, ArrowRight } from "lucide-react";

const Features = () => {
  const cards = [
    {
      title: "Cloud Integration",
      desc: "Seamlessly bridge private clusters with public clouds using our proprietary polymorphic tunneling protocols.",
      icon: <Cloud size={32} className="text-tertiary" />
    },
    {
      title: "Edge Computing",
      desc: "Push processing power to the furthest nodes of your network with automated container orchestration at the edge.",
      icon: <Cpu size={32} className="text-tertiary" />
    },
    {
      title: "Cybersecurity",
      desc: "Zero-trust architecture fortified by real-time threat intelligence and hardware-level encryption modules.",
      icon: <ShieldCheck size={32} className="text-tertiary" />
    }
  ];

  return (
    <section id="features" className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Engineered for Complexity</h2>
          <div className="h-1 w-24 bg-tertiary mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-xl border-t-4 border-transparent hover:border-tertiary transition-all duration-500 group flex flex-col"
            >
              <div className="bg-primary-container w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-on-surface mb-3">{card.title}</h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 flex-grow">
                {card.desc}
              </p>
              <a href="#" className="label-caps text-tertiary flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
