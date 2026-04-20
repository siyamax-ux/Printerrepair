import { motion } from 'framer-motion';
import { Award, Users, Shield, Clock } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Successful Repairs", value: "15k+" },
    { label: "Happy Clients", value: "12k+" },
    { label: "Expert Technicians", value: "25+" },
    { label: "Years Experience", value: "10+" }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text- blue-500 font-bold uppercase tracking-widest mb-4">About PrintFix Pro</h2>
            <h1 className="text-5xl font-extrabold mb-8 leading-tight">We are the leading <br /><span className="gradient-text">Printer Experts</span> in Tech City</h1>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Founded in 2014, PrintFix Pro started with a simple mission: to provide high-quality, reliable, and affordable printer repair services to the local community.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Today, we have grown into a team of certified professionals capable of handling the most complex issues across all major brands. Whether it's a home inkjet or a heavy-duty industrial plotter, we have the expertise to fix it.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="glass p-6 rounded-2xl border border-white/5">
                  <div className="text-3xl font-bold text-blue-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" 
              alt="Our Workshop" 
              className="rounded-[40px] shadow-2xl relative z-10"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: Shield, 
              title: "Our Mission", 
              desc: "To deliver excellence in every repair and ensure your productivity never stops due to hardware failure." 
            },
            { 
              icon: Award, 
              title: "Our Vision", 
              desc: "To be the most trusted name in printer technology and maintenance services globally." 
            },
            { 
              icon: Users, 
              title: "Our Values", 
              desc: "Integrity, transparency, and customer satisfaction are at the heart of everything we do." 
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[32px] hover:bg-white/[0.05] transition-all"
            >
              <div className="bg-blue-600/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
