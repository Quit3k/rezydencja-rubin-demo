import { useState } from 'react';
import { Check } from 'lucide-react';

interface AboutProps {
  language: 'pl' | 'de';
}

export default function About({ language }: AboutProps) {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const content = language === 'pl' ? {
    sectionTitle: { part1: 'Poznaj nasz ', part2: 'ZESPÓŁ' },
    philosophyTitle: 'NASZA FILOZOFIA: DOM, NIE INSTYTUCJA',
    mission: {
      startText: 'Rezydencja Rubin narodziła się z potrzeby serca – by stworzyć miejsce, które przeczy stereotypom o domach opieki. Fundamentem naszej pracy są wartości:',
      values: ['Empatia', 'Szacunek', 'Godność'],
      endText: 'Dzięki nim nie jesteśmy placówką, a prawdziwym domem – rodzinną przystanią, gdzie każdy mieszkaniec jest traktowany z najwyższą troską, a jego potrzeby są zawsze na pierwszym miejscu.'
    },
    team: [
      { name: 'Dr Anna Kowalska', role: 'Dyrektor Medyczny', image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Marta Nowak', role: 'Kierownik Pielęgniarstwa', image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Piotr Wiśniewski', role: 'Specjalista Rehabilitacji', image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Katarzyna Zielińska', role: 'Koordynator Aktywności', image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ]
  } : {
    sectionTitle: { part1: 'Lernen Sie unser ', part2: 'TEAM', part3: ' kennen' },
    philosophyTitle: 'UNSERE PHILOSOPHIE: EIN ZUHAUSE, KEINE INSTITUTION',
    mission: {
      startText: 'Die Rubin Residenz wurde aus dem Herzen geboren, um einen Ort zu schaffen, der Stereotypen widerspricht. Die Grundlage unserer Arbeit sind Werte:',
      values: ['Empathie', 'Respekt', 'Würde'],
      endText: 'Dank ihnen sind wir keine Einrichtung, sondern ein echtes Zuhause – ein Familienhafen, in dem jeder Bewohner mit größter Sorgfalt behandelt wird und seine Bedürfnisse immer an erster Stelle stehen.'
    },
    team: [
      { name: 'Dr. Anna Kowalska', role: 'Medizinische Direktorin', image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Marta Nowak', role: 'Pflegeleitung', image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Piotr Wiśniewski', role: 'Rehabilitationsspezialist', image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400' },
      { name: 'Katarzyna Zielińska', role: 'Aktivitätskoordinatorin', image: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=400' },
    ]
  };

  return (
    <section id="about" className="py-24 bg-white">
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
              {content.team.map((member, index) => (
                <div
                  key={index}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredMember(index)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-2xl transition-opacity duration-300 flex items-end p-4 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <div className="text-white">
                      <p className="font-bold text-lg leading-tight">{member.name}</p>
                      <p className="text-sm text-stone-300">{member.role}</p>
                    </div>
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