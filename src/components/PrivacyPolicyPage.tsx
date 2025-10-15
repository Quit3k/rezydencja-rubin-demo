import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyPageProps {
  language: 'pl' | 'de';
  onNavigateHome: () => void;
}

export default function PrivacyPolicyPage({ language, onNavigateHome }: PrivacyPolicyPageProps) {

  const contentData = {
    pl: {
      title: 'Polityka Prywatności i Plików Cookies',
      goBack: 'Wróć na stronę główną',
      intro: [
        'Niniejsza Polityka prywatności i plików cookies określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem przez nich z serwisu internetowego Rezydencji Rubin oraz wykorzystania plików cookies.',
        'Polityka zawiera przede wszystkim zasady dotyczące przetwarzania danych osobowych przez Administratora w Serwisie, w tym podstawy, cele i zakres przetwarzania danych osobowych oraz prawa osób, których dane dotyczą, a także informacje w zakresie stosowania w Serwisie plików cookies oraz narzędzi analitycznych.'
      ],
      sections: [
        { title: '§1 Definicje', items: [
            '<strong>Administrator</strong> – Teresa Matusewicz, prowadząca działalność gospodarczą pod firmą RUBIN TERESA MATUSEWICZ, z siedzibą przy ul. Bluszczowa 9, 78-132 Korzystno, NIP: 6691011439.',
            '<strong>Strona Internetowa</strong> lub <strong>Serwis</strong> – serwis dostępny pod adresem: rezydencjarubin.pl (oraz/lub domseniorarubin.pl).',
            '<strong>Użytkownik</strong> – każdy podmiot, który przegląda zawartość Strony Internetowej.',
            '<strong>RODO</strong> – Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE.',
        ]},
        { title: '§2 Dane osobowe', items: [
            'Administratorem danych osobowych Użytkownika w rozumieniu RODO jest Administrator.',
            'Dane osobowe Użytkowników mogą być przetwarzane, gdy jest to niezbędne do podjęcia działań na żądanie osoby, której dane dotyczą, przed zawarciem umowy (np. w celu omówienia warunków pobytu), na podstawie prawnie uzasadnionego interesu Administratora (np. w celu odpowiedzi na zapytanie z formularza kontaktowego) lub na podstawie dobrowolnej zgody Użytkownika.',
            'Administrator przetwarza dane osobowe Użytkowników w następujących celach:<br>a) komunikacji z Użytkownikiem, w szczególności odpowiedzi na pytania zadane poprzez formularz kontaktowy, e-mail lub telefon;<br>b) realizacji obowiązków prawnych ciążących na Administratorze;<br>c) dochodzenia ewentualnych roszczeń;<br>d) w celach analitycznych lub statystycznych.',
            'Podanie danych (np. w formularzu kontaktowym) jest dobrowolne, ale niezbędne do tego, aby Administrator mógł skontaktować się z Użytkownikiem. Przetwarzanie danych w tym celu odbywa się na podstawie prawnie uzasadnionego interesu realizowanego przez Administratora (art. 6 ust. 1 lit. f RODO).',
            'Dane osobowe Użytkownika mogą być powierzane podmiotom zewnętrznym (np. dostawcy hostingu) w celu realizacji usług.',
            'Dane osobowe są gromadzone z należytą starannością i odpowiednio chronione przed dostępem do nich przez osoby do tego nieupoważnione.',
        ]},
        { title: '§3 Prawa Użytkownika', items: [
            'Użytkownikowi przysługują prawa związane z przetwarzaniem jego danych osobowych, w tym: prawo dostępu do danych, prawo do ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do wniesienia sprzeciwu, prawo do przenoszenia danych oraz prawo do wniesienia skargi do organu nadzorczego (Prezesa Urzędu Ochrony Danych Osobowych).',
            'Jeżeli przetwarzanie danych odbywa się na podstawie zgody, Użytkownik ma prawo do jej cofnięcia w dowolnym momencie.',
            'W celu realizacji swoich praw Użytkownik powinien skierować żądanie na adres e-mail: <strong>kontakt@domseniora-grzybowo.pl</strong>.',
        ]},
        { title: '§4 Pliki Cookies', items: [
            'Podczas korzystania z Serwisu, automatycznie zbierane są dane takie jak adres IP, typ przeglądarki, czy system operacyjny. Dane te mogą być zbierane przez pliki cookies („ciasteczka”).',
            'Pliki cookies to niewielkie pliki tekstowe, które zapamiętują preferencje Użytkownika, co pozwala na podnoszenie jakości świadczonych usług oraz tworzenie anonimowych statystyk.',
            'Użytkownik może w każdej chwili zrezygnować z gromadzenia plików cookies, wybierając odpowiednie ustawienia w swojej przeglądarce internetowej.',
        ]},
        { title: '§5 Postanowienia końcowe', items: [
            'W niniejszym dokumencie mogą nastąpić zmiany. Wszelkie zmiany będą komunikowane Użytkownikom niezwłocznie w sposób widoczny i zrozumiały.',
            'Wszelkie pytania lub uwagi dotyczące Polityki prywatności prosimy kierować na adres e-mail: <strong>kontakt@domseniora-grzybowo.pl</strong>.',
        ]},
      ]
    },
    de: {
      title: 'Datenschutz- und Cookie-Richtlinie',
      goBack: 'Zurück zur Hauptseite',
      intro: [
        'Diese Datenschutz- und Cookie-Richtlinie legt die Regeln für die Verarbeitung und den Schutz personenbezogener Daten sowie die Verwendung von Cookies fest.',
        'Die Richtlinie enthält insbesondere die Grundsätze für die Verarbeitung personenbezogener Daten durch den Verantwortlichen im Service, einschließlich der Grundlagen, Zwecke und des Umfangs der Datenverarbeitung sowie der Rechte der betroffenen Personen und Informationen über die Verwendung von Cookies und Analysetools auf der Webseite.'
      ],
      sections: [
        { title: '§1 Definitionen', items: [
            '<strong>Verantwortlicher</strong> – Teresa Matusewicz, die ein Unternehmen unter dem Namen RUBIN TERESA MATUSEWICZ führt, mit Sitz in ul. Bluszczowa 9, 78-132 Korzystno, NIP: 6691011439.',
            '<strong>Webseite</strong> oder <strong>Service</strong> – die unter der Adresse rezydencjarubin.pl (und/oder domseniorarubin.pl) verfügbare Webseite.',
            '<strong>Nutzer</strong> – jede Person, die den Inhalt der Webseite betrachtet.',
            '<strong>DSGVO</strong> – Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016.',
        ]},
        { title: '§2 Personenbezogene Daten', items: [
            'Der Verantwortliche für die personenbezogenen Daten des Nutzers im Sinne der DSGVO ist der Verantwortliche.',
            'Die Verarbeitung personenbezogener Daten der Nutzer kann auf Grundlage eines berechtigten Interesses des Verantwortlichen (z. B. zur Beantwortung einer Anfrage) oder auf Grundlage der freiwilligen Einwilligung des Nutzers erfolgen.',
            'Der Verantwortliche verarbeitet personenbezogene Daten zu folgenden Zwecken:\na) Kommunikation mit dem Nutzer;\nb) Erfüllung rechtlicher Verpflichtungen;\nc) Geltendmachung etwaiger Ansprüche;\nd) zu analytischen oder statistischen Zwecken.',
            'Die Angabe von Daten ist freiwillig, aber erforderlich, damit der Verantwortliche den Nutzer kontaktieren kann. Dies erfolgt auf Grundlage des berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).',
            'Personenbezogene Daten können an externe Stellen (z. B. Hosting-Anbieter) zur Erbringung von Dienstleistungen weitergegeben werden.',
            'Personenbezogene Daten werden mit der gebotenen Sorgfalt erhoben und angemessen vor dem Zugriff unbefugter Personen geschützt.',
        ]},
        { title: '§3 Rechte des Nutzers', items: [
            'Der Nutzer hat das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Widerspruch, Datenübertragbarkeit und das Recht, eine Beschwerde bei der Aufsichtsbehörde einzulegen.',
            'Basiert die Verarbeitung auf einer Einwilligung, kann diese jederzeit widerrufen werden.',
            'Zur Ausübung seiner Rechte sollte der Nutzer eine Anfrage an <strong>kontakt@domseniora-grzybowo.pl</strong> senden.',
        ]},
        { title: '§4 Cookies', items: [
            'Während der Nutzung des Services werden automatisch Daten wie IP-Adresse, Browsertyp usw. durch Cookies erfasst.',
            'Cookies sind kleine Textdateien, die Nutzerpräferenzen speichern, um die Servicequalität zu verbessern und anonyme Statistiken zu erstellen.',
            'Der Nutzer kann die Verwendung von Cookies jederzeit in seinen Browsereinstellungen deaktivieren.',
        ]},
        { title: '§5 Schlussbestimmungen', items: [
            'Dieses Dokument kann Änderungen unterliegen. Alle Änderungen werden den Nutzern unverzüglich mitgeteilt.',
            'Fragen zur Datenschutzrichtlinie richten Sie bitte an <strong>kontakt@domseniora-grzybowo.pl</strong>.',
        ]},
      ]
    }
  };

  const content = contentData[language] || contentData.pl;

  return (
    <div className="pt-32 pb-16 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <button onClick={onNavigateHome} className="inline-flex items-center text-amber-700 font-semibold mb-8 hover:underline">
          <ArrowLeft size={20} className="mr-2" />
          {content.goBack}
        </button>
        
        <div className="text-slate-800">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-8">{content.title}</h1>
            {content.intro.map((p, i) => <p key={`intro-${i}`} className="text-lg text-slate-600 mb-4">{p}</p>)}
            
            {content.sections.map((section) => (
                <div key={section.title} className="mt-12">
                    <h2 className="text-2xl lg:text-3xl font-serif font-bold text-slate-900 mb-6">{section.title}</h2>
                    {section.items.map((item, pIndex) => (
                       <p key={pIndex} className="text-base lg:text-lg text-slate-800 mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}