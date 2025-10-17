import { Check } from 'lucide-react';

// KROK 1: Importowanie lokalnych zdjęć
import fot1 from '../assets/fot1.png';
import fot2 from '../assets/fot2.png';
import fot3 from '../assets/fot3.png';
import fot4 from '../assets/fot4.png';

// KROK 2: Dodanie 'id' do interfejsu
interface AboutProps {
  language: 'pl' | 'de';
  id?: string;
}

// KROK 3: Przyjęcie 'id' jako prop
export default function About({ language, id }: AboutProps) {
  // Usunęliśmy state `hoveredMember`, ponieważ nie będzie już potrzebny

  const content = language === 'pl' ? {
    sectionTitle: { part1: 'Poznaj nasz ', part2: 'ZESPÓŁ' },
    philosophyTitle: 'NASZA FILOZOFIA: DOM, NIE INSTYTUCJA',
    mission: {
      startText: 'Rezydencja Rubin narodziła się z potrzeby serca – by stworzyć miejsce, które przeczy stereotypom o domach opieki. Fundamentem naszej pracy są wartości:',
      values: ['Empatia', 'Szacunek', 'Godność'],
      endText: 'Dzięki nim nie jesteśmy placówką, a prawdziwym domem – rodzinną przystanią, gdzie każdy mieszkaniec jest traktowany z najwyższą troską, a jego potrzeby są zawsze na pierwszym miejscu.'
    },
    // KROK 4: Zaktualizowana tablica 'team'
    team: [
      { image: fot1, altText: 'Portret dyrektor medycznej Rezydencji Rubin.' },
      { image: fot2, altText: 'Portret kierowniczki pielęgniarstwa w Rezydencji Rubin.' },
      { image: fot3, altText: 'Portret specjalisty od rehabilitacji w Rezydencji Rubin.' },
      { image: fot4, altText: 'Portret koordynatorki aktywności dla seniorów w Rezydencji Rubin.' },
    ]
  } : {
    sectionTitle: { part1: 'Lernen Sie unser ', part2: 'TEAM', part3: ' kennen' },
    philosophyTitle: 'UNSERE PHILOSOPHIE: EIN ZUHAUSE, KEINE INSTITUTION',
    mission: {
      startText: 'Die Rubin Residenz wurde aus dem Herzen geboren, um einen Ort zu schaffen, der Stereotypen widerspricht. Die Grundlage unserer Arbeit sind Werte:',
      values: ['Empathie', 'Respekt', 'Würde'],
      endText: 'Dank ihnen sind wir keine Einrichtung, sondern ein echtes Zuhause – ein Familienhafen, in dem jeder Bewohner mit größter Sorgfalt behandelt wird und seine Bedürfnisse immer an erster Stelle stehen.'
    },
    // KROK 4: Zaktualizowana tablica 'team' w drugim języku
    team: [
        { image: fot1, altText: 'Porträt der medizinischen Direktorin der Residenz Rubin.' },
        { image: fot2, altText: 'Porträt der Pflegeleiterin in der Residenz Rubin.' },
        { image: fot3, altText: 'Porträt des Rehabilitationsspezialisten in der Residenz Rubin.' },
        { image: fot4, altText: 'Porträt der Aktivitätskoordinatorin für Senioren in der Residenz Rubin.' },
    ]
  };

  return (
    // KROK 5: Użycie 'id' przekazanego z App.tsx
    <section id={id} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800">
            {content.sectionTitle.part1}
            <span className="text-amber-700">{content.sectionTitle.part2}</span>
            {content.sectionTitle.part3}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif font-bold text-slate-800 leading-tight">
              {content.philosophyTitle}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {content.mission.startText}
            </p>
            <ul className="space-y-3 py-2">
              {content.mission.values.map((value, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-6 w-6 text-amber-700 mr-3 flex-shrink-0" />
                  <span className="text-xl font-semibold text-slate-700">{value}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-slate-600 leading-relaxed">
              {content.mission.endText}
            </p>
          </div>

          <div>
            <div className="grid grid-cols-2 gap-6">
              {/* KROK 6: Uproszczona pętla renderująca tylko zdjęcia */}
              {content.team.map((member, index) => (
                <div key={index} className="group">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.altText} // Używamy nowego tekstu alternatywnego
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}