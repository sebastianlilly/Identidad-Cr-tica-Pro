import React from 'react';
import { Section } from '../Section';
import { Brain, Compass, MessageSquare, Zap } from 'lucide-react';

const pillars = [
  {
    number: "01",
    title: "Despertar Cognitivo",
    desc: "Detectas creencias heredadas, patrones automáticos y recuperas tu curiosidad crítica.",
    icon: Brain
  },
  {
    number: "02",
    title: "Pensamiento Crítico",
    desc: "Aprendes a analizar, contrastar, cuestionar y decidir sin reaccionar impulsivamente.",
    icon: Compass
  },
  {
    number: "03",
    title: "Comunicación Real",
    desc: "Expresas lo que piensas, sientes y necesitas sin temor, con claridad y presencia.",
    icon: MessageSquare
  },
  {
    number: "04",
    title: "Liderazgo Autogenerado",
    desc: "Convertís tu nueva identidad en acción: hábitos, dirección, límites y decisiones sólidas.",
    icon: Zap
  }
];

export const Method: React.FC = () => {
  return (
    <Section className="bg-white text-brand-dark" fullWidth>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 max-w-3xl">
          <h2 className="font-display font-black text-4xl md:text-6xl mb-6 uppercase tracking-tighter">
            El Método <br/> Identidad Crítica™
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Un sistema diseñado para ayudarte a pensar por ti mismo… 
            y cuando eso pasa, todo lo demás se ordena.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, i) => (
            <div key={i} className="relative group">
              <div className="border-t-4 border-brand-dark pt-6 transition-all duration-300 group-hover:border-brand-yellow">
                <div className="flex justify-between items-start mb-6">
                  <span className="font-display font-black text-5xl text-gray-200 group-hover:text-brand-dark transition-colors">
                    {pillar.number}
                  </span>
                  <pillar.icon className="w-8 h-8 text-brand-dark" />
                </div>
                <h3 className="font-display font-bold text-xl mb-4 uppercase">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};