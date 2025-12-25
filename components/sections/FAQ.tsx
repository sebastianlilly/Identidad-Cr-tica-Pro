
import React, { useState } from 'react';
import { Section } from '../Section';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: "¿Es para mí si ya he hecho cursos de productividad o liderazgo?",
    a: "Sí. Esto no es productividad ni liderazgo tradicional: es pensamiento propio. La mayoría de cursos te enseñan a 'hacer' mejor. Esto te enseña a 'ser' y 'decidir' mejor. Lo cambia todo."
  },
  {
    q: "¿Necesito conocimientos previos?",
    a: "No. Solo la disposición honesta a cuestionarte y romper tus propios moldes."
  },
  {
    q: "¿Cuánto tiempo requiere por semana?",
    a: "Entre 2 y 4 horas. Está diseñado para transformar sin saturar tu agenda profesional."
  },
  {
    q: "¿Qué pasa si no puedo asistir a alguna sesión en vivo?",
    a: "Todas las sesiones quedan grabadas y subidas a tu plataforma privada para acceso de por vida."
  },
  {
    q: "¿Puedo hacer preguntas durante el programa?",
    a: "Sí, tienes acompañamiento semanal directo por chat. No estás solo en el proceso."
  }
];

// Added React.FC type to handle standard props like 'key' correctly in JSX
const AccordionItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-brand-gray">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="font-display font-bold text-lg md:text-xl text-white group-hover:text-brand-yellow transition-colors pr-4">
          {q}
        </span>
        <span className={`text-brand-yellow transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus /> : <Plus />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400 leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  return (
    <Section className="bg-brand-dark">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-12 text-center uppercase">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </Section>
  );
};
