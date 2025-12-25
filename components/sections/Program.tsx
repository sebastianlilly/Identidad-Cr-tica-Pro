
import React from 'react';
import { Section } from '../Section';
import { Button } from '../ui/Button';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

const includes = [
  "1 sesión individual inicial (60 min) de diagnóstico profundo",
  "8 módulos digitales sobre identidad y pensamiento crítico",
  "4 sesiones grupales en vivo (análisis de casos reales)",
  "Ejercicios integrados + plantillas descargables",
  "Acompañamiento semanal por chat privado (L–V)",
  "Acceso 6 meses a la comunidad privada",
  "Certificación “Identidad Crítica Practitioner”"
];

export const Program: React.FC = () => {
  const handleApplyClick = () => {
    window.location.href = 'https://forms.fillout.com/t/gMUxueBycKus';
  };

  return (
    <Section className="bg-brand-dark relative">
        {/* Background textural element */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" 
             style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-brand-charcoal border border-brand-gray rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-brand-yellow p-8 text-center">
            <h2 className="font-display font-black text-3xl text-brand-dark uppercase mb-2">
              Identidad Crítica Pro™
            </h2>
            <p className="text-brand-dark font-bold opacity-80">Versión Grupal Híbrida • Cupos Limitados (20)</p>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                    <h3 className="text-white font-display font-bold text-xl mb-6 uppercase tracking-wide border-b border-gray-800 pb-2">
                        Lo que incluye
                    </h3>
                    <ul className="space-y-4">
                        {includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm md:text-base">{item}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col justify-center items-center bg-black/30 rounded-xl p-6 border border-white/5">
                     <span className="text-gray-400 text-sm uppercase tracking-widest mb-2">Inversión</span>
                     <div className="text-4xl font-display font-black text-white mb-2">$597 USD</div>
                     <span className="text-gray-500 text-xs mb-6 line-through decoration-red-500">$997 USD</span>
                     
                     <Button 
                        fullWidth 
                        className="mb-4"
                        onClick={handleApplyClick}
                     >
                        Aplica Ahora al Programa
                     </Button>
                     <p className="text-xs text-center text-gray-500">
                        Inscripciones abiertas solo 3 veces al año.
                     </p>
                </div>
            </div>

            {/* Guarantee */}
            <div className="bg-brand-dark/50 p-6 rounded-lg border border-brand-gray flex items-start gap-4">
                <ShieldCheck className="w-10 h-10 text-white shrink-0" />
                <div>
                    <h4 className="font-bold text-white uppercase mb-2">Garantía: Identidad o Reembolso</h4>
                    <p className="text-sm text-gray-400">
                        Si en 30 días no sientes más claridad interna y pensamiento propio, te devuelvo el 100%. Sin preguntas.
                    </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
