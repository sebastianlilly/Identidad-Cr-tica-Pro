import React from 'react';
import { Section } from '../Section';
import { AlertTriangle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const painPoints = [
  "Sabes qué tienes que hacer… pero algo interno te sabotea.",
  "Repites patrones que ni siquiera elegiste tú.",
  "Piensas más en cumplir expectativas que en construir tu vida.",
  "Hablas bien, pero no comunicas con identidad.",
  "Tomas decisiones desde el miedo o desde la costumbre.",
  "Lideras proyectos, pero no lideras tu propia mente."
];

export const Problem: React.FC = () => {
  return (
    <Section className="bg-brand-charcoal border-t border-brand-gray">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6 text-red-500 font-bold tracking-widest uppercase">
            <AlertTriangle className="w-5 h-5" />
            <span>El Problema</span>
          </div>
          <h2 className="font-display font-black text-4xl md:text-5xl mb-8 leading-tight">
            NO ES PRODUCTIVIDAD.<br />
            ES FALTA DE <span className="text-white underline decoration-red-500 underline-offset-4 decoration-4">CRITERIO.</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            La mayoría de profesionales no tienen un problema de eficiencia. 
            Tienen un problema de identidad y dirección.
          </p>
          <div className="h-1 w-24 bg-red-500 mb-8" />
          <p className="font-display font-bold text-2xl text-white">
            No te falta capacidad. <br/>
            <span className="text-red-500">Te falta pensamiento propio.</span>
          </p>
        </div>

        <div className="bg-black p-8 md:p-12 rounded-sm border border-brand-gray relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent" />
          <ul className="space-y-6">
            {painPoints.map((point, idx) => (
              <motion.li 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 group"
              >
                <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors text-lg leading-relaxed">
                  {point}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};