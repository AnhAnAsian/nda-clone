import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Zurück zur Startseite
          </Button>
        </Link>

        <div className="bg-card rounded-lg shadow-elegant p-8 md:p-12">
          <h1 className="text-4xl font-bold text-primary mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-8 text-foreground/80">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                1. Verantwortlicher
              </h2>
              <p className="leading-relaxed mb-3">
                NDA – Textilien & Geschenkartikel<br />
                Inhaberin: Tuyet Doan<br />
                Rudolf-Breitscheid-Str. 2<br />
                16775 Gransee
              </p>
              <p className="leading-relaxed">
                E-Mail: info@nda-textilien.de
              </p>
              <p className="leading-relaxed mt-3">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist die oben genannte Person.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck ihrer Verwendung
              </h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">
                a) Beim Besuch der Website
              </h3>
              <p className="leading-relaxed mb-3">
                Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet. Diese Informationen werden temporär in sogenannten Logfiles gespeichert.
              </p>
              <p className="leading-relaxed mb-2">Erfasst werden können insbesondere:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 ml-4">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
              </ul>
              <p className="leading-relaxed mb-2">Die genannten Daten werden durch uns zu folgenden Zwecken verarbeitet:</p>
              <ul className="list-disc list-inside space-y-1 mb-3 ml-4">
                <li>Gewährleistung eines reibungslosen Verbindungsaufbaus der Website</li>
                <li>Gewährleistung einer komfortablen Nutzung unserer Website</li>
                <li>Auswertung der Systemsicherheit und -stabilität</li>
              </ul>
              <p className="leading-relaxed">
                Rechtsgrundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse folgt aus den oben genannten Zwecken.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-2 mt-4">
                b) Bei Nutzung des Kontaktformulars
              </h3>
              <p className="leading-relaxed mb-3">
                Wenn Sie uns per Kontaktformular oder E-Mail kontaktieren, werden Ihre Angaben (Name, E-Mail-Adresse, ggf. Telefonnummer, Nachricht) gespeichert, um Ihre Anfrage zu bearbeiten.
              </p>
              <p className="leading-relaxed mb-3">
                Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen bzw. Vertragserfüllung) oder, sofern keine Vertragsbeziehung besteht, auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage).
              </p>
              <p className="leading-relaxed">
                Ihre Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet wurde und keine gesetzliche Aufbewahrungspflicht besteht.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                3. Weitergabe von Daten
              </h2>
              <p className="leading-relaxed mb-2">Eine Übermittlung Ihrer persönlichen Daten an Dritte findet nicht statt, es sei denn,</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Sie haben Ihre ausdrückliche Einwilligung erteilt (Art. 6 Abs. 1 lit. a DSGVO),</li>
                <li>die Weitergabe ist zur Vertragserfüllung erforderlich (Art. 6 Abs. 1 lit. b DSGVO), oder</li>
                <li>es besteht eine gesetzliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                4. Hosting
              </h2>
              <p className="leading-relaxed mb-3">
                Unsere Website wird über die Plattform Lovable.dev bereitgestellt.
                Lovable.dev ist ein Dienst des Unternehmens Lovable, Inc., mit Sitz in den USA/EU.
                Die Serververarbeitung erfolgt auf Basis eines Auftragsverarbeitungsvertrages (Art. 28 DSGVO).
              </p>
              <p className="leading-relaxed">
                Lovable.dev verarbeitet technische Nutzungsdaten (z. B. IP-Adresse, Logfiles) ausschließlich, um die Bereitstellung und Sicherheit der Website zu gewährleisten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                5. Einbindung von Google Maps
              </h2>
              <p className="leading-relaxed mb-3">
                Diese Website nutzt den Kartendienst Google Maps über eine API.
                Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
              </p>
              <p className="leading-relaxed mb-3">
                Zur Nutzung der Funktionen von Google Maps ist es erforderlich, Ihre IP-Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
                Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.
              </p>
              <p className="leading-relaxed mb-3">
                Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unseres Online-Angebots und an einer leichten Auffindbarkeit unseres Standortes. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
              </p>
              <p className="leading-relaxed">
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google:{" "}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://policies.google.com/privacy
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                6. Ihre Rechte
              </h2>
              <p className="leading-relaxed mb-2">Sie haben das Recht:</p>
              <ul className="list-disc list-inside space-y-1 ml-4 mb-3">
                <li>auf Auskunft über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO),</li>
                <li>auf Berichtigung (Art. 16 DSGVO),</li>
                <li>auf Löschung (Art. 17 DSGVO),</li>
                <li>auf Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
                <li>auf Datenübertragbarkeit (Art. 20 DSGVO),</li>
                <li>auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO).</li>
              </ul>
              <p className="leading-relaxed">
                Wenn Sie eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                7. Beschwerderecht
              </h2>
              <p className="leading-relaxed">
                Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren, z. B. bei der
                Landesbeauftragten für den Datenschutz und die Informationsfreiheit Ihres Bundeslandes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                8. Datensicherheit
              </h2>
              <p className="leading-relaxed">
                Wir verwenden innerhalb des Website-Besuchs das SSL-Verfahren (Secure Socket Layer) in Verbindung mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird.
                Zudem setzen wir geeignete technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust oder unbefugten Zugriff zu schützen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                9. Aktualität und Änderung dieser Datenschutzerklärung
              </h2>
              <p className="leading-relaxed">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand: Oktober 2025.
                Durch Weiterentwicklung unserer Website oder geänderte gesetzliche Vorgaben kann eine Anpassung dieser Erklärung erforderlich werden.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
