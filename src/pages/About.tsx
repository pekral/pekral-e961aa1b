import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Terminal, TerminalLine } from '@/components/Terminal';
import { Briefcase, CheckCircle, Star, Github, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    role: 'PHP Programmer',
    company: 'nezávislý vývojář (self-employed)',
    period: 'Květen 2023 – současnost',
    description: 'Jako živnostník realizuju projekty pro klienty různých velikostí — od custom webů až po modulární aplikace s důrazem na bezpečnost, výkon a škálovatelnost.',
  },
  {
    role: 'Senior PHP Programmer',
    company: 'ECOMAIL.CZ',
    period: 'Leden 2018 – současnost',
    description: 'U Ecomail.cz vyvíjím a udržuji klíčové části platformy pro e-mailový marketing, která slouží tisícům klientů v ČR i zahraničí.',
  },
  {
    role: 'PHP Developer',
    company: 'Slevomat',
    period: 'Prosinec 2016 – prosinec 2017',
    description: 'Podílel jsem se na vývoji a rozšiřování webových služeb a backendových systémů pro jednu z největších českých e-commerce platforem.',
  },
  {
    role: 'Senior PHP Developer',
    company: 'Hanaboso s.r.o.',
    period: 'Duben 2016 – prosinec 2016',
    description: 'Navrhoval a implementoval backendové moduly, prováděl refaktoring a optimalizace, přičemž bezpečnost a spolehlivost aplikací byly klíčové.',
  },
  {
    role: 'Backend Leader Developer',
    company: 'el nino parfum, s.r.o.',
    period: 'Březen 2015 – březen 2016',
    description: 'Vedení vývoje a správy backendových systémů pro centralizovanou správu zákaznických dat.',
  },
  {
    role: 'Developer',
    company: 'eBRÁNA',
    period: 'Září 2012 – březen 2015',
    description: 'Vývoj informačních systémů a nástrojů pro obsluhu webových služeb koncovým uživatelům.',
  },
  {
    role: 'Developer',
    company: 'Internet Mall, a.s. (MALL.cz)',
    period: 'Prosinec 2011 – Srpen 2012',
    description: 'Programování modulů front-end shopu, refaktoring backendových skriptů a údržba klíčových komponent.',
  },
  {
    role: 'Programmer',
    company: 'MEMOS Software',
    period: 'Březen 2011 – Listopad 2011',
    description: 'Úpravy a customizace projektů založených na WordPressu a Prestashopu.',
  },
  {
    role: 'Programmer',
    company: 'Cis.cz',
    period: 'Srpen 2008 – Únor 2011',
    description: 'Vytváření internetových prezentací, implementace nových modulů do e-shopů a základní frontendové úpravy (HTML/CSS/JS).',
  },
];

const services = [
  'Webové aplikace a intranety na míru — ne univerzální šablony, ale řešení odpovídající vašim procesům.',
  'Bezpečnost od prvního dne projektu — ochrana dat a prevence zranitelností nejsou volitelné.',
  'Výkon, stabilita a škálovatelnost — aplikace vhodné pro růst a vysoké zatížení.',
  'Udržitelnost a přehlednost kódu — nasaditelné, testovatelné a dlouhodobě udržovatelné řešení.',
];

const whyMe = [
  'Řešení orientovaná na byznys, ne na „technické hračky".',
  'Pragmatický a zodpovědný přístup — vidím problém, navrhnu řešení, dodám výsledek.',
  'Osvědčený postup a kvalita — opírám se o principy, které fungují v reálných produkčních nasazeních.',
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container max-w-4xl mx-auto px-6 pt-24 pb-16">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-mono mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Zpět na úvod
        </Link>

        {/* Hero Section */}
        <section className="animate-fade-in mb-16">
          <Terminal title="petr@dev:~/about">
            <TerminalLine
              command="cat about.txt"
              output={
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                    <span className="text-primary">#</span> O mně
                  </h1>
                  <p className="text-muted-foreground leading-relaxed">
                    Jsem nezávislý webový vývojář orientovaný na konkrétní výsledky, bezpečnost a dlouhodobou udržitelnost digitálních produktů. Mým cílem není jen napsat kód — řeším reálné problémy, optimalizuju chod systémů a pomáhám firmám růst rychleji a bezpečněji.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Mám přes <span className="text-primary font-semibold">15 let zkušeností</span> s vývojem webů, intranetů a komplexních webových aplikací a během toho jsem pracoval pro různé týmy — od startupů přes rostoucí firmy až po velké projekty.
                  </p>
                </div>
              }
            />
          </Terminal>
        </section>

        {/* Experience Section */}
        <section className="animate-fade-in-delay-1 mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-8 font-mono flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-primary" />
            <span><span className="text-primary">#</span> Kde jsem pracoval</span>
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-border" />
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                  
                  <div className="project-card">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                      <div>
                        <h3 className="font-mono text-foreground font-semibold">
                          {exp.role}
                        </h3>
                        <p className="text-primary text-sm font-mono">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground font-mono whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="animate-fade-in-delay-2 mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-6 font-mono">
            <span className="text-primary">#</span> Co dělám pro vaše projekty
          </h2>
          
          <div className="grid gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <CheckCircle className="w-5 h-5 text-[hsl(var(--functional-green))] shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Me Section */}
        <section className="animate-fade-in-delay-3 mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-6 font-mono">
            <span className="text-primary">#</span> Proč se mnou spolupracovat
          </h2>
          
          <div className="grid gap-4">
            {whyMe.map((reason, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <Star className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground text-sm">{reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* References Section */}
        <section className="animate-fade-in-delay-3 mb-16">
          <h2 className="text-xl font-semibold text-foreground mb-6 font-mono">
            <span className="text-primary">#</span> Reference a technická reputace
          </h2>
          
          <div className="project-card">
            <div className="flex items-start gap-4">
              <Github className="w-8 h-8 text-primary shrink-0" />
              <div>
                <p className="text-muted-foreground text-sm mb-4">
                  Na mém GitHubu najdete nástroje a pravidla, které sám používám pro zajištění kvality kódu, testování a automatizaci — to samé, co přináším i klientským projektům.
                </p>
                <a
                  href="https://github.com/pekral"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-mono"
                >
                  github.com/pekral
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="animate-fade-in-delay-3">
          <div className="p-8 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 text-center">
            <p className="text-foreground mb-4">
              Potřebujete silnou webovou aplikaci, bezpečný intranet nebo stabilní systém pro e-commerce či interní potřeby?
            </p>
            <p className="text-lg font-semibold text-primary mb-6">
              Pojďme to udělat správně — od návrhu po dlouhodobý provoz.
            </p>
            <a
              href="mailto:petr@pekral.cz"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-mono hover:bg-primary/90 transition-colors"
            >
              Kontaktujte mě
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
