import { Shield, Heart, MapPin, Sparkles, Users, ArrowRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Importowanie zdjęć z folderu assets
import zdj1 from '../assets/zdj1.jpeg';
import personel from '../assets/personel.png';
import zdj2 from '../assets/zdj2.jpg';
import ogrod from '../assets/ogrod.png';
import domki from '../assets/domki.png';

// KROK 1: Dodanie 'id' do interfejsu
interface WhyUsProps {
  language: 'pl' | 'de';
  id?: string;
}

// KROK 2: Przyjęcie 'id' jako prop
export default function WhyUs({ language, id }: WhyUsProps) {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // KROK 3: Dodanie pola 'altText' do każdego obiektu
  const contentPl = [
    {
      icon: Shield,
      title: 'BEZPIECZEŃSTWO I KOMFORT W NOWOCZESNYM STYLU',
      description: 'Nasz obiekt został zaprojektowany od podstaw z myślą o potrzebach seniorów. Przestronne pokoje z prywatnymi łazienkami, systemy przywoławcze i budynek bez barier architektonicznych to standard, nie luksus.',
      image: zdj1,
      altText: 'Nowoczesna, bezpieczna łazienka dla seniora z uchwytami i bez barier architektonicznych w Rezydencji Rubin.',
    },
    {
      icon: Heart,
      title: 'PROFESJONALNA OPIEKA, NA KTÓREJ MOŻESZ POLEGAĆ',
      description: 'Zespół wykwalifikowanych pielęgniarek i opiekunów jest dostępny 24/7. Zapewniamy stały dostęp do lekarza internisty i rehabilitantów, gwarantując zdrowie i dobre samopoczucie mieszkańców.',
      image: personel,
      altText: 'Uśmiechnięta seniorka pod profesjonalną i troskliwą opieką pielęgniarki w domu opieki Rubin.',
    },
    {
      icon: MapPin,
      title: 'LOKALIZACJA, KTÓRA LECZY DUSZĘ',
      description: 'Położenie w nadmorskim Grzybowie to nie tylko piękny widok. To dostęp do czystego powietrza, kojącego szumu fal i urokliwych terenów spacerowych, które sprzyjają regeneracji i wyciszeniu.',
      image: zdj2,
      altText: 'Widok z lotu ptaka na zielone, nadmorskie tereny Grzybowa, lokalizację Rezydencji Rubin.',
    },
    {
      icon: Sparkles,
      title: 'ŻYCIE PEŁNE PASJI, NIE NUDY',
      description: 'Wierzymy, że emerytura to czas na rozwijanie pasji. Organizujemy różnorodne zajęcia aktywizujące, od terapii zajęciowej po spotkania kulturalne, by każdy dzień przynosił nowe, inspirujące doświadczenia.',
      image: ogrod,
      altText: 'Słoneczny taras w ogrodzie Rezydencji Rubin, miejsce spotkań i aktywnego wypoczynku dla mieszkańców.',
    },
    {
      icon: Users,
      title: 'UNIKALNA BLISKOŚĆ Z RODZINĄ',
      description: 'Jako jedni z nielicznych umożliwiamy swobodne odwiedziny bliskich — bez ograniczeń, w przyjaznej i domowej atmosferze. Rodzina może spędzać czas razem w naszych eleganckich przestrzeniach, wspólnie wypić kawę w ogrodzie lub wybrać się na spacer nad morze – do pobliskiego Kołobrzegu. Wierzymy, że bliskość rodziny to najlepsza terapia i najcenniejszy dar, jaki można ofiarować seniorom.',
      image: domki,
      altText: 'Starsza kobieta przytulana przez członkinię rodziny, symbolizujące bliskość i otwarte odwiedziny w Rezydencji Rubin.',
    },
  ];

  const contentDe = [
    {
      icon: Shield,
      title: 'SICHERHEIT UND KOMFORT IM MODERNEN STIL',
      description: 'Unsere Einrichtung wurde von Grund auf mit Blick auf die Bedürfnisse von Senioren konzipiert. Geräumige Zimmer mit eigenem Bad, Rufsysteme und ein barrierefreies Gebäude sind Standard, kein Luxus.',
      image: zdj1,
      altText: 'Modernes, sicheres Badezimmer für Senioren mit Haltegriffen und ohne architektonische Barrieren in der Residenz Rubin.',
    },
    {
      icon: Heart,
      title: 'PROFESSIONELLE PFLEGE, AUF DIE SIE SICH VERLASSEN KÖNNEN',
      description: 'Ein Team qualifizierter Krankenschwestern und Betreuer ist 24/7 verfügbar. Wir gewährleisten ständigen Zugang zu einem Internisten und Rehabilitationsspezialisten.',
      image: personel,
      altText: 'Lächelnde Seniorin unter professioneller und fürsorglicher Pflege einer Krankenschwester im Pflegeheim Rubin.',
    },
    {
      icon: MapPin,
      title: 'EINE LAGE, DIE DIE SEELE HEILT',
      description: 'Die Lage im Seebad Grzybowo ist nicht nur eine schöne Aussicht. Es ist der Zugang zu sauberer Luft, beruhigendem Wellenrauschen und malerischen Spazierwegen.',
      image: zdj2,
      altText: 'Luftaufnahme der grünen Küstenlandschaft von Grzybowo, dem Standort der Residenz Rubin.',
    },
    {
      icon: Sparkles,
      title: 'EIN LEBEN VOLLER LEIDENSCHAFT, NICHT LANGEWEILE',
      description: 'Wir glauben, dass der Ruhestand eine Zeit ist, um Leidenschaften zu entwickeln. Wir organisieren verschiedene aktivierende Aktivitäten.',
      image: ogrod,
      altText: 'Sonnige Gartenterrasse in der Residenz Rubin, ein Ort für Treffen und aktive Erholung der Bewohner.',
    },
    {
      icon: Users,
      title: 'EINZIGARTIGE NÄHE ZUR FAMILIE',
      description: 'Bei uns sind Ihre Liebsten jederzeit und ohne Einschränkungen willkommen. Genießen Sie gemeinsame Zeit in einer herzlichen, familiären Atmosphäre: in unseren stilvollen Gemeinschaftsräumen, bei einem Kaffee im Garten oder während eines Ausflugs an die Ostsee ins nahegelegene Kolberg. Denn wir glauben fest daran: Die Nähe zur Familie ist die beste Therapie und das schönste Geschenk für unsere Bewohner.',
      image: domki,
      altText: 'Ältere Frau, die von einem Familienmitglied umarmt wird, als Symbol für Nähe und offene Besuche in der Residenz Rubin.',
    },
  ];

  const content = language === 'pl' ? contentPl : contentDe;
  const titles = language === 'pl' 
    ? { part1: 'Dlaczego Rezydencja ', part2: 'Rubin', part3: ' to najlepsze miejsce dla Twoich bliskich?' }
    : { part1: 'Warum die Residenz ', part2: 'Rubin', part3: ' der beste Ort für Ihre Lieben ist?' };
  const ctaText = language === 'pl' ? 'Skontaktuj się z nami' : 'Kontaktieren Sie uns';

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll('.journey-item');
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // KROK 4: Użycie 'id' przekazanego z App.tsx
    <section id={id} className="py-24 bg-stone-50" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-center text-slate-800 mb-20">
          {titles.part1}<span className="text-amber-700">{titles.part2}</span>{titles.part3}
        </h2>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-700 via-amber-600 to-amber-700 transform -translate-x-1/2 hidden lg:block"></div>
          
          <div className="space-y-12 lg:space-y-24">
            {content.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.includes(index);

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`journey-item relative flex flex-col lg:flex-row items-center transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className={`w-full lg:flex-1 ${isLeft ? 'lg:order-1 lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                      {/* KROK 5: Zastosowanie tekstu alternatywnego */}
                      <img src={item.image} alt={item.altText} className="w-full h-64 lg:h-52 object-cover" />
                      <div className="p-8">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                            <Icon className="text-amber-700" size={28} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-800 mb-3 leading-tight">
                              {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-base">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Kropka na linii czasu */}
                  <div className={`hidden lg:block ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                      <div
                        className={`w-4 h-4 bg-amber-700 rounded-full transition-all duration-500 ${
                          isVisible ? 'scale-100' : 'scale-0'
                        }`}
                      >
                        <div className="absolute inset-0 bg-amber-700 rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Pusty div dla zachowania symetrii na desktopie */}
                  <div className={`hidden lg:block lg:flex-1 ${isLeft ? 'lg:order-3' : 'lg:order-0'}`}></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-24">
            <button
              onClick={scrollToContact}
              className="bg-amber-800 hover:bg-amber-900 text-white px-10 py-5 rounded-lg font-semibold text-lg flex items-center justify-center space-x-3 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 mx-auto"
            >
              <span>{ctaText}</span>
              <ArrowRight size={22} />
            </button>
        </div>
      </div>
    </section>
  );
}