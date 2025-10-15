import { ArrowRight } from 'lucide-react';

interface RubinDifferenceAProps {
  language: 'pl' | 'de';
}

export default function RubinDifferenceA({ language }: RubinDifferenceAProps) {
  const content = language === 'pl' ? {
    title: 'Wasza Bliskość. Nasz Priorytet.',
    description: 'Wyobraź sobie weekend, w którym nie tylko odwiedzasz bliską osobę, ale spędzasz go w komfortowych warunkach, tuż obok. Nasze prywatne domki całoroczne to rewolucja w opiece senioralnej – to przestrzeń dla Was. Na wspólne śniadania, wieczorne rozmowy i bezcenne chwile, które budują wspomnienia.',
    cta: 'POZNAJ DOMKI DLA RODZIN'
  } : {
    title: 'Ihre Nähe. Unsere Priorität.',
    description: 'Stellen Sie sich ein Wochenende vor, an dem Sie nicht nur eine geliebte Person besuchen, sondern es in komfortablen Bedingungen direkt nebenan verbringen. Unsere privaten Ganzjahreshäuser sind eine Revolution in der Seniorenpflege – ein Raum für Sie. Für gemeinsame Frühstücke, abendliche Gespräche und unbezahlbare Momente.',
    cta: 'FAMILIENHÄUSER ENTDECKEN'
  };

  return (
    <section id="offer" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Family Cottage"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            {content.title}
          </h2>
          <p className="text-xl text-stone-100 leading-relaxed mb-10">
            {content.description}
          </p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-10 py-5 rounded-lg font-semibold flex items-center space-x-3 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 text-lg">
            <span>{content.cta}</span>
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
