import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import textilesImage from "@/assets/textiles.jpg";
import giftsImage from "@/assets/gifts.jpg";
import customPrintingImage from "@/assets/custom-printing.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">NDA</h1>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Start
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                Über uns
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">
                Produkte
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Kontakt
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Textilien & Geschenke
            <br />
            mit Herz
          </h2>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto font-light">
            Qualität und Kreativität – handverlesen für Sie, Ihr Unternehmen und Ihren Verein
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
            <Button size="lg" variant="secondary" className="shadow-elegant">
              Jetzt entdecken
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Über NDA</h2>
            <div className="flex justify-center mb-8">
              <Heart className="w-12 h-12 text-accent" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Willkommen bei NDA – Ihrem lokalen Fachgeschäft für hochwertige Textilien und liebevoll gestaltete
              Geschenkartikel. Mit Leidenschaft für Stoffe, Farben und Kreativität bieten wir Ihnen eine sorgfältig
              ausgewählte Produktpalette.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Ob für den privaten Anlass, Ihr Unternehmen oder Ihren Verein – bei uns finden Sie Lösungen, die
              begeistern. Qualität und persönliche Beratung stehen bei uns an erster Stelle.
            </p>

            {/* Placeholder for team/shop photo */}
            <Card className="shadow-soft overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Hier kommt ein Foto von unserem Team oder Geschäft</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Unsere Produkte</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entdecken Sie unsere Kategorien mit hochwertigen Textilien und Geschenkartikeln
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Textiles Category */}
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={textilesImage}
                    alt="Hochwertige T-Shirts und Hoodies"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">Textilien</h3>
                  <p className="text-muted-foreground mb-4">
                    T-Shirts, Hoodies, Poloshirts und mehr in verschiedenen Farben und Größen. Perfekt für jeden Anlass.
                  </p>
                  <Button variant="outline" className="w-full">
                    Mehr erfahren
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Gifts Category */}
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 overflow-hidden group">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={giftsImage}
                    alt="Geschenkartikel"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">Geschenkartikel</h3>
                  <p className="text-muted-foreground mb-4">
                    Tassen, Tragetaschen, gravierte Holzartikel und vieles mehr. Das perfekte Geschenk für jeden Anlass.
                  </p>
                  <Button variant="outline" className="w-full">
                    Mehr erfahren
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Galerie</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ein Einblick in unsere Produkte und unser Geschäft
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} className="shadow-soft overflow-hidden group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-square bg-muted flex items-center justify-center group-hover:bg-muted/80 transition-colors">
                    <p className="text-sm text-muted-foreground">Foto {item}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Besuchen Sie uns</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Wir freuen uns auf Ihren Besuch oder Ihre Nachricht
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-6">Kontaktinformationen</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <p className="font-semibold">Adresse</p>
                        <p className="text-muted-foreground text-sm">
                          Rudolf-Breitscheid-Str. 65
                          <br />
                          16775 Gransee
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <p className="font-semibold">Telefon</p>
                        <p className="text-muted-foreground text-sm">[Ihre Telefonnummer]</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-accent mt-1" />
                      <div>
                        <p className="font-semibold">E-Mail</p>
                        <p className="text-muted-foreground text-sm">info@nda-gransee.de</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">Öffnungszeiten</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Montag - Freitag</span>
                      <span className="font-medium">[00:00 - 00:00 Uhr]</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samstag</span>
                      <span className="font-medium">[00:00 - 00:00 Uhr]</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sonntag</span>
                      <span className="font-medium">Geschlossen</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card className="shadow-soft overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d300.09419646248574!2d13.1570846!3d53.0068152!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a90d53305568c1%3A0x468ff83af563f7ab!2sNda-kaufhaus!5e0!3m2!1sen!2sde!4v1760735113586!5m2!1sen!2sde" 
                      className="w-full h-full"
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="NDA Standort auf Google Maps"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-6">Kontaktformular</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Ihr Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      E-Mail
                    </label>
                    <Input id="email" type="email" placeholder="ihre.email@beispiel.de" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Nachricht
                    </label>
                    <Textarea id="message" placeholder="Ihre Nachricht an uns..." rows={6} />
                  </div>
                  <Button type="submit" className="w-full shadow-elegant">
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">NDA – Textilien & Geschenkartikel</h3>
              <p className="text-primary-foreground/80 text-sm">
                Ihr lokales Fachgeschäft für hochwertige Textilien und Geschenkartikel.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <div className="space-y-2 text-sm">
                <Link
                  to="/impressum"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Impressum
                </Link>
                <Link
                  to="/datenschutz"
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>© {new Date().getFullYear()} NDA – Textilien & Geschenkartikel. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
