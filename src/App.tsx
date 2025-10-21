// 1. Dodajemy importy 'useEffect' i naszego nowego komponentu
import { useState, useEffect } from 'react';
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
// Nasz nowy komponent popupu
import CookiePopup from './components/CookiePopup';

// 2. Definiujemy typy dla statusu zgody
type ConsentStatus = 'pending' | 'accepted' | 'closed';

function App() {
  const [language, setLanguage] = useState<'pl' | 'de'>('pl');
  const [showPrivacy, setShowPrivacy] = useState(false);

  // === 3. POCZĄTEK NOWEJ LOGIKI DLA POPUPU ===
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');

  // Przy pierwszym ładowaniu aplikacji, sprawdzamy co jest w localStorage
  useEffect(() => {
    const storedConsent = localStorage.getItem('rubinConsent');
    console.log("Odczytany stan z localStorage:", storedConsent);
    if (storedConsent === 'accepted' || storedConsent === 'closed') {
      setConsentStatus(storedConsent);
    }
  }, []); // Pusta tablica [] oznacza, że ten kod uruchomi się tylko raz

  // Funkcja, którą wywoła popup po kliknięciu "Zgoda"
  const handleAcceptConsent = () => {
    setConsentStatus('accepted');
    localStorage.setItem('rubinConsent', 'accepted');
  };

  // Funkcja, którą wywoła popup po kliknięciu "X"
  const handleCloseConsent = () => {
    setConsentStatus('closed');
    localStorage.setItem('rubinConsent', 'closed');
  };
  
  // Funkcja, którą przekażemy do Contact.tsx, aby mógł ponownie pokazać popup
  const handleShowConsent = () => {
    setConsentStatus('pending');
  };
  // === KONIEC NOWEJ LOGIKI ===


  // Ta funkcja pozostaje bez zmian - jest idealna
  const handleShowPrivacy = () => {
    setShowPrivacy(true);
    window.scrollTo(0, 0);
  };

  // Ta funkcja pozostaje bez zmian - jest idealna
  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      if (showPrivacy) {
        setShowPrivacy(false);
      }
      return;
    }
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
      
      {/* 4. DODAJEMY RENDEROWANIE POPUPU */}
      {/* Pokaż popup tylko jeśli status to 'pending' I jeśli nie oglądamy akurat polityki prywatności */}
      {consentStatus === 'pending' && !showPrivacy && (
        <CookiePopup
          language={language}
          onAccept={handleAcceptConsent}
          onClose={handleCloseConsent}
          onShowPrivacyPolicy={handleShowPrivacy}
        />
      )}

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
            <Hero id="hero" language={language} />
            <InfoBar language={language} />
            <WhyUs id="why-us" language={language} />
            <RubinDifferenceB id="offer" language={language} />
            <SocialBar language={language} />
            <About id="about" language={language} />
            <Gallery id="gallery" language={language} />
            <InfoBar language={language} />
            
            {/* 5. MODYFIKUJEMY PROPSY DLA <Contact /> */}
            <Contact 
              id="contact"
              language={language} 
              onShowPrivacyPolicy={handleShowPrivacy}
              // Przekazujemy aktualny stan zgody
              consentStatus={consentStatus}
              // Przekazujemy funkcję do ponownego pokazania popupa
              onShowConsent={handleShowConsent}
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