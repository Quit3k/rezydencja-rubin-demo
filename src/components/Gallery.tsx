import { X, Camera } from 'lucide-react'; // Dodajemy import ikony Camera dla przycisku
import { useState } from 'react';

// 1. Importowanie Twoich lokalnych zdjęć
import Dom from '../assets/Dom.png';
import miesz1 from '../assets/miesz1.jpg';
import ogrod from '../assets/ogrod.png';
import personel from '../assets/personel.png';
import zdj1 from '../assets/zdj1.jpeg';
import zdj2 from '../assets/zdj2.jpg';
import domki from '../assets/domki.png';
import domek1 from '../assets/domek1.png';

interface GalleryProps {
  language: 'pl' | 'de';
}

type FilterType = 'all' | 'interiors' | 'garden' | 'team' | 'life';

export default function Gallery({ language }: GalleryProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filters = language === 'pl'
    ? [
        { id: 'all' as FilterType, label: 'WSZYSTKO' },
        { id: 'interiors' as FilterType, label: 'WNĘTRZA' },
        { id: 'garden' as FilterType, label: 'OGRÓD I OKOLICA' },
        { id: 'team' as FilterType, label: 'NASZ ZESPÓŁ' },
        { id: 'life' as FilterType, label: 'ŻYCIE REZYDENCJI' },
      ]
    : [
        { id: 'all' as FilterType, label: 'ALLES' },
        { id: 'interiors' as FilterType, label: 'INNENRÄUME' },
        { id: 'garden' as FilterType, label: 'GARTEN UND UMGEBUNG' },
        { id: 'team' as FilterType, label: 'UNSER TEAM' },
        { id: 'life' as FilterType, label: 'RESIDENZLEBEN' },
      ];

  // 2. Zaktualizowana tablica zdjęć
  const images = [
    { url: Dom, category: 'garden' },
    { url: miesz1, category: 'interiors' },
    { url: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'team' },
    { url: ogrod, category: 'garden' },
    { url: personel, category: 'team' },
    { url: zdj1, category: 'interiors' },
    { url: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'team' },
    { url: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=800', category: 'life' },
    { url: zdj2, category: 'interiors' },
    { url: domki, category: 'garden' },
    { url: domek1, category: 'garden' },
  ];

  const filteredImages = activeFilter === 'all'
    ? images
    : images.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-center text-slate-800 mb-12">
          {language === 'pl' ? 'Galeria' : 'Galerie'}
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setLightboxImage(image.url)}
            >
              <img
                src={image.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* 3. Dodany przycisk na dole */}
        <div className="text-center mt-16">
          <button
            className="inline-flex items-center justify-center border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200"
          >
            <Camera size={20} className="mr-2" />
            <span>{language === 'pl' ? 'Zobacz więcej zdjęć' : 'Mehr Fotos ansehen'}</span>
          </button>
        </div>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={40} />
          </button>
          <img
            src={lightboxImage}
            alt="Lightbox"
            className="max-w-full max-h-full object-contain animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}