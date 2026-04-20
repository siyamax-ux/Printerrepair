import Hero from '../components/Hero';
import Brands from '../components/Brands';
import ServiceCard from '../components/ServiceCard';
import { Printer, Droplets, PenTool, Layout, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredServices = [
    {
      icon: Printer,
      title: "Hardward Repair",
      description: "Complete hardware diagnostics and repair for all mechanical issues, paper jams, and part replacements.",
      price: "$29",
      delay: 0.1
    },
    {
      icon: Droplets,
      title: "Cartridge Refill",
      description: "High-quality ink and toner refilling services that keep your printer running efficiently for less.",
      price: "$15",
      delay: 0.2
    },
    {
      icon: Layout,
      title: "Installation & Setup",
      description: "Professional installation and network setup for home or office printer environments.",
      price: "$39",
      delay: 0.3
    }
  ];

  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Business Owner",
      content: "Excellent service! They fixed my office printer the same day I called. Highly recommended.",
      rating: 5
    },
    {
      name: "Sarah Miller",
      role: "Graphic Designer",
      content: "The cartridge refilling service is top-notch. Saved me hundreds of dollars over time.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Freelancer",
      content: "Very professional team. They helped me set up my wireless printer in no time.",
      rating: 4
    }
  ];

  return (
    <div className="pb-20">
      <Hero />
      <Brands />

      {/* Services Section */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-bold uppercase tracking-widest mb-4"
            >
              Our Services
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Professional Solutions for <br /> Every <span className="gradient-text">Printer Issue</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1544216717-3bbf52512659?auto=format&fit=crop&q=80&w=800" 
                alt="Repaired Printer" 
                className="rounded-[40px] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 glass p-8 rounded-[32px] border border-blue-500/20 hidden md:block">
                <div className="text-4xl font-bold text-blue-500 mb-1">10+</div>
                <div className="text-slate-400 font-medium">Years Experience</div>
              </div>
            </motion.div>

            <div>
              <h2 className="text-4xl font-bold mb-8">Why Choose <span className="text-blue-500">PrintFix Pro</span>?</h2>
              <div className="space-y-6">
                {[
                  { title: "Same-Day Service", desc: "We understand your urgency and provide quick repairs." },
                  { title: "Genuine Spare Parts", desc: "We only use original parts for long-lasting performance." },
                  { title: "Certified Technicians", desc: "Our team consists of industry-certified experts." },
                  { title: "Fair Pricing", desc: "Transparent upfront pricing with no hidden costs." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-blue-600/20 p-2 rounded-lg mt-1">
                      <CheckCircle className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Happy Customers</h2>
            <p className="text-slate-400">Join 5000+ satisfied customers who trust our service.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-3xl"
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-lg italic text-slate-300 mb-6 font-medium">"{t.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-xl">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold">{t.name}</h5>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
