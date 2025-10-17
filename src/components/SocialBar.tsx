import { Facebook, Instagram } from 'lucide-react';

interface SocialBarProps {
  language: 'pl' | 'de';
  id?: string; // Dodane dla spójności z innymi komponentami
}

export default function SocialBar({ language, id }: SocialBarProps) {
  const content = language === 'pl' ? {
    title: "Zobacz kulisy życia w Rezydencji Rubin",
    description: "Obserwuj nas w mediach społecznościowych, aby na bieżąco poznawać historie naszych mieszkańców, odkrywać codzienne radości i poczuć wyjątkową atmosferę naszego domu.",
    facebook: "Facebook",
    instagram: "Instagram"
  } : {
    title: "Werfen Sie einen Blick hinter die Kulissen der Rubin Residenz",
    description: "Folgen Sie uns in den sozialen Medien, um die Geschichten unserer Bewohner kennenzulernen, die täglichen Freuden zu entdecken und die einzigartige Atmosphäre unseres Hauses zu spüren.",
    facebook: "Facebook",
    instagram: "Instagram"
  };

  return (
    // Używamy 'id', ale dla tego komponentu nazwałem go 'socials', co jest bardziej adekwatne
    // W App.tsx możesz go pominąć, jeśli nie planujesz do niego nawigować
    <section id={id || 'socials'} className="bg-stone-50 py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-800 mb-4">
          {content.title}
        </h2>
        <p className="text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
          {content.description}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            // POPRAWKA: Dodany link do Facebooka i atrybuty do otwierania w nowej karcie
            href="https://www.facebook.com/profile.php?id=61578051315774"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-200"
          >
            <Facebook size={22} />
            <span>{content.facebook}</span>
          </a>
          <a
            // POPRAWKA: Dodany link do Instagrama i atrybuty do otwierania w nowej karcie
            href="https://www.instagram.com/rezydencjarubin/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-3 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
          >
            <Instagram size={22} />
            <span>{content.instagram}</span>
          </a>
        </div>
      </div>
    </section>
  );
}