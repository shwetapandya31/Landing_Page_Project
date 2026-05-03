import { Rocket } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-tertiary mx-auto mb-6" />
          <p className="text-on-surface-variant text-lg">
            Ready to scale your infrastructure? Drop us a message below. 
            <br className="hidden md:block" />
            (Powered by Formspree - no backend required)
          </p>
        </div>

        {/* 
          To make this form work:
          1. Go to formspree.io and create a free account/form
          2. Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual endpoint URL
        */}
        <form 
          action="https://formspree.io/f/mojrjpyn" 
          method="POST" 
          className="glass-card p-8 md:p-12 rounded-2xl flex flex-col gap-6"
        >
          <input type="hidden" name="_subject" value="New submission from StartOS Project!" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-on-surface-variant text-sm font-medium">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tertiary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-on-surface-variant text-sm font-medium">Work Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tertiary transition-colors"
                placeholder="john@company.com"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-on-surface-variant text-sm font-medium">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              className="bg-surface/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-tertiary transition-colors resize-none"
              placeholder="Tell us about your infrastructure needs..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="mt-4 bg-tertiary text-on-tertiary label-caps py-4 rounded-lg font-bold hover:brightness-110 active:scale-[0.98] transition-all flex justify-center items-center gap-2"
          >
            Send Message <Rocket size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
