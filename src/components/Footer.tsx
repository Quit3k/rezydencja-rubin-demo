import { Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  language: 'pl' | 'de';
  onNavigate: (sectionId: string) => void;
  onShowPrivacyPolicy: () => void;
}

export default function Footer({ language, onNavigate, onShowPrivacyPolicy }: FooterProps) {
  const year = new Date().getFullYear();

  // POPRAWKA: Dodano pole 'brandName' do tłumaczeń
  const content = language === 'pl' ? {
    brandName: 'Dom Opieki',
    description: { part1: 'Luksusowa rezydencja seniora', part2: 'nad Morzem Bałtyckim.'},
    menuTitle: 'Menu',
    menuItems: ['Oferta', 'Galeria', 'Kontakt'],
    contactTitle: 'Kontakt',
    hoursTitle: 'Godziny otwarcia',
    hoursDays: 'Poniedziałek - Piątek',
    copyright: 'Wszystkie prawa zastrzeżone.',
    privacyPolicy: 'Polityka Prywatności'
  } : {
    brandName: 'Seniorenresidenz', // Tłumaczenie dla "Dom Opieki"
    description: { part1: 'Luxus-Seniorenresidenz', part2: 'an der Ostsee.' },
    menuTitle: 'Menü',
    menuItems: ['Angebot', 'Galerie', 'Kontakt'],
    contactTitle: 'Kontakt',
    hoursTitle: 'Öffnungszeiten',
    hoursDays: 'Montag - Freitag',
    copyright: 'Alle Rechte vorbehalten.',
    privacyPolicy: 'Datenschutzrichtlinie'
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-stone-300">
          
          <div className="text-center lg:text-left">
            {/* POPRAWKA: Użycie przetłumaczonej nazwy */}
            <h3 className="text-xl font-serif font-bold">{content.brandName}</h3>
            <h3 className="text-3xl font-serif font-bold text-amber-700 mb-4">RUBIN</h3>
            <p className="text-sm">
              {content.description.part1}
              <br />
              {content.description.part2}
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-bold mb-4 text-lg">{content.menuTitle}</h4>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('offer')} className="hover:text-amber-700 transition-colors">{content.menuItems[0]}</button></li>
              <li><button onClick={() => onNavigate('gallery')} className="hover:text-amber-700 transition-colors">{content.menuItems[1]}</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-amber-700 transition-colors">{content.menuItems[2]}</button></li>
            </ul>
          </div>

          <div className="text-center">
            <h4 className="font-bold mb-4 text-lg">{content.contactTitle}</h4>
            <ul className="space-y-2">
              <li>Bluszczowa 9, 78-132 Grzybowo</li>
              <li><a href="tel:+48539701891" className="hover:text-amber-700 transition-colors">+48 539 701 891</a></li>
              {/* POPRAWKA: Zaktualizowany adres e-mail */}
              <li><a href="mailto:kontakt@domopiekirubin.pl" className="hover:text-amber-700 transition-colors">kontakt@domopiekirubin.pl</a></li>
            </ul>
          </div>

          <div className="text-center lg:text-right">
            <h4 className="font-bold mb-4 text-lg">{content.hoursTitle}</h4>
            <p>{content.hoursDays}</p>
            <p className="mb-4">8:00 - 20:00</p>
            <div className="flex justify-center lg:justify-end space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61578051315774" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-stone-300 hover:text-amber-700 transition-colors"><Facebook size={24} /></a>
              <a href="https://www.instagram.com/rezydencjarubin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-stone-300 hover:text-amber-700 transition-colors"><Instagram size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 pt-8 text-center text-stone-400 text-sm space-y-4">
          <p>
            <button onClick={onShowPrivacyPolicy} className="underline hover:text-white transition-colors">
              {content.privacyPolicy}
            </button>
          </p>
          {/* POPRAWKA: Użycie przetłumaczonej nazwy w copyright */}
          <p>© {year} {content.brandName} RUBIN. {content.copyright}</p>
        </div>
      </div>
    </footer>
  );
}