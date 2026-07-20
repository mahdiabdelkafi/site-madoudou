import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Mail, Phone, MapPin, BookOpen, GraduationCap, Star, Building2, Stethoscope, Activity, Scissors, FlaskConical, Pill, Shield, ArrowRight, Linkedin, Facebook, Youtube } from "lucide-react";
import heroImg from "@/assets/hero-surgery.jpg";
import portraitImg from "@/assets/doc.png";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. ABDELKAFI Mohamed Taha — Chirurgien digestif" },
      { name: "description", content: "Expert en chirurgie viscérale et digestive. Spécialiste en chirurgie mini-invasive." },
    ],
  }),
  component: Index,
});

const pathologies = [
  { icon: Activity, title: "Cancers du colon et du rectum", desc: "Cancer du rectum, cancer du colon, diverticulose colique, maladie de Crohn et rectocolite hémorragique." },
  { icon: Scissors, title: "Hernie Inguinale par Coelioscopie", desc: "Technique chirurgicale mini-invasive pour le traitement des hernies inguinales." },
  { icon: Stethoscope, title: "Appendicite par coelioscopoie", desc: "Intervention mini-invasive pour le traitement des appendicites." },
  { icon: Pill, title: "Chirurgie de l'œsophage et de l'estomac", desc: "Reflux gastro-œsophagien, hernie hiatale, achalasie, cancer de l'œsophage et de l'estomac." },
  { icon: FlaskConical, title: "Foie, pancréas et voies biliaires", desc: "Tumeurs du foie, kyste hydatique, cancer du pancréas, lithiase vésiculaire." },
  { icon: Shield, title: "Chirurgie proctologique", desc: "Hémorroîde, fistules péri-anales, fissures, sinus pilondial." },
];

