import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import heroImage from "@/assets/hero-bg.jpg";
import textilesImage from "@/assets/textiles.jpg";
import giftsImage from "@/assets/gifts.jpg";
import dekoImage from "@/assets/deko.jpg";
import parfumsImage from "@/assets/parfums.jpg";
import bilderTeppicheImage from "@/assets/bilder-teppiche.jpg";
import schuheImage from "@/assets/schuhe.jpg";
import storeFront from "@/assets/store-front.jpg";
import storeFrontNew from "@/assets/store-front-new.jpg";
import storeInterior1 from "@/assets/store-interior-1.jpg";
import storeInterior2 from "@/assets/store-interior-2.jpg";
import storeBags from "@/assets/store-bags.jpg";
import storeClothing from "@/assets/store-clothing.jpg";
import storeShoes from "@/assets/store-shoes.jpg";

const Index = () => {
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleHeartClick = () => {
    setIsHeartAnimating(true);
    
    // Create floating particles
    const newParticles = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 100 - 50,
    }));
    
    setParticles(newParticles);
    
    setTimeout(() => {
      setIsHeartAnimating(false);
      setParticles([]);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-xs">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">NDA</span>
            </h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide uppercase relative group">
                <span className="relative z-10">Start</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#about" className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide uppercase relative group">
                <span className="relative z-10">Über uns</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#products" className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide uppercase relative group">
                <span className="relative z-10">Produkte</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact" className="text-foreground/70 hover:text-primary transition-all duration-300 font-medium text-sm tracking-wide uppercase relative group">
                <span className="relative z-10">Kontakt</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/92 to-primary-light/88"></div>
          <div className="absolute inset-0 bg-gradient-primary-soft opacity-50"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-24 text-center animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-[1.1] tracking-tight">
              Willkommen bei{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-accent bg-clip-text text-transparent">NDA</span>
              </span>
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground/95 mb-4">
              Textilien & Geschenkartikel
            </p>
            <p className="text-xl md:text-2xl text-primary-foreground/85 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              Schöne Dinge zum Verschenken, Wohlfühlen und Dekorieren – direkt hier in Gransee.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-delay">
            <Button size="lg" className="bg-gradient-accent hover:opacity-90 shadow-accent text-white text-lg px-10 py-7 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-elegant border-0">
              Entdecke unsere Auswahl vor Ort!
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 relative overflow-hidden bg-gradient-warm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-accent-soft rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-primary-soft rounded-full blur-3xl opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Über uns</span>
            </h2>
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-accent rounded-full blur-xl opacity-30"></div>
                <button 
                  onClick={handleHeartClick}
                  className="relative bg-gradient-accent p-5 rounded-full shadow-accent cursor-pointer transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2"
                >
                  <Heart 
                    className={`w-10 h-10 text-white transition-all duration-500 ${
                      isHeartAnimating ? 'animate-heart-beat fill-white scale-125' : ''
                    }`}
                  />
                  
                  {/* Floating particles */}
                  {particles.map((particle) => (
                    <Heart
                      key={particle.id}
                      className="absolute top-1/2 left-1/2 w-4 h-4 text-accent-light fill-accent-light pointer-events-none animate-heart-float"
                      style={{
                        transform: `translate(${particle.x}px, ${particle.y}px)`,
                      }}
                    />
                  ))}
                </button>
              </div>
            </div>
            <p className="text-xl text-foreground/70 leading-relaxed mb-8">
              Bei NDA – Textilien & Geschenkartikel findest du alles, was dein Zuhause gemütlicher macht und was du lieben Menschen schenken kannst.
              Wir sind ein lokales Geschäft in Gransee und bieten eine abwechslungsreiche Auswahl aus Großhandelsartikeln – sorgfältig zusammengestellt und zu fairen Preisen.
            </p>
            <p className="text-xl text-foreground/70 leading-relaxed mb-16">
              Unser Sortiment reicht von Textilien über Dekoartikel und Geschenkideen bis hin zu Parfums, Bildern, Teppichen und Schuhen.
              Wir freuen uns über jeden Besuch – ob du ein besonderes Geschenk suchst oder einfach nur ein wenig stöbern möchtest.
            </p>

            {/* Store Front Photo */}
            <Card className="shadow-medium overflow-hidden border border-border/50 rounded-2xl bg-white">
              <CardContent className="p-0">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={storeFront}
                    alt="NDA Geschäft in Gransee"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, hsl(158 35% 28% / 0.08) 0%, transparent 50%)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Unsere Highlights</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Komm vorbei und entdecke regelmäßig neue Produkte – unser Angebot wechselt stetig!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Textiles Category */}
            <Card className="shadow-medium hover:shadow-elegant transition-all duration-500 overflow-hidden group bg-white border border-border/50 rounded-2xl">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <img
                    src={textilesImage}
                    alt="Modische Basics und Accessoires"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">🧥 Textilien</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Modische Basics & Accessoires für jeden Stil
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Gifts Category */}
            <Card className="shadow-medium hover:shadow-elegant transition-all duration-500 overflow-hidden group bg-white border border-border/50 rounded-2xl">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <img
                    src={giftsImage}
                    alt="Geschenkartikel und kleine Aufmerksamkeiten"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:bg-gradient-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">🎁 Geschenkartikel</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kleine Aufmerksamkeiten für Freunde und Familie
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Deko Category */}
            <Card className="shadow-medium hover:shadow-elegant transition-all duration-500 overflow-hidden group bg-white border border-border/50 rounded-2xl">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <img
                    src={dekoImage}
                    alt="Dekoartikel für ein schönes Zuhause"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">🕯️ Dekoartikel</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Für ein schönes Zuhause
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Parfums Category */}
            <Card className="shadow-medium hover:shadow-elegant transition-all duration-500 overflow-hidden group bg-white border border-border/50 rounded-2xl">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <img
                    src={parfumsImage}
                    alt="Parfums und tolle Düfte für jeden Geschmack"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:bg-gradient-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">🌸 Parfums</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tolle Düfte für jeden Geschmack
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Bilder & Teppiche Category */}
            <Card className="shadow-medium hover:shadow-elegant transition-all duration-500 overflow-hidden group bg-white border border-border/50 rounded-2xl">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <img
                    src={bilderTeppicheImage}
                    alt="Bilder, Teppiche und kreative Wohnakzente"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:bg-gradient-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">🖼️ Bilder & Teppiche</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Kreative Wohnakzente
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Schuhe Category */}
            <Card className="shadow-medium hover:shadow-elegant transition-all duration-500 overflow-hidden group bg-white border border-border/50 rounded-2xl">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  <img
                    src={schuheImage}
                    alt="Bequeme und modische Schuhe"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3 group-hover:bg-gradient-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">👟 Schuhe</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bequeme und modische Modelle
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-gradient-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Galerie</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ein kleiner Einblick in unser Sortiment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <Card className="shadow-soft overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img src={storeFrontNew} alt="NDA Geschäft Außenansicht" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img src={storeInterior2} alt="Textilien in vielen Farben" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img src={storeBags} alt="Taschen und Accessoires" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img src={storeClothing} alt="Kleidung im Geschäft" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-soft overflow-hidden group cursor-pointer">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <img src={storeShoes} alt="Schuhe in verschiedenen Farben" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 70%, hsl(15 60% 55% / 0.1) 0%, transparent 50%)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">Kontakt</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Finde uns direkt in der Innenstadt – Parkplätze sind in der Nähe vorhanden
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="shadow-elegant bg-gradient-card border-0">
                <CardContent className="p-8">
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

              <Card className="shadow-elegant bg-gradient-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6">Öffnungszeiten</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Montag - Freitag</span>
                      <span className="font-medium">9:30 – 18:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samstag</span>
                      <span className="font-medium">9:30 – 12:00 Uhr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sonntag</span>
                      <span className="font-medium">Geschlossen</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Google Maps */}
              <Card className="shadow-elegant overflow-hidden border-0">
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
            <Card className="shadow-elegant bg-gradient-card border-0">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-primary mb-8">Kontaktformular</h3>
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
                  <Button type="submit" className="w-full shadow-glow text-lg py-6 hover:scale-105 transition-transform duration-300">
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
                Lokales Einkaufen macht Freude – wir freuen uns auf deinen Besuch bei NDA in Gransee!
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
