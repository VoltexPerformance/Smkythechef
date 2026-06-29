import React, { useEffect, useState } from "react";
import {
  Instagram,
  MapPin,
  Clock,
  CalendarDays,
  Phone,
  ChefHat,
  Flame,
  Leaf,
  ShieldCheck,
  Heart,
  ArrowRight,
  Truck,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";
import { LANDING } from "@/constants/testIds";

const INSTAGRAM_URL = "https://instagram.com/smkythechef";
const WHATSAPP_URL = INSTAGRAM_URL;
const FLYER_IMG = `${import.meta.env.BASE_URL}assets/flyer.jpg`;
const CHEF_BG_IMG = `${import.meta.env.BASE_URL}assets/chef-bg.jpg`;

const snacks = [
  {
    id: "sambusa-chicken",
    name: "Somalische Sambusa",
    variant: "„Hähnchen“",
    desc: "Knusprige Teigtaschen, gefüllt mit würzigem Hähnchen.",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "sambusa-beef",
    name: "Somalische Sambusa",
    variant: "„Rind“",
    desc: "Hausgemacht mit Rindfleisch & somalischen Gewürzen.",
    img: "https://images.unsplash.com/photo-1625938145744-533e82c8baeb?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "sambusa-veggie",
    name: "Somalische Sambusa",
    variant: "„Vegetarisch“",
    desc: "Vegetarisch, frisch & voller Geschmack.",
    img: "https://images.unsplash.com/photo-1668236543099-da27e3e6a13e?w=900&q=80&auto=format&fit=crop",
  },
];

const salads = [
  {
    id: "mix-mango",
    name: "Gemischter Salat",
    variant: "„Mango“",
    desc: "Mit hausgemachtem süßen Zitrus-Dressing.",
    price: "7,–",
    img: "https://images.unsplash.com/photo-1604908176997-431b741a08c8?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "beetroot-eggs",
    name: "Rote-Bete-Salat",
    variant: "„Eier“",
    desc: "Mit hausgemachtem Honig-Senf-Dressing.",
    price: "7,–",
    img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=900&q=80&auto=format&fit=crop",
  },
];

const mains = [
  {
    id: "bacon-deluxe",
    name: "Bacon",
    variant: "„DELUXE“ Burger",
    desc: "Mit 3 Stück Bacon-Shrimps, Kartoffel-Wedges & 2 Saucen.",
    price: "25,–",
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&q=80&auto=format&fit=crop",
    tag: "Spezialität",
  },
  {
    id: "suri-noodles",
    name: "Surinamische",
    variant: "„Hähnchen-Nudeln“",
    desc: "Mit Hähnchen ohne Knochen & saurem Gurken-Zwiebel-Salat.",
    price: "25,–",
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=900&q=80&auto=format&fit=crop",
    tag: "Bestseller",
  },
  {
    id: "bariis-hilib",
    name: "Bariis Iyo Hilib",
    variant: "„Traditionell“",
    desc: "Traditioneller somalischer Reis mit Rindfleisch, Salat, scharfer Sauce & Banane.",
    price: "25,–",
    img: "https://images.unsplash.com/photo-1604908554049-2ed7e1c8a548?w=900&q=80&auto=format&fit=crop",
    tag: "Original",
  },
  {
    id: "pasta-pollo",
    name: "Cremige",
    variant: "„Pasta Pollo“",
    desc: "Cremige Pasta mit Spinat & Parmesan.",
    price: "25,–",
    img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900&q=80&auto=format&fit=crop",
    tag: "Klassiker",
  },
];

const Section = ({ id, children, className = "", ...props }) => (
  <section id={id} className={`relative w-full ${className}`} {...props}>
    {children}
  </section>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`smky-nav ${scrolled ? "smky-nav--solid" : ""}`}>
      <div className="smky-container smky-nav__inner">
        <a href="#top" data-testid={LANDING.navLogo} className="smky-logo">
          <ChefHat className="smky-logo__icon" />
          <span>SmkyTheChef</span>
        </a>

        <div className="smky-nav__links">
          <a href="#menu" data-testid={LANDING.navMenuLink}>Speisekarte</a>
          <a href="#about" data-testid={LANDING.navAboutLink}>Über uns</a>
          <a href="#info" data-testid={LANDING.navContactLink}>Kontakt</a>
        </div>

        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          data-testid={LANDING.navOrderBtn}
          className="smky-btn smky-btn--hot smky-nav__btn"
        >
          <Instagram size={17} />
          <span>Jetzt bestellen</span>
        </a>
      </div>
    </nav>
  );
};

