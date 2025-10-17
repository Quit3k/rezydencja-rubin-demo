import { Check, Phone } from 'lucide-react';

// Upewnij się, że ten plik istnieje w folderze 'src/assets'
import miesz1 from '../assets/miesz1.jpg';

interface RubinDifferenceAProps {
  language: 'pl' | 'de';
  id?: string;
}

export default function RubinDifferenceA({ language, id }: RubinDifferenceAProps) {
  const content = language === 'pl' ? {
    title: { part1: 'Poznaj bliżej naszą ', part2: 'OFERTĘ' },
    senior: {
      title: 'Dla Seniorów',
      altText: 'Jasny i przestronny dwuosobowy pokój w Rezydencji Rubin z drewnianymi meblami i widokiem na zieleń.',
      description: 'Nasza rezydencja oferuje komfortowe pokoje 1-, 2- i 3-osobowe z prywatnymi łazienkami, zaprojektowane bez barier architektonicznych dla pełnej wygody. Gwarantujemy najwyższy standard życia, profesjonalną opiekę dostępną całą dobę oraz dostęp do lekarzy i rehabilitantów, aby każdy dzień był pełen spokoju i poczucia bezpieczeństwa.',
      features: [
        'Pokoje 1-, 2- i 3-osobowe z łazienkami',
        'Budynek bez barier architektonicznych',
        'System przywoławczy w każdym pokoju',
        'Całodobowa opieka pielęgniarska',
        'Dostęp do lekarza i rehabilitantów',
        'Zróżnicowane zajęcia aktywizujące',
        'Winda ułatwiająca poruszanie',
        'Elastyczne pobyty (krótkie i długie)',
      ]
    },
    cta: 'Zadzwoń i zarezerwuj już dziś!'
  } : {
    title: { part1: 'Lernen Sie unser ', part2: 'ANGEBOT', part3: ' näher kennen' },
    senior: {
      title: 'Für Senioren',
      altText: 'Helles und geräumiges Doppelzimmer in der Residenz Rubin mit Holzmöbeln und Blick ins Grüne.',
      description: 'Unsere Residenz bietet komfortable Einzel-, Doppel- und Dreibettzimmer mit privaten Bädern, barrierefrei gestaltet für vollen Komfort. Wir garantieren höchsten Lebensstandard, professionelle 24-Stunden-Betreuung sowie Zugang zu Ärzten und Therapeuten, damit jeder Tag voller Ruhe und Geborgenheit ist.',
      features: [
        'Einzel-, Doppel- und Dreibettzimmer mit Bad',
        'Barrierefreies Gebäude',
        'Rufsystem in jedem Zimmer',
        '24-Stunden-Pflege',
        'Zugang zu Arzt und Therapeuten',
        'Vielfältige Aktivierungsangebote',
        'Aufzug für einfache Bewegung',
        'Flexible Aufenthalte (kurz und lang)',
      ]
    },
    cta: 'Rufen Sie an und buchen Sie noch heute!'
  };
  
  // POPRAWKA: Funkcja do przewijania do sekcji kontakt
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const FeatureCard = ({ image, title, description, features, ctaText, altText }: { image: string, title: string, description: string, features: string[], ctaText: string, altText: string }) => (
    <div className="bg-stone-50 rounded-2xl shadow-lg overflow-hidden flex flex-col w-full max-w-4xl">
      <img src={image} alt={altText} className="w-full h-72 object-cover" />
      <div className="p-8 md:p-12 flex-grow flex flex-col">
        <h3 className="text-3xl font-serif text-center font-bold text-slate-800 mb-4">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-center mb-10 flex-grow">{description}</p>
        
        <div className="flex justify-center">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 text-amber-700 mr-3 flex-shrink-0" />
                <span className="text-slate-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center mt-16">
          {/* POPRAWKA: Zmieniono <a> na <button> i dodano onClick */}
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
          >
            <Phone size={20} className="mr-2" />
            <span>{ctaText}</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-center text-slate-800 mb-16">
          {content.title.part1}<span className="text-amber-700">{content.title.part2}</span>{content.title.part3}
        </h2>

        <div className="flex justify-center">
          <FeatureCard 
            image={miesz1}
            title={content.senior.title}
            description={content.senior.description}
            features={content.senior.features}
            ctaText={content.cta}
            altText={content.senior.altText}
          />
        </div>
      </div>
    </section>
  );
}