import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-4">Get in <span className="gradient-text">Touch</span></h1>
          <p className="text-slate-400 text-lg">Have questions? We're here to help you 24/7.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {[
            { 
              icon: Phone, 
              title: "Call Us", 
              info: "+1 (234) 567-890", 
              sub: "Mon - Sat: 9AM - 7PM", 
              color: "blue",
              link: "tel:+1234567890" 
            },
            { 
              icon: Mail, 
              title: "Email Us", 
              info: "support@printfixpro.com", 
              sub: "Response within 2 hours", 
              color: "cyan",
              link: "mailto:support@printfixpro.com" 
            },
            { 
              icon: MessageCircle, 
              title: "WhatsApp", 
              info: "Chat with Experts", 
              sub: "+1 (234) 567-890", 
              color: "green",
              link: "https://wa.me/1234567890" 
            }
          ].map((item, i) => (
            <motion.a
              href={item.link}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[32px] text-center hover:bg-white/[0.05] transition-all group"
            >
              <div className={`mx-auto bg-${item.color}-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-8 h-8 text-${item.color}-500`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-2xl font-bold text-white mb-1">{item.info}</p>
              <p className="text-slate-500 text-sm">{item.sub}</p>
            </motion.a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-8 md:p-10 rounded-[40px]"
          >
            <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500" 
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500" 
              />
              <textarea 
                rows="5" 
                placeholder="How can we help?" 
                className="w-full bg-slate-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 resize-none"
              ></textarea>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center space-x-3 text-lg">
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-[600px] rounded-[40px] overflow-hidden glass p-4 border border-white/10"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-74.0059413!3d40.7127837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1713330000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '30px' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
