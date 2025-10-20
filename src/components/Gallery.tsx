import { X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// === IMPORT NOWYCH ZDJĘĆ ===
// Personel
import fot1 from '../assets/fot1.png';
import fot2 from '../assets/fot2.png';
import fot3 from '../assets/fot3.png';
import fot4 from '../assets/fot4.png';

// Wnętrza (pokoje)
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';
import p9 from '../assets/p9.jpg';
import p10 from '../assets/p10.jpg';
import p11 from '../assets/p11.jpg';
import p12 from '../assets/p12.jpg';

// Istniejące zdjęcia, które zostają
import Dom from '../assets/Dom1.png';
import ogrod from '../assets/ogrod.png';
import zdj1 from '../assets/zdj1.jpeg';
// import zdj2 from '../assets/zdj2.jpg';
import domki from '../assets/domki.png';
// import domek1 from '../assets/domek1.png';

interface GalleryProps {
  language: 'pl' | 'de';
  id?: string;
}

type FilterType = 'all' | 'interiors' | 'garden' | 'team';

const INITIAL_IMAGE_COUNT = 9; // Liczba zdjęć widocznych na starcie

export default function Gallery({ language, id }: GalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  
  // === NOWOŚĆ: Stan do obsługi "Pokaż więcej" ===
  const [visibleCount, setVisibleCount] = useState(INITIAL_IMAGE_COUNT);
  
  // === NOWOŚĆ: Stan do obsługi swipe na mobile ===
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const filters = language === 'pl'
    ? [
        { id: 'all' as FilterType, label: 'WSZYSTKO' },
        { id: 'interiors' as FilterType, label: 'WNĘTRZA' },
        { id: 'garden' as FilterType, label: 'OGRÓD I OKOLICA' },
        { id: 'team' as FilterType, label: 'NASZ ZESPÓŁ' },
      ]
    : [
        { id: 'all' as FilterType, label: 'ALLES' },
        { id: 'interiors' as FilterType, label: 'INNENRÄUME' },
        { id: 'garden' as FilterType, label: 'GARTEN UND UMGEBUNG' },
        { id: 'team' as FilterType, label: 'UNSER TEAM' },
      ];

  const allImages = [
    { url: Dom, category: 'garden', alt: 'Elegancka, biała willa Rezydencji Rubin z podjazdem.' },
    { url: p1, category: 'interiors', alt: 'Przestronny pokój dwuosobowy z drewnianymi meblami.' },
    { url: fot1, category: 'team', alt: 'Portret profesjonalnego członka zespołu Rezydencji Rubin.' },
    { url: p2, category: 'interiors', alt: 'Jasne wnętrze pokoju z wygodnymi łóżkami.' },
    { url: ogrod, category: 'garden', alt: 'Słoneczny taras w ogrodzie, idealny do odpoczynku.' },
    { url: p3, category: 'interiors', alt: 'Nowoczesna łazienka przystosowana dla seniorów.' },
    { url: fot2, category: 'team', alt: 'Uśmiechnięta pielęgniarka, członkini naszego zespołu.' },
    { url: p4, category: 'interiors', alt: 'Pokój jednoosobowy z biurkiem i widokiem na zieleń.' },
    { url: zdj1, category: 'interiors', alt: 'Bezpieczna łazienka z uchwytami i bez barier.' },
    // { url: domek1, category: 'garden', alt: 'Urokliwy domek na terenie rezydencji.' },
    { url: p5, category: 'interiors', alt: 'Przytulny kącik do czytania w jednym z pokoi.' },
    { url: fot3, category: 'team', alt: 'Doświadczony rehabilitant z naszego zespołu.' },
    { url: p6, category: 'interiors', alt: 'Eleganckie meble i staranne wykończenie pokoju.' },
    // { url: zdj2, category: 'garden', alt: 'Widok z lotu ptaka na zieloną okolicę Grzybowa.' },
    { url: p7, category: 'interiors', alt: 'Dwuosobowy pokój z oddzielnymi łóżkami.' },
    { url: fot4, category: 'team', alt: 'Koordynatorka zajęć i aktywności dla mieszkańców.' },
    { url: p8, category: 'interiors', alt: 'Stylowa aranżacja wnętrza pokoju dla seniora.' },
    { url: domki, category: 'garden', alt: 'Widok na ogród i otoczenie Rezydencji Rubin.' },
    { url: p9, category: 'interiors', alt: 'Funkcjonalna szafa i miejsce do przechowywania w pokoju.' },
    { url: p10, category: 'interiors', alt: 'Jasne, dobrze oświetlone wnętrze z dużym oknem.' },
    { url: p11, category: 'interiors', alt: 'Detal wykończenia pokoju - komfort i estetyka.' },
    { url: p12, category: 'interiors', alt: 'Komfortowy pokój gotowy na przyjęcie mieszkańca.' },
  ];

  const filteredImages = activeFilter === 'all'
    ? allImages
    : allImages.filter((img) => img.category === activeFilter);
  
  // === NOWOŚĆ: Tworzymy listę zdjęć do wyświetlenia na podstawie limitu ===
  const imagesToShow = filteredImages.slice(0, visibleCount);

  const showNextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => (prevIndex! + 1) % filteredImages.length);
    }
  };

  const showPrevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prevIndex) => (prevIndex! - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  // === NOWOŚĆ: Logika do obsługi swipe na mobile ===
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    const swipeThreshold = 50; // Minimalna odległość przesunięcia palcem
  
    if (diff > swipeThreshold) {
      showNextImage(); // Swipe w lewo
    } else if (diff < -swipeThreshold) {
      showPrevImage(); // Swipe w prawo
    }
    setTouchStart(null);
  };

  return (
    <section id={id} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-center text-slate-800 mb-12">
          {language === 'pl' ? 'Galeria' : 'Galerie'}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => {
                setActiveFilter(filter.id);
                setVisibleCount(INITIAL_IMAGE_COUNT); // Resetuj widok po zmianie filtra
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-amber-700 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-amber-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* POPRAWKA: Mapujemy teraz po `imagesToShow` */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {imagesToShow.map((image, index) => (
            <div
              key={`${image.url}-${index}`}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setLightboxIndex(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* === NOWOŚĆ: Przycisk "Pokaż więcej" jest widoczny warunkowo === */}
        {visibleCount < filteredImages.length && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisibleCount(allImages.length)}
              className="inline-flex items-center justify-center border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
            >
              <Camera size={20} className="mr-2" />
              <span>{language === 'pl' ? 'Zobacz więcej zdjęć' : 'Mehr Fotos ansehen'}</span>
            </button>
          </div>
        )}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
          // === NOWOŚĆ: Dodajemy eventy dotykowe do lightboxa ===
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10">
            <X size={40} />
          </button>

          <button 
            onClick={showPrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors hidden lg:block z-10"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={filteredImages[lightboxIndex].url}
            alt={filteredImages[lightboxIndex].alt}
            className="max-w-full max-h-full object-contain animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={showNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors hidden lg:block z-10"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}