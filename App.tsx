/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Ticket, Globe, Zap, Music, MapPin, Menu, X, Calendar, Play, ChevronLeft, ChevronRight, ExternalLink, BookOpen, Target, Clock, Award, CheckCircle2 } from 'lucide-react';
import FluidBackground from './components/FluidBackground';
import GradientText from './components/GlitchText';
import CustomCursor from './components/CustomCursor';
import { Game, Video } from './types';

// Data
const GAMES: Game[] = [
  { 
    id: '1', 
    name: "Dragys's Island", 
    developer: 'inklink83', 
    image: 'https://lh3.googleusercontent.com/d/1hWg_28EpOIUneuEC7-MXv43zkDRUGCQl',
    url: 'https://inklink83.itch.io/dragys-island',
    description: "Explorez une île mystérieuse remplie de défis et de secrets dans ce jeu d'aventure captivant. Un projet réalisé avec passion par inklink83."
  },
  { 
    id: '2', 
    name: 'Level Desert', 
    developer: 'db83', 
    image: 'https://lh3.googleusercontent.com/d/1CDYxGsQX9SFHne--n9izXkDjf5VbJjhY',
    url: 'https://db83.itch.io/level-desert',
    description: "Survivez dans un désert impitoyable où chaque dune cache un nouveau danger. Testez vos limites dans ce jeu de survie intense par db83."
  },
  { 
    id: '3', 
    name: 'Clinic Chaos', 
    developer: 'esperodail', 
    image: 'https://lh3.googleusercontent.com/d/1o0Ozl9oKIday8OgTK0wOW9LBXfWANNW-',
    url: 'https://esperodail.itch.io/clinic-chaos',
    description: "Gérez le chaos d'une clinique pas comme les autres dans ce jeu de simulation déjanté. Un défi de gestion unique créé par esperodail."
  },
];

const VIDEOS: Video[] = [
  { id: '1', title: 'Gameplay Showcase', url: 'https://www.youtube.com/embed/O8dlW8E0kBs', thumbnail: 'https://img.youtube.com/vi/O8dlW8E0kBs/maxresdefault.jpg' },
  { id: '2', title: 'Level Design Preview', url: 'https://www.youtube.com/embed/b_UE47U9Il8', thumbnail: 'https://img.youtube.com/vi/b_UE47U9Il8/maxresdefault.jpg' },
  { id: '3', title: 'Mechanics Breakdown', url: 'https://www.youtube.com/embed/biRS_GETd2I', thumbnail: 'https://img.youtube.com/vi/biRS_GETd2I/maxresdefault.jpg' },
  { id: '4', title: 'Atmosphere & Sound', url: 'https://www.youtube.com/embed/d1MK0YTS6L8', thumbnail: 'https://img.youtube.com/vi/d1MK0YTS6L8/maxresdefault.jpg' },
  { id: '5', title: 'Character Reveal', url: 'https://www.youtube.com/embed/6c5wjtEk5N4', thumbnail: 'https://img.youtube.com/vi/6c5wjtEk5N4/maxresdefault.jpg' },
  { id: '6', title: 'Final Trailer', url: 'https://www.youtube.com/embed/oozvQz6O8Ek', thumbnail: 'https://img.youtube.com/vi/oozvQz6O8Ek/maxresdefault.jpg' },
];

