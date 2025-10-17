import { Calendar } from 'lucide-react';

// Interfejs propsów bez zmian, wszystko jest OK
interface InfoBarProps {
  language: 'pl' | 'de';
  // Dodajemy opcjonalne id, chociaż w tym komponencie go nie używamy.
  // To dobra praktyka, aby wszystkie komponenty-sekcje miały tę samą "sygnaturę".
  id?: string;
}

export default function InfoBar({ language, id }: InfoBarProps) {
  // POPRAWKA: Zaktualizowane teksty zgodnie z Twoją prośbą
  const text = language === 'pl'
    ? 'Zapisy ruszają w grudniu 2025. Przyjęcia nowych Mieszkańców od stycznia 2026. Zarezerwuj miejsce już dziś!'
    : 'Anmeldungen ab Dezember 2025. Aufnahme neuer Bewohner ab Januar 2026. Reservieren Sie jetzt Ihren Platz!';

  return (
    // Cała struktura i klasy CSS pozostają bez zmian
    <div id={id} className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <Calendar size={24} className="flex-shrink-0" />
          
          <p className="text-center font-semibold text-sm sm:text-base lg:text-lg">{text}</p>
        
        </div>
      </div>
    </div>
  );
}