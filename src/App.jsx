import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Shield, Clock, FileText, ChevronDown, 
  ArrowRight, Heart, Globe, Sparkles, X, ArrowLeft,
  AlertCircle, Star
} from 'lucide-react';

// --- Components ---

const Button = ({ children, variant = 'primary', size = 'md', className = '', onClick, icon: Icon }) => {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 ease-out shadow-sm";
  const variants = {
    primary: "bg-[#2D5A27] text-white hover:bg-[#23471e] hover:shadow-md hover:-translate-y-0.5",
    accent: "bg-[#D4A017] text-white hover:bg-[#c29215] hover:shadow-md hover:-translate-y-0.5",
    outline: "border-2 border-[#2D5A27] text-[#2D5A27] hover:bg-[#2D5A27]/5",
    ghost: "text-[#222222] hover:bg-gray-100 shadow-none",
    glass: "bg-white/80 backdrop-blur-md border border-white/50 text-[#222222] hover:bg-white"
  };
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-lg font-semibold" };

  return (
    <button onClick={onClick} className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
      {Icon && <Icon className="ml-2 w-5 h-5" />}
    </button>
  );
};

// --- Main App Logic ---

export default function App() {
  const [page, setPage] = useState('home');
  const [step, setStep] = useState(0);

  return (
    <div className="min-h-screen bg-[#FAFAF7] font-sans text-[#222222]">
      {page === 'home' ? (
        <div className="pt-20">
          <nav className="fixed top-0 w-full bg-[#FAFAF7]/80 backdrop-blur-md z-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
            <span className="text-2xl font-bold tracking-tight">Willly</span>
            <Button variant="primary" size="sm" onClick={() => setPage('questionnaire')}>Create My Will</Button>
          </nav>

          <header className="py-20 text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
            >
              Create Your Canadian Will in <span className="text-[#2D5A27]">Minutes.</span>
            </motion.h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Protect your family with an affordable, legally valid Canadian will—without leaving your home.
            </p>
            <Button variant="primary" size="lg" icon={ArrowRight} onClick={() => setPage('questionnaire')}>
              Start Your Will
            </Button>
          </header>
        </div>
      ) : (
        <div className="min-h-screen bg-white p-6 md:p-12">
          <button onClick={() => setPage('home')} className="mb-8 flex items-center gap-2 hover:text-[#2D5A27]">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </button>
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Questionnaire</h1>
            <p className="text-gray-600 mb-8">Let's start with the basics. This will only take 10 minutes.</p>
            
            <div className="bg-[#FAFAF7] p-8 rounded-3xl border border-gray-100">
              <label className="block font-semibold mb-2">What is your legal first name?</label>
              <input type="text" className="w-full p-4 rounded-xl border border-gray-200 outline-none focus:border-[#2D5A27] transition-all" placeholder="e.g., John" />
              <div className="mt-6 flex justify-end">
                <Button variant="primary">Continue</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}