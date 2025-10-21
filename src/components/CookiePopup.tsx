// src/components/CookiePopup.tsx

import { Cookie, X } from 'lucide-react';

interface CookiePopupProps {
  language: 'pl' | 'de';
  onAccept: () => void;
  onClose: () => void;
  onShowPrivacyPolicy: () => void;
}

export default function CookiePopup({
  language,
  onAccept,
  onClose,
  onShowPrivacyPolicy,
}: CookiePopupProps) {
  
  const content = language === 'pl' ? {
    title: 'Używamy plików cookie',
    description: 'Nasza strona wykorzystuje pliki cookie oraz zewnętrzne usługi (np. Mapy Google), aby zapewnić Ci jak najlepsze doświadczenia. Klikając "Zgoda", akceptujesz ich użycie.',
    privacyPolicy: 'Polityka Prywatności',
    accept: 'Zgoda',
    close: 'Zamknij',
  } : {
    title: 'Wir verwenden Cookies',
    description: 'Unsere Website verwendet Cookies und externe Dienste (z. B. Google Maps), um Ihnen das bestmögliche Erlebnis zu bieten. Indem Sie auf "Zustimmen" klicken, akzeptieren Sie deren Verwendung.',
    privacyPolicy: 'Datenschutzrichtlinie',
    accept: 'Zustimmen',
    close: 'Schließen',
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-5 sm:p-6 md:p-8 transform animate-zoom-in relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-600 transition-colors"
          aria-label={content.close}
        >
          <X size={24} />
        </button>

        <div className="flex items-start space-x-3 sm:space-x-4">
          <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-amber-100 rounded-full flex items-center justify-center mt-1">
            <Cookie className="text-amber-700 w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div className="flex-1 pr-4">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-800 mb-2">
              {content.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
        
        {/* === POPRAWKA: Wyśrodkowanie na mobile === */}
        {/* Domyślnie (mobile): flex-col i items-center */}
        {/* Od sm wzwyż: sm:flex-row i sm:justify-end */}
        <div className="mt-6 sm:mt-8 flex flex-col items-center sm:flex-row sm:justify-center gap-3 sm:gap-4"> 
          
          {/* Przycisk Zgody (po lewej) */}
          <button
            onClick={onAccept}
            className="w-full sm:w-auto bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg order-1" // Order 1 - pierwszy na mobile i desktop
          >
            {content.accept}
          </button>
          
          {/* Przycisk Polityki Prywatności (po prawej) */}
          <button
            onClick={onShowPrivacyPolicy}
            className="w-full sm:w-auto px-6 py-3 rounded-lg font-semibold border-2 border-amber-800 text-amber-800 bg-white hover:bg-amber-50 transition-colors order-2" // Order 2 - drugi na mobile i desktop
          >
            {content.privacyPolicy}
          </button>

        </div>
      </div>
    </div>
  );
}