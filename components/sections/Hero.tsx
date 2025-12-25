
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Disc } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const handleHeroClick = () => {
    window.location.href = 'https://forms.fillout.com/t/gMUxueBycKus';
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-dark">
      {/* Background Image with strong overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/architecture/1920/1080" 
          alt="Architecture Abstract" 
          className="w-full h-full object-cover grayscale opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6 text-brand-yellow font-bold tracking-widest uppercase text-sm">
            <Disc className="w-4 h-4 animate-spin-slow" />
            <span>Identidad Crítica Pro™</span>
          </div>
          
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-[0.9] text-white mb-8">
            DEJA DE ACEPTAR<br />
            LA REALIDAD.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-white">
              EMPIEZA A CONSTRUIRLA.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 font-light leading-relaxed border-l-2 border-brand-yellow pl-6">
            Si eres un profesional o líder que ya no quiere vivir en automático… este es el inicio de tu identidad real. 
            Pasa de reaccionar… a dirigir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="text-lg px-10"
              onClick={handleHeroClick}
            >
              Toma el control de tu identidad <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorational Lines */}
      <div className="absolute bottom-0 right-0 w-1/3 h-[1px] bg-brand-yellow opacity-50" />
      <div className="absolute bottom-0 right-0 h-1/3 w-[1px] bg-brand-yellow opacity-50" />
    </div>
  );
};
