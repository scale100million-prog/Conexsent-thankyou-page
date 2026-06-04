import { motion } from 'motion/react';
import { 
  Network, 
  CheckCircle2, 
  Mail, 
  Calendar, 
  Store, 
  MessageCircle, 
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export default function App() {
  const handleWhatsAppClick = () => {
    // Fire Meta Pixel Lead event safely
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }
    // Redirect to the custom WhatsApp invite
    window.open('https://chat.whatsapp.com/FSyabKlYMCQKrS3gUpzEWS?mode=gi_t', '_blank');
  };

  // Note Section items
  const nextSteps = [
    {
      id: 1,
      num: '01',
      icon: Mail,
      text: "The meeting link has been sent to your email.",
      highlight: "meeting link",
      color: "from-teal-500/10 to-emerald-500/10 border-teal-500/20 text-teal-400"
    },
    {
      id: 2,
      num: '02',
      icon: Calendar,
      text: "Our team will reach out to you on WhatsApp before the call to confirm your slot. Be ready at your scheduled time.",
      highlight: "WhatsApp",
      color: "from-emerald-500/10 to-green-500/10 border-emerald-500/20 text-emerald-400"
    },
    {
      id: 3,
      num: '03',
      icon: Store,
      text: "Before the call, take a look at your store from a buyer's eye — we will be doing exactly that together on the call.",
      highlight: "buyer's eye",
      color: "from-blue-500/10 to-teal-500/10 border-blue-500/20 text-blue-400"
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Visual Accent Gradients for Luxury Aesthetic */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40 select-none">
        <div className="absolute top-[-10%] left-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[120px] animate-pulse duration-[8000ms]" />
        <div className="absolute top-[20%] right-1/4 w-[400px] h-[400px] rounded-full bg-teal-500/10 blur-[100px] animate-pulse duration-[6000ms]" />
        <div className="absolute top-[-5%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-neutral-500/5 blur-[80px]" />
      </div>

      {/* Main Grid Lines Mockup / Premium Background structure */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-12 pb-36 md:pt-16 md:pb-44 flex flex-col items-center">
        
        {/* Brand Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-2.5 mb-14 md:mb-20 group"
          id="conexsent-brand-header"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 shadow-xl group-hover:border-emerald-500/30 transition-all duration-300">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Network className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 transition-colors duration-300" />
          </div>
          <span className="font-display font-bold tracking-[0.25em] text-lg text-neutral-200">
            CONEXSENT
          </span>
        </motion.div>

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          
          {/* Headline Container with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-6"
            id="main-headline-container"
          >
            <div className="relative mb-4 inline-flex items-center justify-center p-0.5 rounded-full bg-neutral-900 border border-neutral-800">
              <span className="px-3.5 py-1 text-xs font-medium tracking-wider text-emerald-400 bg-neutral-950 rounded-full font-sans shadow-inner inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> APPLICATION RECEIVED
              </span>
            </div>
            
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-2">
              Thank You for <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Applying!</span> 🙏
            </h1>
          </motion.div>

          {/* Body Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="text-neutral-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-sans font-light"
            id="main-body-text"
          >
            Welcome to <span className="font-semibold text-neutral-100">Conexsent!</span> 🎉 You have just taken the first step towards turning your store into a <span className="font-medium text-emerald-300 underline decoration-emerald-500/40 decoration-2 underline-offset-4">brand that actually sells</span>.
          </motion.p>
        </div>

        {/* Note Section card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-2xl"
          id="note-section-card"
        >
          <div className="relative rounded-2xl bg-neutral-900/40 backdrop-blur-xl border border-neutral-800/80 p-6 md:p-8 shadow-2xl shadow-emerald-950/5 overflow-hidden">
            
            {/* Subtle glow effect on card edge */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-emerald-500/5 blur-[55px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] bg-teal-500/5 blur-[55px] pointer-events-none rounded-full" />

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800/60">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <h2 className="font-display text-sm md:text-base font-semibold tracking-wider text-neutral-400 uppercase">
                What Happens Next?
              </h2>
            </div>

            {/* Note list section (Styled Numbered List) */}
            <ol className="space-y-6 md:space-y-7 relative" id="note-numbered-list">
              {nextSteps.map((step, idx) => {
                const IconComponent = step.icon;
                return (
                  <motion.li 
                    key={step.id} 
                    className="flex gap-4 md:gap-5 group/item cursor-default items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                  >
                    {/* Number and Icon graphic */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${step.color} border flex items-center justify-center font-display font-bold text-sm shadow-md transition-transform duration-300 group-hover/item:scale-105`}>
                        {step.num}
                      </div>
                      
                      {idx !== nextSteps.length - 1 && (
                        <div className="w-[1.5px] h-10 md:h-12 bg-gradient-to-b from-neutral-800 to-transparent mt-2 opacity-50" />
                      )}
                    </div>

                    {/* Step description */}
                    <div className="flex-1 pt-1">
                      <div className="flex items-center gap-2 mb-1">
                        <IconComponent className="w-4 h-4 text-neutral-400 group-hover/item:text-emerald-400 transition-colors duration-300" />
                        <span className="font-display text-xs font-semibold text-neutral-400 group-hover/item:text-neutral-300 transition-colors duration-300">
                          Step {step.id}
                        </span>
                      </div>
                      <p className="text-neutral-300 text-sm md:text-base leading-relaxed">
                        {/* Highlight key words automatically in descriptions */}
                        {step.text.split(step.highlight).map((node, index, arr) => {
                          return (
                            <span key={index}>
                              {node}
                              {index !== arr.length - 1 && (
                                <span className="font-semibold text-neutral-100 underline decoration-emerald-500/30 decoration-1 underline-offset-2">
                                  {step.highlight}
                                </span>
                              )}
                            </span>
                          );
                        })}
                      </p>
                    </div>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </motion.div>
      </div>

      {/* Sticky Footer CTA */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-50 bg-neutral-950/90 backdrop-blur-md border-t border-neutral-800/80 px-4 py-4 md:py-5 flex justify-center items-center"
        id="sticky-footer-cta-container"
      >
        <div className="w-full max-w-xl">
          <motion.button
            onClick={handleWhatsAppClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-[#25D366] hover:bg-[#20ba59] active:bg-[#1ca34d] text-white font-sans font-bold text-base md:text-lg py-4 px-6 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-[#25D366]/20 transition-all duration-200 cursor-pointer text-center group"
            id="whatsapp-community-sticky-button"
            style={{ touchAction: "manipulation" }}
          >
            <MessageCircle className="w-5 h-5 text-white animate-pulse shrink-0" />
            <span className="truncate">Join Our WhatsApp Community</span>
            <ArrowRight className="w-4 h-4 text-white opacity-80 group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
