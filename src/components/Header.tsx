import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

// --- INTERFEJS I STAŁE ---
// Interfejs propsów bez zmian.
interface HeaderProps {
  language: 'pl' | 'de';
  onLanguageChange: (lang: 'pl' | 'de') => void;
  onNavigate: (sectionId: string) => void;
}

// ZMIANA 1: Centralizacja treści i tłumaczeń.
// Zamiast wielu warunków, mamy jeden obiekt, co ułatwia zarządzanie.
const content = {
  pl: {
    navLinks: [
      { label: 'DLACZEGO MY', id: 'why-us' },
      { label: 'OFERTA', id: 'offer' },
      { label: 'O NAS', id: 'about' },
      { label: 'GALERIA', id: 'gallery' },
      { label: 'KONTAKT', id: 'contact' },
    ],
    ctaText: 'ZADZWOŃ',
  },
  de: {
    navLinks: [
      { label: 'WARUM WIR', id: 'why-us' },
      { label: 'ANGEBOT', id: 'offer' },
      { label: 'ÜBER UNS', id: 'about' },
      { label: 'GALERIE', id: 'gallery' },
      { label: 'KONTAKT', id: 'contact' },
    ],
    ctaText: 'ANRUFEN',
  },
};

const PHONE_NUMBER = '+48 539 701 891';

export default function Header({ language, onLanguageChange, onNavigate }: HeaderProps) {
  // --- STATE HOOKS ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);
  
  const currentContent = content[language]; // Ułatwia dostęp do treści dla wybranego języka

  // --- EFEKTY ---
  // ZMIANA 2: Usprawniony hook do obsługi scrollowania.
  // Listener jest teraz dodawany tylko raz, co jest bardziej wydajne.
  // Logika ukrywania numeru telefonu przy scrollu została zachowana.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsPhoneVisible(false); // Ukrywa numer telefonu podczas przewijania
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Pusta tablica zależności sprawia, że efekt uruchamia się tylko raz.

  // --- HANDLERY ---
  // Funkcja do nawigacji, która zamyka menu mobilne po kliknięciu.
  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* --- GŁÓWNY NAGŁÓWEK --- */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo, które przewija na górę strony */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('hero')}>
              <img src={logo} alt="Logo Rezydencja Rubin" className="h-36 w-auto" />
            </div>

            {/* Nawigacja na desktopie */}
            <nav className="hidden lg:flex items-center space-x-8">
              {currentContent.navLinks.map((navLink) => (
                <button
                  key={navLink.id}
                  onClick={() => handleNavClick(navLink.id)}
                  className="text-sm font-medium text-slate-700 hover:text-amber-700 transition-colors relative group"
                >
                  {navLink.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* Przyciski po prawej stronie na desktopie (Język i Zadzwoń) */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button onClick={() => onLanguageChange('pl')} className={`transition-all duration-200 ${language === 'pl' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}>
                  <span className="text-2xl">🇵🇱</span>
                </button>
                <button onClick={() => onLanguageChange('de')} className={`transition-all duration-200 ${language === 'de' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}>
                  <span className="text-2xl">🇩🇪</span>
                </button>
              </div>
              
              {/* Logika przycisku "Zadzwoń" na desktopie (bez zmian) */}
              {isPhoneVisible ? (
                <button
                  onClick={() => setIsPhoneVisible(false)}
                  className="bg-amber-800 text-white px-6 py-3 rounded-lg font-medium text-base tracking-wider"
                >
                  {PHONE_NUMBER}
                </button>
              ) : (
                <button
                  onClick={() => setIsPhoneVisible(true)}
                  className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <Phone size={18} />
                  <span>{currentContent.ctaText}</span>
                </button>
              )}
            </div>
            
            {/* ZMIANA 3: Nowa sekcja po prawej stronie na mobile (Przełącznik języka i Hamburger) */}
            <div className="lg:hidden flex items-center space-x-2">
                <button 
                  onClick={() => onLanguageChange(language === 'pl' ? 'de' : 'pl')}
                  className="font-semibold text-slate-700 text-sm border border-slate-300 rounded-md w-12 h-10 transition-colors hover:bg-slate-100"
                >
                  {language === 'pl' ? 'DE' : 'PL'}
                </button>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-800">
                  {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* ZMIANA 4: Nowe, rozwijane menu mobilne zamiast pełnoekranowego. */}
      {/* Używamy transformacji i opacity do płynnego pojawiania się i znikania. */}
      <div 
        className={`fixed top-20 left-0 right-0 z-40 bg-white shadow-lg lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center p-6 space-y-5">
            {currentContent.navLinks.map((navLink) => (
                <button 
                    key={navLink.id} 
                    onClick={() => handleNavClick(navLink.id)} 
                    className="text-xl font-medium text-slate-800 hover:text-amber-700 transition-colors w-full pb-2"
                >
                    {navLink.label}
                </button>
            ))}
            <a
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center space-x-2 w-full mt-4 transition-colors"
            >
                <Phone size={18} />
                <span>{currentContent.ctaText}</span>
            </a>
        </nav>
      </div>
    </>
  );
}