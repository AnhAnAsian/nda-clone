import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const Impressum = () => {
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
          <h1 className="text-4xl font-bold text-primary mb-8">Impressum</h1>
          
          <div className="space-y-6 text-foreground/80">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="leading-relaxed">
                NDA – Textilien & Geschenkartikel<br />
                Inhaberin: Tuyet Doan<br />
                Rudolf-Breitscheid-Str. 65<br />
                16775 Gransee
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
              </h2>
              <p className="leading-relaxed">
                Tuyet Doan<br />
                Rudolf-Breitscheid-Str. 65<br />
                16775 Gransee
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">
                Haftungsausschluss:
              </h2>
              <p className="leading-relaxed">
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