const articles = [
  { img: article1, date: "14 Mais 2024", title: "Comprendre les tumeurs du foie : symptômes, causes et traitements", excerpt: "Le cancer du foie est l'un des types de cancer les plus mortels au monde." },
  { img: article2, date: "09 Avril 2020", title: "Tout savoir sur la chirurgie proctologique", excerpt: "La chirurgie proctologique est une spécialité qui traite les troubles de la région rectale." },
  { img: article3, date: "05 Mars 2025", title: "Chirurgie de l'obésité : procédures, risques et avantages", excerpt: "L'obésité est devenue un problème de santé publique dans de nombreux pays." },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="hidden md:flex items-center justify-between px-8 py-3 text-sm border-b border-border bg-background">
        <a href="mailto:abdelkafitaha@yahoo.fr" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition">
          <Mail className="w-4 h-4" /> abdelkafitaha@yahoo.fr
        </a>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" aria-label="LinkedIn" className="hover:text-accent transition"><Linkedin className="w-4 h-4" /></a>
          <a href="#" aria-label="Facebook" className="hover:text-accent transition"><Facebook className="w-4 h-4" /></a>
          <a href="#" aria-label="YouTube" className="hover:text-accent transition"><Youtube className="w-4 h-4" /></a>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="#accueil" className="font-bold text-lg tracking-tight">Dr. ABDELKAFI Mohamed Taha</a>
            <div className="hidden md:flex items-center gap-6 text-sm">
              <a href="#accueil" className="hover:text-accent transition">Accueil</a>
              <a href="#parcours" className="hover:text-accent transition">Parcours</a>
              <a href="#pathologies" className="hover:text-accent transition">Pathologies</a>
              <a href="#articles" className="hover:text-accent transition">Articles</a>
              <a href="#contact" className="hover:text-accent transition">Contact</a>
            </div>
          </div>
          <a href="tel:+21698687981" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
            <Phone className="w-4 h-4" /> +216 98 687 981
          </a>
        </div>
      </nav>

      <header id="accueil" className="relative overflow-hidden">
        <img src={heroImg} alt="Bloc opératoire" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative max-w-7xl mx-auto px-6 py-32 md:py-44">
          <p className="text-white lowercase tracking-widest text-sm mb-3">Docteur</p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">ABDELKAFI Mohamed Taha</h1>
          <h2 className="text-2xl md:text-3xl text-primary-foreground/90 mb-6 font-light">Chirurgien digestif et Viscérale</h2>
          <p className="text-primary-foreground/85 max-w-xl mb-8 leading-relaxed">
            Professeur à la Faculté de Médecine de Monastir.<br />
            Chef de service à l'hopital Hadj Ali Soua Ksar Hellal.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-lg font-medium shadow-lg hover:scale-105 transition">
            <Calendar className="w-5 h-5" /> Prendre un rendez-vous
          </a>
        </div>
      </header>

      <section id="parcours" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img src={portraitImg} alt="Portrait du Dr. Abdelkafi" width={800} height={1000} loading="lazy" className="rounded-2xl shadow-2xl w-full max-w-md mx-auto" />
          <div>
            <p className="text-accent uppercase tracking-widest text-sm mb-2">À propos</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Le parcours médical</h2>
            <div className="space-y-6">
              {[
                { icon: BookOpen, text: "Professeur en chirurgie viscérale et digestive à la Faculté de Médecine de Monastir" },
                { icon: GraduationCap, text: "Diplômé en chirurgie mini-invasive par Tunisian Association of Surgery (TAS)" },
                { icon: Star, text: "Expert en techniques laparoscopiques" },
                { icon: Building2, text: "Activité publique à l'Hôpital Hadj Ali Soua Ksar Hellal — service de Chirurgie " },
                { icon: Building2, text: "Activité privée à la Clinique El Rahma" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary flex items-center justify-center text-primary">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pathologies" className="py-24 px-6 bg-secondary/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent uppercase tracking-widest text-sm mb-2">Spécialités</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Pathologies prises en charge</h2>
            <p className="text-muted-foreground">Explorer les maux du système digestif : comprendre les pathologies courantes et leur impact sur votre santé.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pathologies.map((p, i) => (
              <article key={i} className="group bg-card p-8 rounded-2xl border border-border hover:border-accent transition-all hover:-translate-y-1" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{p.desc}</p>
                <a href="#" className="inline-flex items-center gap-1 text-accent font-medium text-sm hover:gap-2 transition-all">
                  Voir plus <ArrowRight className="w-4 h-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-accent uppercase tracking-widest text-sm mb-2">Actualités</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Derniers articles</h2>
            </div>
            <a href="#" className="text-accent font-medium hover:underline">Voir tous →</a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((a, i) => (
              <article key={i} className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all">
                <div className="overflow-hidden aspect-video">
                  <img src={a.img} alt={a.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground mb-2">{a.date}</p>
                  <h3 className="font-semibold text-lg mb-3 leading-snug">{a.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{a.excerpt}</p>
                  <a href="#" className="text-accent font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Lire l'article <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-accent uppercase tracking-widest text-sm mb-2">Contact</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Prendre rendez-vous</h2>
            <p className="text-primary-foreground/80 mb-10 max-w-md">Gagnez du temps en prenant rendez-vous en ligne : rapide, facile et efficace.</p>
            <div className="space-y-5">
              <a href="tel:+21698687981" className="flex items-center gap-4 hover:text-accent transition">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center"><Phone className="w-5 h-5" /></div>
                <span>+216 98 687 981</span>
              </a>
              <a href="mailto:abdelkafitaha@yahoo.fr" className="flex items-center gap-4 hover:text-accent transition">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center"><Mail className="w-5 h-5" /></div>
                <span>abdelkafitaha@yahoo.fr</span>
              </a>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5" /></div>
                <div>
                  <p>Chirurgie — Hôpital Hadj Ali Soua Ksar Hellal</p>
                  <p className="text-primary-foreground/70 text-sm mt-1"></p>
                </div>
              </div>
            </div>
          </div>
          <form className="bg-card text-card-foreground p-8 rounded-2xl space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Votre nom" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="email" placeholder="Votre adresse e-mail" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
            <input type="tel" placeholder="Numéro de téléphone" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent" />
            <textarea placeholder="Votre message" rows={5} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
            <button type="submit" className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-medium hover:opacity-90 transition">Envoyer ma demande</button>
          </form>
        </div>
      </section>

      <footer className="py-8 px-6 bg-background border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Dr. ABDELKAFI Mohamed Taha — Chirurgien digestif. Tous droits réservés.
      </footer>
    </div>
  );
}
