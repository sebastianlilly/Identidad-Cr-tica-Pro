
import React from 'react';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Transformation } from './components/sections/Transformation';
import { Method } from './components/sections/Method';
import { About } from './components/sections/About';
import { Program } from './components/sections/Program';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { Button } from './components/ui/Button';
import { ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  const handleEnrollClick = () => {
    window.location.href = 'https://forms.fillout.com/t/gMUxueBycKus';
  };

  return (
    <main className="bg-brand-dark min-h-screen text-white selection:bg-brand-yellow selection:text-black">
      
      {/* Sticky Navigation (Minimal) */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-white tracking-wider text-sm md:text-base">ICP™</span>
          <Button 
            variant="primary" 
            className="py-2 px-4 text-xs md:text-sm"
            onClick={handleEnrollClick}
          >
            Inscríbete
          </Button>
        </div>
      </nav>

      <Hero />
      <Problem />
      <Transformation />
      <Method />
      <About />
      <Program />
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-brand-yellow text-brand-dark text-center px-6">
        <div className="max-w-4xl mx-auto">
            <h2 className="font-display font-black text-4xl md:text-6xl mb-8 leading-tight uppercase">
            ¿Listo para dejar de aceptar la realidad y empezar a construirla?
            </h2>
            <p className="text-xl font-medium mb-10">Este es el momento.</p>
            <Button 
              className="bg-black text-white hover:bg-white hover:text-black text-lg md:text-xl px-12 py-6 shadow-2xl mx-auto"
              onClick={handleEnrollClick}
            >
                Toma el control de tu identidad <ArrowRight />
            </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
