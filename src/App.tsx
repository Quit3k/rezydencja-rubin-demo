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

  // Funkcja, która obsługuje całą nawigację
  const handleNavigate = (sectionId: string) => {
    // Jeśli jesteśmy na podstronie, najpierw wróć na stronę główną
    if (showPrivacy) {
      setShowPrivacy(false);
      // Poczekaj chwilę, aż widok się przełączy i dopiero przewiń
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Jeśli jesteśmy na stronie głównej, po prostu przewiń
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
          // Jeśli `showPrivacy` jest true, pokaż TYLKO treść polityki
          <PrivacyPolicyPage 
            language={language} 
            onNavigateHome={() => setShowPrivacy(false)} 
          />
        ) : (
          // W przeciwnym razie, pokaż wszystkie sekcje strony głównej
          <>
            <Hero language={language} />
            <InfoBar language={language} />
            <WhyUs language={language} />
            <RubinDifferenceB language={language} />
            <SocialBar language={language} />
            <About language={language} />
            <Gallery language={language} />
            <InfoBar language={language} />
            <Contact 
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