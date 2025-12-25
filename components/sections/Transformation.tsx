import React from 'react';
import { Section } from '../Section';
import { Check, ArrowRight } from 'lucide-react';

export const Transformation: React.FC = () => {
  return (
    <Section className="bg-brand-dark">
      <div className="text-center mb-16">
        <h2 className="font-display font-black text-3xl md:text-5xl mb-4 text-white">
          LA TRANSFORMACIÓN
        </h2>
        <p className="text-brand-yellow uppercase tracking-widest font-bold">En solo 8 semanas</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* OLD WAY */}
        <div className="p-10 rounded-lg border border-brand-gray bg-brand-charcoal/50 grayscale hover:grayscale-0 transition-all duration-500">
          <h3 className="font-display font-bold text-2xl mb-8 text-gray-400">EL VIEJO PATRÓN</h3>
          <ul className="space-y-4">
            {[
              "Vivir en piloto automático",
              "Actuar por patrones heredados",
              "Callarte lo que realmente piensas",
              "Sentir que avanzas sin dirección",
              "Depender de validación externa"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-500 line-through decoration-red-500/50">
                <span className="w-2 h-2 bg-red-900 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* NEW WAY */}
        <div className="p-10 rounded-lg border-2 border-brand-yellow bg-brand-charcoal relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Check size={120} />
          </div>
          <h3 className="font-display font-bold text-2xl mb-8 text-white">TU NUEVA IDENTIDAD</h3>
          <ul className="space-y-6">
            {[
              "Cuestionar con claridad",
              "Decidir desde tu identidad, no desde el miedo",
              "Comunicar con seguridad y presencia",
              "Crear límites, visión y dirección personal",
              "Sentir que tu vida te pertenece"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white">
                <div className="mt-1 p-1 bg-brand-yellow rounded-full text-black">
                   <Check size={12} strokeWidth={4} />
                </div>
                <span className="text-lg font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-xl font-display font-bold text-white mb-8">
          No es motivación. Es criterio. <br className="md:hidden"/> No es presión. Es identidad.
        </p>
      </div>
    </Section>
  );
};