const FORMATION_MODULES = [
  {
    id: 1,
    title: "Illustrations, Graphismes et Visuels",
    objectifs: ["Principes fondamentaux du design graphique", "Maîtrise des outils (Photoshop, Illustrator)", "Création visuelle web et mobile"],
    details: "Théorie des couleurs, typographie, composition. Retouche photo, dessin vectoriel, création de logos et d'icônes."
  },
  {
    id: 2,
    title: "Conception d'Interfaces et Prototypes",
    objectifs: ["UI Design ergonomique", "Outils de prototypage (Figma, Sketch)", "Tests d'utilisabilité"],
    details: "Hiérarchie visuelle, guidage utilisateur, wireframes interactifs, maquettes responsives."
  },
  {
    id: 3,
    title: "Animation et Supports de Diffusion",
    objectifs: ["Techniques d'animation web/mobile", "Motion Design", "Adobe After Effects & Animate"],
    details: "Principes d'animation, storyboarding, micro-interactions, vidéos explicatives."
  },
  {
    id: 4,
    title: "Supports de Communication",
    objectifs: ["Branding et stratégie visuelle", "Adobe InDesign", "Supports imprimés et digitaux"],
    details: "Conception de brochures, flyers, visuels réseaux sociaux, alignement avec l'identité de marque."
  },
  {
    id: 5,
    title: "Webmarketing et Veille",
    objectifs: ["SEO, SEM, Emailing", "Google Analytics & Ads", "Veille technologique"],
    details: "Stratégies d'acquisition, analyse de performance, veille concurrentielle."
  },
  {
    id: 6,
    title: "Intégration et Optimisation",
    objectifs: ["HTML, CSS, JavaScript", "Standards W3C", "Responsive Design"],
    details: "Frameworks (Bootstrap), optimisation SEO on-page, performance web."
  },
  {
    id: 7,
    title: "Gestion de Contenus et Sécurité",
    objectifs: ["CMS (WordPress, Joomla)", "Personnalisation", "Sécurité Web"],
    details: "Installation, gestion de médias, protection contre les attaques, sauvegardes."
  }
];

