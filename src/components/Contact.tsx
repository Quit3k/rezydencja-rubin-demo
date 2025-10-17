import { useForm, ValidationError } from '@formspree/react';
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, Waves, Trees, HeartPulse, ShoppingCart } from 'lucide-react';

interface ContactProps {
  language: 'pl' | 'de';
  id?: string;
  onShowPrivacyPolicy: () => void;
}

export default function Contact({ language, id, onShowPrivacyPolicy }: ContactProps) {
  const [state, handleSubmitFormspree] = useForm("xldpalzj");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const content = language === 'pl' ? {
    headline: 'Porozmawiajmy o przyszłości Twoich bliskich.',
    form: {
      name: 'Imię i nazwisko', phone: 'Telefon', message: 'Twoja wiadomość',
      privacy: { part1: 'Akceptuję ', part2: 'Politykę Prywatności' },
      submit: 'WYŚLIJ WIADOMOŚĆ',
      success: 'Dziękujemy! Wkrótce się z Tobą skontaktujemy.',
      privacyAlert: 'Musisz zaakceptować politykę prywatności.',
    },
    contact: {
      address: 'Adres', phone: 'Telefon', email: 'Email', hours: 'Godziny otwarcia biura',
      hoursValue: 'Poniedziałek - Piątek, 8:00 - 20:00', directions: 'PROWADŹ DO NAS',
    },
    location: {
      title: 'Z dala od zgiełku, blisko morza.',
      features: [
        { icon: Waves, title: '800m do plaży', description: 'Codzienne spacery i bryza' },
        { icon: Trees, title: 'Nadmorski Park', description: 'Spokój i tereny zielone' },
        { icon: HeartPulse, title: 'Opieka medyczna', description: 'Przychodnia w pobliżu' },
        { icon: ShoppingCart, title: 'Lokalne usługi', description: 'Sklepy i apteka' },
      ]
    }
  } : {
    headline: 'Sprechen wir über die Zukunft Ihrer Lieben.',
    form: {
      name: 'Vor- und Nachname', phone: 'Telefon', message: 'Ihre Nachricht',
      privacy: { part1: 'Ich akzeptiere die ', part2: 'Datenschutzrichtlinie' },
      submit: 'NACHRICHT SENDEN',
      success: 'Vielen Dank! Wir werden uns bald bei Ihnen melden.',
      privacyAlert: 'Sie müssen die Datenschutzrichtlinie akzeptieren.',
    },
    contact: {
      address: 'Adresse', phone: 'Telefon', email: 'Email', hours: 'Bürozeiten',
      hoursValue: 'Montag - Freitag, 8:00 - 20:00', directions: 'ROUTE PLANEN',
    },
    location: {
      title: 'Abseits vom Trubel, nah am Meer.',
      features: [
        { icon: Waves, title: '800m zum Strand', description: 'Tägliche Spaziergänge und Meeresbrise' },
        { icon: Trees, title: 'Küstenpark', description: 'Ruhe und grüne Umgebung' },
        { icon: HeartPulse, title: 'Ärztliche Versorgung', description: 'Klinik in der Nähe' },
        { icon: ShoppingCart, title: 'Lokale Dienstleistungen', description: 'Geschäfte und Apotheke' },
      ]
    }
  };

  const fullAddress = "Bluszczowa 9, 78-132 Grzybowo";
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`;
  const iframeSrc = `https://www.google.com/maps/embed/v1/place?key=TWOJ_KLUCZ_API_GOOGLE&q=${encodeURIComponent(fullAddress)}`;

  // POPRAWKA: Zmieniamy typ 'e' na bardziej precyzyjny
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!privacyAccepted) {
      alert(content.form.privacyAlert);
      return;
    }
    handleSubmitFormspree(e);
  };
  
  const contactDetails = [
    { icon: MapPin, title: content.contact.address, lines: ["Bluszczowa 9", "78-132 Grzybowo"] },
    { icon: Phone, title: content.contact.phone, lines: ["+48 539 701 891"], href: "tel:+48539701891" },
    { icon: Mail, title: content.contact.email, lines: ["kontakt@domseniora-grzybowo.pl"], href: "mailto:kontakt@domseniora-grzybowo.pl" },
    { icon: Clock, title: content.contact.hours, lines: [content.contact.hoursValue] },
  ];

  return (
    <section id={id} className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-center text-slate-800 mb-16">{content.headline}</h2>
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-24">
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
            <div className="space-y-8">
              {contactDetails.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <item.icon className="text-amber-700 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                    {item.lines.map((line, lineIndex) => (
                      item.href ? (<a key={lineIndex} href={item.href} className="block text-slate-600 hover:text-amber-700 transition-colors">{line}</a>) : (<p key={lineIndex} className="text-slate-600">{line}</p>)
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-grow"></div> 
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="mt-12 w-full bg-amber-800 hover:bg-amber-900 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
              <span>{content.contact.directions}</span><ArrowRight size={20} />
            </a>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col">
            {state.succeeded ? (
              <div className="m-auto text-center"><div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"><Send className="text-green-600" size={32} /></div><p className="text-green-800 font-semibold text-lg">{content.form.success}</p></div>
            ) : (
              <form onSubmit={handleFormSubmit} className="w-full flex flex-col h-full">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">{content.form.name}</label>
                    <input id="name" type="text" name="name" required className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-700 focus:outline-none transition-colors bg-stone-50"/>
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">{content.form.phone}</label>
                    <input id="phone" type="tel" name="phone" required className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-700 focus:outline-none transition-colors bg-stone-50"/>
                    <ValidationError prefix="Phone" field="phone" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">{content.form.message}</label>
                    <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 border-2 border-stone-200 rounded-lg focus:border-amber-700 focus:outline-none transition-colors resize-none bg-stone-50"/>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-600 text-sm mt-1" />
                  </div>
                </div>
                <div className="flex-grow"></div> 
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <input id="privacy" type="checkbox" checked={privacyAccepted} onChange={(e) => setPrivacyAccepted(e.target.checked)} className="h-4 w-4 text-amber-600 border-gray-300 rounded focus:ring-amber-500" />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-900">
                      {content.form.privacy.part1}
                      <button type="button" onClick={onShowPrivacyPolicy} className="underline hover:text-amber-700">{content.form.privacy.part2}</button>
                    </label>
                  </div>
                  <button type="submit" disabled={state.submitting || !privacyAccepted} className="w-full border-2 border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 disabled:bg-slate-300 disabled:border-slate-300 disabled:text-slate-500">
                    <span>{content.form.submit}</span><Send size={20} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-serif font-bold text-slate-800">{content.location.title}</h3><div className="w-24 h-1 bg-amber-700 mx-auto mt-4 mb-12"></div>
          <div className="h-[600px] rounded-2xl overflow-hidden shadow-xl mb-12"><iframe src={iframeSrc} width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Lokalizacja Rezydencji Rubin"></iframe></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {content.location.features.map((feature, index) => (
              <div key={index} className="text-center"><div className="w-16 h-16 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4"><feature.icon size={32} /></div><h4 className="font-semibold text-slate-800">{feature.title}</h4><p className="text-sm text-slate-600">{feature.description}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}