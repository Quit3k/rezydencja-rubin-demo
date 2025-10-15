// import { Phone, Menu, X } from 'lucide-react';
// import { useState, useEffect } from 'react';

// // Dodajemy 'onNavigate' do propsów
// interface HeaderProps {
//   language: 'pl' | 'de';
//   onLanguageChange: (lang: 'pl' | 'de') => void;
//   onNavigate: (sectionId: string) => void;
// }

// export default function Header({ language, onLanguageChange, onNavigate }: HeaderProps) {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = language === 'pl'
//     ? ['O NAS', 'OFERTA', 'DLACZEGO MY', 'GALERIA', 'KONTAKT']
//     : ['ÜBER UNS', 'ANGEBOT', 'WARUM WIR', 'GALERIE', 'KONTAKT'];
  
//   const navIds = ['about', 'offer', 'why-us', 'gallery', 'contact'];

//   const handleNavClick = (id: string) => {
//     onNavigate(id);
//     setIsMenuOpen(false);
//   };

//   const ctaText = language === 'pl' ? 'ZADZWOŃ' : 'ANRUFEN';

//   return (
//     <>
//       <header
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-sm'
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-6 lg:px-8">
//           <div className="flex items-center justify-between h-20">
//             <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('hero')}>
//               <h1 className="text-2xl font-serif font-bold text-slate-800">
//                 Rezydencja <span className="text-amber-700">RUBIN</span>
//               </h1>
//             </div>

//             <nav className="hidden lg:flex items-center space-x-8">
//               {navItems.map((item, index) => (
//                 <button
//                   key={item}
//                   onClick={() => handleNavClick(navIds[index])}
//                   className="text-sm font-medium text-slate-700 hover:text-amber-700 transition-colors relative group"
//                 >
//                   {item}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300"></span>
//                 </button>
//               ))}
//             </nav>

//             <div className="hidden lg:flex items-center space-x-4">
//                <div className="flex items-center space-x-2">
//                  <button onClick={() => onLanguageChange('pl')} className={`transition-all duration-200 ${language === 'pl' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}>
//                    <span className="text-2xl">🇵🇱</span>
//                  </button>
//                  <button onClick={() => onLanguageChange('de')} className={`transition-all duration-200 ${language === 'de' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}>
//                    <span className="text-2xl">🇩🇪</span>
//                  </button>
//                </div>
//               <a
//                 href="tel:+48539701891"
//                 className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
//               >
//                 <Phone size={18} />
//                 <span>{ctaText}</span>
//               </a>
//             </div>
            
//             <div className="lg:hidden">
//               <button onClick={() => setIsMenuOpen(true)} className="p-2 text-slate-800">
//                 <Menu size={28} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-white z-[100] flex flex-col p-6">
//           <div className="flex items-center justify-between mb-16">
//             <h1 className="text-2xl font-serif font-bold text-slate-800">
//               Rezydencja <span className="text-amber-700">RUBIN</span>
//             </h1>
//             <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-800">
//               <X size={28} />
//             </button>
//           </div>
//           <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
//             {navItems.map((item, index) => (
//               <button key={item} onClick={() => handleNavClick(navIds[index])} className="text-3xl font-serif text-slate-800 hover:text-amber-700 transition-colors">
//                 {item}
//               </button>
//             ))}
//           </nav>
//         </div>
//       )}
//     </>
//   );
// }

import { Phone, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // <-- 1. Import loga

// Dodajemy 'onNavigate' do propsów
interface HeaderProps {
  language: 'pl' | 'de';
  onLanguageChange: (lang: 'pl' | 'de') => void;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ language, onLanguageChange, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = language === 'pl'
    ? ['O NAS', 'OFERTA', 'DLACZEGO MY', 'GALERIA', 'KONTAKT']
    : ['ÜBER UNS', 'ANGEBOT', 'WARUM WIR', 'GALERIE', 'KONTAKT'];
  
  const navIds = ['about', 'offer', 'why-us', 'gallery', 'contact'];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
  };

  const ctaText = language === 'pl' ? 'ZADZWOŃ' : 'ANRUFEN';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* 2. Zastąpienie napisu obrazkiem loga */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('hero')}>
              <img src={logo} alt="Logo Rezydencja Rubin" className="h-36 w-auto" />
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(navIds[index])}
                  className="text-sm font-medium text-slate-700 hover:text-amber-700 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-700 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
               <div className="flex items-center space-x-2">
                 <button onClick={() => onLanguageChange('pl')} className={`transition-all duration-200 ${language === 'pl' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}>
                   <span className="text-2xl">🇵🇱</span>
                 </button>
                 <button onClick={() => onLanguageChange('de')} className={`transition-all duration-200 ${language === 'de' ? 'opacity-100 scale-110' : 'opacity-50 hover:opacity-75'}`}>
                   <span className="text-2xl">🇩🇪</span>
                 </button>
               </div>
              <a
                href="tel:+48539701891"
                className="bg-amber-800 hover:bg-amber-900 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone size={18} />
                <span>{ctaText}</span>
              </a>
            </div>
            
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="p-2 text-slate-800">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col p-6">
          <div className="flex items-center justify-between mb-16">
            {/* 3. Zastąpienie napisu obrazkiem loga w menu mobilnym */}
            <div className="cursor-pointer" onClick={() => handleNavClick('hero')}>
                <img src={logo} alt="Logo Rezydencja Rubin" className="h-36 w-auto" />
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-800">
              <X size={28} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
            {navItems.map((item, index) => (
              <button key={item} onClick={() => handleNavClick(navIds[index])} className="text-3xl font-serif text-slate-800 hover:text-amber-700 transition-colors">
                {item}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}