const VideoCard: React.FC<{ video: Video; onSelect: (v: Video) => void }> = ({ video, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative aspect-video rounded-xl overflow-hidden border border-white/5 group cursor-pointer bg-[#0a0a0f]"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(video)}
      data-hover="true"
    >
      {/* Cinematic Scanlines Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      
      <AnimatePresence mode="wait">
        {!isHovered ? (
          <motion.div
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-110" 
            />
            
            {/* Top Badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-white/70">Showcase</span>
            </div>

            {/* Bottom Info */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black via-black/40 to-transparent">
              <div className="flex items-end justify-between">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#a8fbd3] tracking-widest uppercase opacity-70">Video ID: {video.id.padStart(2, '0')}</span>
                  <h3 className="text-lg font-heading font-bold uppercase tracking-tight leading-none">{video.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#a8fbd3] group-hover:border-[#a8fbd3] transition-all duration-300">
                  <Play className="w-4 h-4 fill-current text-white group-hover:text-black ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 pointer-events-none"
          >
            <iframe
              src={`${video.url}?autoplay=1&mute=1&controls=0&loop=1&playlist=${video.url.split('/').pop()}`}
              className="w-full h-full scale-110"
              allow="autoplay"
              frameBorder="0"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute bottom-4 right-4">
               <div className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono text-white tracking-widest uppercase">
                 Preview Mode
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  
  // Handle keyboard navigation for game modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedGame) return;
      if (e.key === 'ArrowLeft') navigateGame('prev');
      if (e.key === 'ArrowRight') navigateGame('next');
      if (e.key === 'Escape') setSelectedGame(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedGame]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigateGame = (direction: 'next' | 'prev') => {
    if (!selectedGame) return;
    const currentIndex = GAMES.findIndex(a => a.id === selectedGame.id);
    let nextIndex;
    if (direction === 'next') {
      nextIndex = (currentIndex + 1) % GAMES.length;
    } else {
      nextIndex = (currentIndex - 1 + GAMES.length) % GAMES.length;
    }
    setSelectedGame(GAMES[nextIndex]);
  };
  
  return (
    <div className="relative min-h-screen text-white selection:bg-[#4fb7b3] selection:text-black cursor-auto md:cursor-none overflow-x-hidden">
      <CustomCursor />
      <FluidBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-8 py-6">
        <div className="flex items-center z-50">
          <img 
            src="https://lh3.googleusercontent.com/d/1AjdM_2CVU0laEZ0pENx_ar0SQpMqMm49" 
            alt="MODE83 Logo" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-sm font-bold tracking-widest uppercase">
          {['Jeux', 'Vidéos', 'Formation'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
              className="hover:text-[#a8fbd3] transition-colors text-white cursor-pointer bg-transparent border-none"
              data-hover="true"
            >
              {item}
            </button>
          ))}
        </div>
        <button 
          onClick={() => window.open('https://mode83.net/site/', '_blank')}
          className="hidden md:inline-block border border-white px-8 py-3 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 text-white cursor-pointer bg-transparent"
          data-hover="true"
        >
          Site Officiel
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white z-50 relative w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
           {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-[#31326f]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Jeux', 'Vidéos', 'Formation'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""))}
                className="text-4xl font-heading font-bold text-white hover:text-[#a8fbd3] transition-colors uppercase bg-transparent border-none"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://mode83.net/site/', '_blank')}
              className="mt-8 border border-white px-10 py-4 text-sm font-bold tracking-widest uppercase bg-white text-black"
            >
              Site Officiel
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <header className="relative h-[100svh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden px-4">
        <motion.div 
          style={{ y, opacity }}
          className="z-10 text-center flex flex-col items-center w-full max-w-6xl pb-24 md:pb-20"
        >
           {/* Training Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center gap-3 md:gap-6 text-xs md:text-base font-mono text-[#a8fbd3] tracking-[0.2em] md:tracking-[0.3em] uppercase mb-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <span>LEVEL ONE</span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#4fb7b3] rounded-full animate-pulse"/>
            <span>Game Design & Dev</span>
          </motion.div>

          {/* Main Title */}
          <div className="relative w-full flex justify-center items-center">
            <GradientText 
              text="LEVEL ONE" 
              as="h1" 
              className="text-[12vw] md:text-[10vw] leading-[0.9] font-black tracking-tighter text-center" 
            />
          </div>
          
          <motion.div
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
             className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/50 to-transparent mt-4 md:mt-8 mb-6 md:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-base md:text-2xl font-light max-w-2xl mx-auto text-white/90 leading-relaxed drop-shadow-lg px-4"
          >
            Découvrez les réalisations des étudiants de la formation MODE83.
          </motion.p>
        </motion.div>

        {/* MARQUEE */}
        <div className="absolute bottom-12 md:bottom-16 left-0 w-full py-4 md:py-6 bg-white text-black z-20 overflow-hidden border-y-4 border-black shadow-[0_0_40px_rgba(255,255,255,0.4)]">
          <motion.div 
            className="flex w-fit will-change-transform"
            animate={{ x: "-50%" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((key) => (
              <div key={key} className="flex whitespace-nowrap shrink-0">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="text-3xl md:text-7xl font-heading font-black px-8 flex items-center gap-4">
                    MODE83 LEVEL ONE <span className="text-black text-2xl md:text-4xl">●</span> 
                    GAME DESIGN <span className="text-black text-2xl md:text-4xl">●</span> 
                    DEVELOPPEMENT <span className="text-black text-2xl md:text-4xl">●</span> 
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </header>

      {/* GAMES SECTION */}
      <section id="jeux" className="relative z-10 py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 px-4">
             <h2 className="text-5xl md:text-8xl font-heading font-bold uppercase leading-[0.9] drop-shadow-lg break-words w-full md:w-auto">
              Nos <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8fbd3] to-[#4fb7b3]">Jeux</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10 bg-black/20 backdrop-blur-sm">
            {GAMES.map((game) => (
              <motion.div
                key={game.id}
                className="group relative h-[400px] md:h-[500px] w-full overflow-hidden border-b md:border-r border-white/10 bg-black cursor-pointer"
                whileHover="hover"
                onClick={() => setSelectedGame(game)}
                data-hover="true"
              >
                <motion.img 
                  src={game.image} 
                  alt={game.name} 
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-3xl font-heading font-bold uppercase">{game.name}</h3>
                  <p className="text-[#a8fbd3] font-mono text-sm uppercase tracking-widest">{game.developer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS SECTION */}
      <section id="videos" className="relative z-10 py-20 md:py-32 bg-black/20 backdrop-blur-sm border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
          <h2 className="text-5xl md:text-8xl font-heading font-bold mb-12 md:mb-20 text-center uppercase">
            Showcase <br/> <GradientText text="VIDÉOS" className="text-6xl md:text-9xl" />
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {VIDEOS.map((video) => (
              <VideoCard key={video.id} video={video} onSelect={setSelectedVideo} />
            ))}
          </div>
        </div>
      </section>

      {/* TRAINING SECTION */}
      <section id="formation" className="relative z-10 py-20 md:py-32 px-4 md:px-6 bg-black/30 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 uppercase leading-tight">
              FORMATION <br/> <span className="text-[#a8fbd3]">LEVEL ONE</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Concepteur Développeur d'Applications Web et Mobile. Une formation complète pour maîtriser l'ensemble de la chaîne de production digitale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {FORMATION_MODULES.map((module) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#4fb7b3]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-[#a8fbd3]" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white group-hover:text-[#a8fbd3] transition-colors">{module.title}</h3>
                <div className="space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{module.details}</p>
                  <ul className="space-y-2">
                    {module.objectifs.map((obj, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                        <CheckCircle2 className="w-3 h-3 text-[#4fb7b3]" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-8 md:p-12 rounded-[3rem] bg-gradient-to-br from-[#1a1b3b] to-black border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 flex items-center gap-4">
                  <Award className="text-[#a8fbd3]" />
                  Modalités d'Évaluation
                </h3>
                <div className="space-y-8">
                  {[
                    { title: "Dossier Professionnel", desc: "Documentation des projets, choix techniques et stratégies de communication." },
                    { title: "Mise en Situation", desc: "Présentation de projets réalisés devant un jury professionnel." },
                    { title: "Entretien Final", desc: "Évaluation de la compréhension globale du métier et de la culture professionnelle." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6">
                      <div className="text-[#a8fbd3] font-heading font-bold text-2xl opacity-50">0{i+1}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" alt="Collaboration" referrerPolicy="no-referrer" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/40 backdrop-blur-sm">
                  <Target className="w-12 h-12 text-[#a8fbd3] mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Objectif Examen</h4>
                  <p className="text-sm text-gray-300">Préparation intensive au titre professionnel avec accompagnement personnalisé.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="relative z-10 py-16 bg-black/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-70 hover:opacity-100 transition-opacity duration-500">
            <div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all">
              <img 
                src="https://lh3.googleusercontent.com/d/1AjdM_2CVU0laEZ0pENx_ar0SQpMqMm49" 
                alt="MODE83" 
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all">
              <img 
                src="https://lh3.googleusercontent.com/d/1fVnQGVDX0_WhFn8woFm7T9aoTmCKtFhu" 
                alt="Région Sud" 
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all">
              <img 
                src="https://lh3.googleusercontent.com/d/1f0KliWtwc8uKrDXmQrreu6HVdGqVGwNi" 
                alt="France Travail" 
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all">
              <img 
                src="https://lh3.googleusercontent.com/d/1N70vknLRrSRuWup2f3VwE2T2kyJQ-C4O" 
                alt="Union Européenne" 
                className="h-12 md:h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Keep some stylized text for the project identity if needed */}
            <div className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold text-white">L1</div>
              <span className="font-heading font-bold tracking-tighter text-xl">LEVEL ONE</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 py-12 md:py-16 bg-black/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="font-heading text-3xl font-bold tracking-tighter text-white">MODE83</div>
          <div className="flex gap-8">
            <a href="https://mode83.net/site/" className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">Site Web</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors uppercase text-xs tracking-widest font-bold">Contact</a>
          </div>
        </div>
      </footer>

      {/* Game Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedGame(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#1a1b3b] border border-white/10 overflow-hidden flex flex-col rounded-[2rem] shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/40">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#4fb7b3]/20 flex items-center justify-center">
                    <Zap className="text-[#a8fbd3]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold">{selectedGame.name}</h3>
                    <p className="text-xs text-[#a8fbd3] font-mono tracking-widest uppercase">{selectedGame.developer}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedGame(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors"><X /></button>
              </div>
              <div className="p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                <div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
                  <img src={selectedGame.image} alt={selectedGame.name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <div className="w-full md:w-1/2 space-y-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {selectedGame.description}
                  </p>
                  <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => window.open(selectedGame.url, '_blank')}
                      className="w-full py-5 bg-[#a8fbd3] text-black font-bold rounded-2xl hover:bg-white transition-all flex items-center justify-center gap-3 group"
                    >
                      JOUER SUR ITCH.IO
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                    <p className="text-center text-xs text-gray-500 italic">
                      Note: L'intégration directe est désactivée pour assurer une meilleure performance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/10"
            >
              <button onClick={() => setSelectedVideo(null)} className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-white/20"><X /></button>
              <iframe 
                src={selectedVideo.url} 
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