const Hero = () => (
  <Section id="top" className="smky-hero smky-texture">
    <div className="smky-hero__bg" aria-hidden="true">
      <img src={CHEF_BG_IMG} alt="" />
    </div>
    <div className="smky-hero__shade" aria-hidden="true" />

    <div className="smky-container smky-hero__grid">
      <div className="smky-hero__copy">
        <h1 className="smky-title smky-title--hero fade-up">
          <span>Mit</span>
          <span>Leidenschaft</span>
          <span><em>gekocht.</em> Mit</span>
          <span>Liebe</span>
          <span>serviert.</span>
        </h1>

        <p className="smky-hero__lead fade-up delay-1">
          Somalische, surinamische & internationale Spezialitäten für die Seele – frisch zubereitet in den Kantonen Solothurn, Biel & Bern. Jeden Freitag. Halal. Hausgemacht.
        </p>

        <div className="smky-hero__actions fade-up delay-2">
          <a href="#menu" data-testid={LANDING.heroMenuBtn} className="smky-btn smky-btn--gold">
            Speisekarte ansehen <ArrowRight size={17} />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" data-testid={LANDING.heroOrderBtn} className="smky-btn smky-btn--outline">
            <Instagram size={17} /> Bestellen via DM
          </a>
        </div>

        <div className="smky-hero__stats fade-up delay-3">
          <div><strong>100%</strong><span>Halal</span></div>
          <div><strong>3</strong><span>Kantone</span></div>
          <div><strong>FR</strong><span>Jede Woche</span></div>
        </div>
      </div>

      <div className="smky-hero__flyer fade-up delay-2">
        <img src={FLYER_IMG} alt="SmkyTheChef Flyer" />
        <div className="smky-float smky-float--one">Seelenküche</div>
        <div className="smky-float smky-float--two"><Star size={15} /> Lokal geliebt</div>
        <div className="smky-float smky-float--three"><Sparkles size={15} /> Frisch · Qualität 100%</div>
      </div>
    </div>
  </Section>
);

