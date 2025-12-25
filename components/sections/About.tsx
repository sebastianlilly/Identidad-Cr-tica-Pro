import React from 'react';
import { Section } from '../Section';
import { Quote } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Section className="bg-brand-charcoal">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 order-2 md:order-1">
          {/* Placeholder for creator image - using a specific seed for serious portrait look */}
          <div className="relative">
            <div className="absolute inset-0 border-2 border-brand-yellow translate-x-4 translate-y-4 rounded-lg" />
            <img 
              src="https://picsum.photos/seed/creator/800/1000" 
              alt="Creator" 
              className="w-full h-auto rounded-lg grayscale relative z-10 object-cover"
            />
          </div>
        </div>
        
        <div className="md:col-span-7 order-1 md:order-2">
          <Quote className="text-brand-yellow w-12 h-12 mb-6 opacity-50" />
          <h2 className="font-display font-black text-3xl md:text-4xl text-white mb-8 uppercase">
            No enseño productividad.<br/>
            No vendo motivación.<br/>
            <span className="text-brand-yellow">No quiero que me sigas.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 font-light">
            <p>
              Soy el creador del <strong className="text-white font-bold">Método Identidad Crítica™</strong>.
            </p>
            <p>
              Quiero que pienses por ti mismo, construyas tu criterio y dirijas tu vida con una identidad que sea verdaderamente tuya.
            </p>
            <p className="text-xl text-white border-l-4 border-brand-yellow pl-6 py-2 italic">
              "Mi trabajo es simple: romper lo heredado para que puedas elegir lo propio."
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};