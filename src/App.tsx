import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyUs from './components/WhyUs';
import RubinDifferenceB from './components/RubinDifferenceB';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import InfoBar from './components/InfoBar';
import SocialBar from './components/SocialBar';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';

function App() {
  const [language, setLanguage] = useState<'pl' | 'de'>('pl');
  const [showPrivacy, setShowPrivacy] = useState(false);

  // Funkcja, która pokazuje politykę i przewija stronę na górę
  const handleShowPrivacy = () => {
    setShowPrivacy(true);
    window.scrollTo(0, 0);
  };

  // Funkcja, która obsługuje całą nawigację - bez zmian, jest idealna
  const handleNavigate = (sectionId: string) => {
    // Jeśli ID to 'hero', po prostu przewiń na samą górę okna
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Jeśli jesteśmy w polityce, zamknij ją
      if (showPrivacy) {
        setShowPrivacy(false);
      }
      return; // Zakończ funkcję
    }

    // Twoja istniejąca logika dla pozostałych sekcji
    if (showPrivacy) {
      setShowPrivacy(false);
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        language={language} 
        onLanguageChange={setLanguage}
        onNavigate={handleNavigate} 
      />

      <main>
        {showPrivacy ? (
          <PrivacyPolicyPage 
            language={language} 
            onNavigateHome={() => setShowPrivacy(false)} 
          />
        ) : (
          <>
            {/* --- POPRAWKA: Dodane ID do sekcji --- */}
            {/* Teraz nawigacja wie, gdzie ma przewijać */}
            <Hero id="hero" language={language} />
            <InfoBar language={language} />
            <WhyUs id="why-us" language={language} />
            <RubinDifferenceB id="offer" language={language} />
            <SocialBar language={language} />
            <About id="about" language={language} />
            <Gallery id="gallery" language={language} />
            <InfoBar language={language} />
            <Contact 
              id="contact"
              language={language} 
              onShowPrivacyPolicy={handleShowPrivacy} 
            />
          </>
        )}
      </main>

      <Footer 
        language={language} 
        onNavigate={handleNavigate}
        onShowPrivacyPolicy={handleShowPrivacy} 
      />
    </div>
  );
}

export default App;