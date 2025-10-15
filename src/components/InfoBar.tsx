import { Calendar } from 'lucide-react';

interface InfoBarProps {
  language: 'pl' | 'de';
}

export default function InfoBar({ language }: InfoBarProps) {
  const text = language === 'pl'
    ? 'Dom opieki będzie dostępny dla nowych mieszkańców od 12.2025. Zarezerwuj miejsce już dziś!'
    : 'Das Pflegeheim wird ab dem 12.2025 für neue Bewohner verfügbar sein. Reservieren Sie jetzt Ihren Platz!';

  return (
    <div className="bg-gradient-to-r from-amber-700 to-amber-600 text-white py-4">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
          <Calendar size={24} className="flex-shrink-0" />
          
          {/* ZMIANA: Dodano responsywne rozmiary czcionki dla lepszego dopasowania */}
          <p className="text-center font-semibold text-sm sm:text-base lg:text-lg">{text}</p>
        
        </div>
      </div>
    </div>
  );
}