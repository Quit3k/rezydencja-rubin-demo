import { ArrowRight, Camera } from 'lucide-react';
import domImage from '../assets/Dom.png';

interface HeroProps {
  language: 'pl' | 'de';
}

export default function Hero({ language }: HeroProps) {
  const content = language === 'pl' ? {
    preheadline: 'REZYDENCJA KLASY PREMIUM DLA SENIORÓW',
    headline: 'Bezpieczeństwo i Całodobowa Opieka. Nowa Definicja Jesieni Życia.',
    // NOWY NAGŁÓWEK DLA WERSJI MOBILNEJ
    mobileHeadline: 'Dom Opieki Rubin - Bezpieczeństwo i całodobowa opieka.',
    body: 'W Rezydencji Rubin profesjonalna, całodobowa opieka to fundament naszego domu. Łączymy luksusowe warunki z ciepłem rodzinnej atmosfery, aby zapewnić Państwa Bliskim spokój, komfort i poczucie godności każdego dnia. Zaufaj naszemu doświadczeniu.',
    ctaPrimary: 'ODKRYJ NASZĄ OFERTĘ',
    ctaSecondary: 'ZOBACZ GALERIĘ'
  } : {
    preheadline: 'Seniorenresidenz der Premiumklasse',
    headline: 'Sicherheit und Rund-um-die-Uhr-Betreuung. Eine neue Definition des Lebensherbstes.',
    // NOWY NAGŁÓWEK DLA WERSJI MOBILNEJ (po niemiecku)
    mobileHeadline: 'Seniorenresidenz Rubin - Sicherheit und 24-Stunden-Betreuung.',
    body: 'In der Rubin Residenz ist die professionelle Rund-um-die-Uhr-Pflege das Fundament unseres Hauses. Wir verbinden luxuriöse Bedingungen mit der Wärme einer familiären Atmosphäre, um Ihren Liebsten jeden Tag Ruhe, Komfort und ein Gefühl der Würde zu gewährleisten. Vertrauen Sie unserer Erfahrung.',
    ctaPrimary: 'ENTDECKEN SIE UNSER ANGEBOT',
    ctaSecondary: 'GALERIE'
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Zapewnia odpowiednią wysokość i padding na start
    <section className="min-h-screen flex items-center pt-20 pb-10 lg:py-20">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* ZMIANA LAYOUTU:
          - Domyślnie (mobile): flex z odwróconą kolumną (zdjęcie będzie pierwsze)
          - Od `lg` (desktop): wraca do grida z 2 kolumnami
        */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* KONTENER Z TREŚCIĄ */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* --- Treść widoczna od tabletu w górę (MD+) --- */}
            <div className="hidden md:block space-y-8">
              <div className="space-y-6">
                <p className="text-sm font-semibold tracking-widest text-amber-700 uppercase">
                  {content.preheadline}
                </p>
                <h2 className="text-4xl lg:text-5xl font-serif font-bold text-slate-800 leading-tight">
                  {content.headline.split('.')[0]}.
                  <br />
                  <span className="text-amber-700">{content.headline.split('.')[1]}.</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {content.body}
                </p>
              </div>
            </div>

            {/* --- Uproszczona treść widoczna TYLKO na mobile (do MD) --- */}
            <div className="md:hidden">
              <h2 className="text-3xl font-serif font-bold text-slate-800 leading-tight">
                {content.mobileHeadline}
              </h2>
            </div>
            
            {/* --- Przyciski (wspólne dla wszystkich widoków) --- */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => scrollToSection('offer')}
                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
              >
                <span>{content.ctaPrimary}</span>
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => scrollToSection('gallery')}
                className="border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200"
              >
                <Camera size={20} />
                <span>{content.ctaSecondary}</span>
              </button>
            </div>
          </div>
          
          {/* KONTENER ZE ZDJĘCIEM */}
          {/* ZMIANA WYSOKOŚCI ZDJĘCIA:
            - Mobile: 350px
            - Tablet: 450px
            - Desktop: 550px
          */}
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={domImage}
              alt="Rezydencja Rubin"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 md:p-8">
              <p className="text-white text-sm font-medium">
                {language === 'pl'
                  ? 'Grzybowo, nad Morzem Bałtyckim'
                  : 'Grzybowo, an der Ostsee'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}