const Marquee = () => {
  const items = ["Jeden Freitag", "Abholung & Lieferung", "Solothurn · Biel · Bern", "Hausgemacht", "Essen für die Seele", "100% Halal"];
  return (
    <div className="smky-marquee" aria-hidden="true">
      <div className="smky-marquee__track">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`}><Flame size={18} /> {item}</span>
        ))}
      </div>
    </div>
  );
};

const MenuHeader = () => (
  <div className="smky-section-heading">
    <span className="smky-chip"><ChefHat size={15} /> Speisekarte</span>
    <h2 className="smky-title smky-title--section">Was wir auf den <em>Teller</em> bringen</h2>
    <p>Eine Reise durch die Aromen Somalias, Surinames und der ganzen Welt – handgemacht in der Schweiz.</p>
  </div>
);

const SnackCard = ({ item }) => (
  <article data-testid={LANDING.menuItem} className="smky-snack-card">
    <img src={item.img} alt={`${item.name} ${item.variant}`} loading="lazy" />
    <div>
      <h3>{item.name}</h3>
      <strong>{item.variant}</strong>
      <p>{item.desc}</p>
    </div>
  </article>
);

const SaladRow = ({ item }) => (
  <article data-testid={LANDING.menuItem} className="smky-row-card">
    <img src={item.img} alt={`${item.name} ${item.variant}`} loading="lazy" />
    <div className="smky-row-card__body">
      <h3>{item.name}</h3>
      <strong>{item.variant}</strong>
      <p>{item.desc}</p>
    </div>
    <div className="smky-price"><b>{item.price}</b><span>CHF</span></div>
  </article>
);

const MainRow = ({ item }) => (
  <article data-testid={LANDING.menuItem} className="smky-main-card">
    <img src={item.img} alt={`${item.name} ${item.variant}`} loading="lazy" />
    <div className="smky-main-card__body">
      <div className="smky-main-card__title">
        <h3>{item.name}</h3>
        {item.tag && <span>{item.tag}</span>}
      </div>
      <strong>{item.variant}</strong>
      <p>{item.desc}</p>
    </div>
    <div className="smky-price"><b>{item.price}</b><span>CHF</span></div>
  </article>
);

const Menu = () => (
  <Section id="menu" className="smky-menu smky-texture">
    <div className="smky-container">
      <MenuHeader />

      <div className="smky-menu-block" data-testid={LANDING.menuSnacks}>
        <div className="smky-label-row">
          <span className="smky-brush">Snacks</span>
          <p>Inkl. somalische Hot Sauce</p>
          <div className="smky-snack-price"><strong>10,–</strong><span>3 Stück / CHF</span></div>
        </div>
        <div className="smky-snack-grid">
          {snacks.map((item) => <SnackCard key={item.id} item={item} />)}
        </div>
      </div>

      <div className="smky-menu-block" data-testid={LANDING.menuSalads}>
        <div className="smky-label-row">
          <span className="smky-brush smky-brush--green">Salate</span>
          <p>Hausgemachte Dressings</p>
        </div>
        <div className="smky-row-grid">
          {salads.map((item) => <SaladRow key={item.id} item={item} />)}
        </div>
      </div>

      <div className="smky-menu-block" data-testid={LANDING.menuMains}>
        <div className="smky-label-row">
          <span className="smky-brush">Hauptgerichte</span>
          <p>Sättigend & seelenwarm</p>
        </div>
        <div className="smky-main-grid">
          {mains.map((item) => <MainRow key={item.id} item={item} />)}
        </div>
      </div>

      <p className="smky-menu__closing">Alles mit Leidenschaft gemacht — um deine Seele zu sättigen.</p>
    </div>
  </Section>
);

const About = () => (
  <Section id="about" data-testid={LANDING.aboutSection} className="smky-about smky-texture">
    <div className="smky-container smky-about__grid">
      <div>
        <span className="smky-chip"><Heart size={15} /> Unsere Geschichte</span>
        <h2 className="smky-title smky-title--section smky-about__title">Mehr als nur <em>Essen.</em> Ein Gefühl.</h2>
        <p className="smky-about__text">
          SmkyTheChef ist die persönliche Küche von Smky – ein Ort, an dem somalische Tradition, surinamische Würze und moderne Comfort-Klassiker aufeinandertreffen. Jedes Gericht wird mit Aufmerksamkeit, frischen Zutaten und 100 % Halal-Fleisch zubereitet – als wäre es für die Familie.
        </p>

        <div className="smky-feature-grid">
          <div><ShieldCheck size={22} /><strong>100% Halal</strong><span>Strenge Auswahl</span></div>
          <div><Leaf size={22} /><strong>Frische Zutaten</strong><span>Wöchentlich neu</span></div>
          <div><Truck size={22} /><strong>Pickup & Lieferung</strong><span>Solothurn · Biel · Bern</span></div>
          <div><Heart size={22} /><strong>Lokal & familiär</strong><span>Mit Liebe gekocht</span></div>
        </div>
      </div>

      <div className="smky-about__image">
        <img src={FLYER_IMG} alt="SmkyTheChef Flyer" loading="lazy" />
        <div className="smky-note">Danke,<br />dass ihr lokal<br />unterstützt!<br /><Heart size={18} /></div>
      </div>
    </div>
  </Section>
);

const Info = () => (
  <Section id="info" data-testid={LANDING.infoSection} className="smky-info smky-texture">
    <div className="smky-container">
      <div className="smky-section-heading">
        <span className="smky-chip"><ShieldCheck size={15} /> So bestellst du</span>
        <h2 className="smky-title smky-title--section">Hol dir deinen <em>Teller</em></h2>
      </div>

      <div className="smky-info-grid">
        <div><MapPin size={28} /><strong>Pickup & Lieferung</strong><span>Kanton Solothurn, Biel & Bern</span></div>
        <div><CalendarDays size={28} /><strong>Öffnungszeiten</strong><span>Jeden Freitag bis 19:00 Uhr</span></div>
        <div><Clock size={28} /><strong>Limitierte Plätze</strong><span>Solange Vorrat reicht – früh bestellen!</span></div>
        <div><ShieldCheck size={28} /><strong>Halal</strong><span>100 % Halal-zertifiziertes Fleisch</span></div>
      </div>

      <div className="smky-order-card">
        <div>
          <span>Bereit zu bestellen?</span>
          <h3>Schick uns eine DM auf Instagram — wir kümmern uns um den Rest.</h3>
          <p>Schreib uns dein Wunschgericht, Anzahl Portionen und ob du abholen oder liefern lassen möchtest. Wir melden uns mit den Details.</p>
          <div className="smky-order-card__actions">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" data-testid={LANDING.ctaInstagram} className="smky-btn smky-btn--gold"><Instagram size={17} /> @smkythechef</a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" data-testid={LANDING.ctaWhatsapp} className="smky-btn smky-btn--outline"><Phone size={17} /> Direkt anfragen</a>
          </div>
        </div>
        <div className="smky-order-card__flyer">
          <img src={FLYER_IMG} alt="SmkyTheChef Flyer" loading="lazy" />
          <div>Jeden Freitag geöffnet<br /><small>bis 19:00 Uhr</small></div>
        </div>
      </div>
    </div>
  </Section>
);

const Footer = () => (
  <footer data-testid={LANDING.footer} className="smky-footer">
    <div className="smky-container smky-footer__inner">
      <a href="#top" className="smky-logo"><ChefHat className="smky-logo__icon" /><span>SmkyTheChef</span></a>
      <span className="smky-footer__tag">Essen für die Seele</span>
      <p>© {new Date().getFullYear()} SmkyTheChef. Alle Rechte vorbehalten.</p>
      <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" data-testid={LANDING.heroInstagram}><Instagram size={17} /> @smkythechef</a>
    </div>
  </footer>
);

const LandingPage = () => {
  return (
    <main className="smky-page">
      <div className="smky-fixed-bg" aria-hidden="true">
        <img className="smky-fixed-bg__image" src={CHEF_BG_IMG} alt="" decoding="async" fetchPriority="high" />
        <div className="smky-fixed-bg__shade" />
      </div>
      <Navbar />
      <Hero />
      <Marquee />
      <Menu />
      <About />
      <Info />
      <Footer />
    </main>
  );
};

export default LandingPage;
