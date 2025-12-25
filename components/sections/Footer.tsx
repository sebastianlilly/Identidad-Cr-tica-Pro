import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-brand-gray/30 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="font-display font-black text-2xl text-white tracking-widest uppercase mb-4">
          Identidad Crítica Pro™
        </div>
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Todos los derechos reservados. <br/>
          Diseñado para romper patrones.
        </p>
      </div>
    </footer>
  );
};