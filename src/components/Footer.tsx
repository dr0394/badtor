import { Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const [showImpressum, setShowImpressum] = useState(false);
  const [showDatenschutz, setShowDatenschutz] = useState(false);

  const services = [
    'Barrierefreie Badsanierung',
    'Wanne-zu-Dusche-Umbau',
    'Komplette Badsanierung',
    'Teilsanierung & Modernisierung',
    'Notfall-Badsanierung',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
            <div>
              <div className="mb-4 sm:mb-6">
                <div className="text-2xl font-bold text-gray-900">
                  TOR <span className="text-tor-teal">GmbH</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                Ihr zuverlässiger Partner für barrierefreie Badsanierung in Freiburg und Stuttgart. Selbstständigkeit, Sicherheit und Lebensqualität seit 1999.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white border border-gray-200 hover:bg-tor-teal hover:border-tor-teal rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white border border-gray-200 hover:bg-tor-teal hover:border-tor-teal rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-normal tracking-wide mb-4 sm:mb-6 text-gray-900">Leistungen</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-gray-600 hover:text-tor-teal transition-colors text-sm font-light text-left"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-normal tracking-wide mb-6 text-gray-900">Kontakt</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="tel:+491624657495"
                    className="text-gray-600 hover:text-tor-teal transition-colors font-light"
                  >
                    0162 465 7495
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:bau@tor-bad.de"
                    className="text-gray-600 hover:text-tor-teal transition-colors font-light"
                  >
                    bau@tor-bad.de
                  </a>
                </li>
                <li className="text-gray-600 font-light">
                  Freiburg:
                  <br />
                  Engesserstraße 3
                  <br />
                  79108 Freiburg
                </li>
                <li className="text-gray-600 font-light">
                  Stuttgart:
                  <br />
                  Hasenbergstr. 40
                  <br />
                  70175 Stuttgart
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-normal tracking-wide mb-6 text-gray-900">Rechtliches</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => setShowImpressum(true)}
                    className="text-gray-600 hover:text-tor-teal transition-colors text-sm font-light"
                  >
                    Impressum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowDatenschutz(true)}
                    className="text-gray-600 hover:text-tor-teal transition-colors text-sm font-light"
                  >
                    Datenschutzerklärung
                  </button>
                </li>
              </ul>
              <div className="mt-6 bg-white border border-gray-200 rounded-lg p-4">
                <div className="text-xs text-gray-500 mb-2 font-light">Seit 1999</div>
                <div className="text-sm font-normal text-gray-900">25+ Jahre</div>
                <div className="text-xs text-gray-500 font-light">Erfahrung</div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-sm text-gray-500 font-light">
              © 2024 TOR GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="text-sm text-gray-500 font-light">
              Barrierefreie Badsanierung in Freiburg & Stuttgart
            </div>
          </div>
        </div>
      </footer>

      {showImpressum && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowImpressum(false)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-normal text-gray-900">Impressum</h2>
              <button
                onClick={() => setShowImpressum(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">Angaben gemäß § 5 TMG</h3>
                <div className="text-gray-600 font-light leading-relaxed space-y-2">
                  <p>TOR GmbH</p>
                  <p>Geschäftsführer: Fedor Sverdlov (Dipl.-Bauingenieur, MBA)</p>
                  <p>Gründungsjahr: 1999</p>
                  <div className="mt-4">
                    <p className="font-normal text-gray-900 mb-2">Standort Freiburg:</p>
                    <p>Engesserstraße 3</p>
                    <p>79108 Freiburg</p>
                  </div>
                  <div className="mt-4">
                    <p className="font-normal text-gray-900 mb-2">Standort Stuttgart:</p>
                    <p>Hasenbergstr. 40</p>
                    <p>70175 Stuttgart</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">Kontakt</h3>
                <div className="text-gray-600 font-light leading-relaxed space-y-2">
                  <p>Telefon: 0162 465 7495</p>
                  <p>E-Mail: bau@tor-bad.de</p>
                </div>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">Geschäftsform</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  GmbH mit Sitz in Freiburg
                </p>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">Verantwortlich für den Inhalt</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Fedor Sverdlov (Anschrift siehe oben)
                </p>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">Haftungsausschluss</h3>
                <div className="text-gray-600 font-light leading-relaxed space-y-3">
                  <p className="font-normal text-gray-900">Haftung für Inhalte</p>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                    der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                  </p>

                  <p className="font-normal text-gray-900 pt-3">Haftung für Links</p>
                  <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                    Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {showDatenschutz && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowDatenschutz(false)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
              <h2 className="text-2xl font-normal text-gray-900">Datenschutzerklärung</h2>
              <button
                onClick={() => setShowDatenschutz(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">1. Datenschutz auf einen Blick</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-3">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                  wenn Sie unsere Website besuchen oder unser Kontaktformular nutzen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">2. Verantwortliche Stelle</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist die TOR GmbH. Die Kontaktdaten können Sie
                  dem Impressum dieser Website entnehmen. Verantwortliche Stelle ist die natürliche oder juristische Person, die allein
                  oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
                </p>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">3. Datenerfassung auf unserer Website</h3>
                <div className="text-gray-600 font-light leading-relaxed space-y-3">
                  <p className="font-normal text-gray-900">Wie erfassen wir Ihre Daten?</p>
                  <p>
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. durch Eingabe in ein Kontaktformular).
                    Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische
                    Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>

                  <p className="font-normal text-gray-900 pt-3">Wofür nutzen wir Ihre Daten?</p>
                  <p>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können
                    zur Analyse Ihres Nutzerverhaltens verwendet werden. Die durch das Kontaktformular erhobenen Daten werden zur
                    Bearbeitung Ihrer Anfrage genutzt.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">4. SSL- bzw. TLS-Verschlüsselung</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw.
                  TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
                  "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">5. Ihre Rechte</h3>
                <div className="text-gray-600 font-light leading-relaxed space-y-2">
                  <p>Sie haben jederzeit das Recht auf:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
                    <li>Berichtigung unrichtiger personenbezogener Daten</li>
                    <li>Löschung Ihrer bei uns gespeicherten Daten</li>
                    <li>Einschränkung der Datenverarbeitung</li>
                    <li>Datenübertragbarkeit</li>
                    <li>Widerspruch gegen die Verarbeitung Ihrer Daten zu Werbezwecken</li>
                    <li>Beschwerde bei einer Aufsichtsbehörde</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">6. Cookies</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert.
                  Cookies helfen uns dabei, unser Angebot nutzerfreundlicher zu gestalten. Einige Cookies bleiben auf Ihrem Endgerät
                  gespeichert, bis Sie diese löschen. Sie ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
                </p>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">7. Server-Log-Dateien</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in Server-Log-Dateien, die Ihr Browser
                  automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL,
                  Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten
                  mit anderen Datenquellen wird nicht vorgenommen.
                </p>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">8. Kontaktformular</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive
                  der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                  bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung erfolgt auf Grundlage
                  von Art. 6 Abs. 1 lit. a DSGVO, sofern Sie Ihre Einwilligung erteilt haben.
                </p>
              </div>

              <div>
                <h3 className="font-normal text-lg mb-3 text-gray-900">9. Speicherdauer</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  Wir speichern Ihre Daten nur so lange, wie dies für die Erfüllung des jeweiligen Zwecks erforderlich ist oder
                  gesetzliche Aufbewahrungspflichten bestehen. Nach Wegfall des Speicherzwecks werden die Daten gelöscht, sofern
                  keine gesetzlichen Aufbewahrungsfristen entgegenstehen.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
