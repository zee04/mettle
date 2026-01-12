import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Layout, 
  Utensils, 
  GraduationCap, 
  ArrowUpRight, 
  Phone, 
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  Camera,
  PenTool,
  Anchor,
  Coffee,
  X,
  MapPin,
  Calendar
} from 'lucide-react';

const App = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [flippedService, setFlippedService] = useState(null);

  // Scroll listener for nav transparency
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- DATA SECTIONS ---

  const heroSlides = [
    {
      id: 1,
      headline: "Systems Before Service.",
      byline: "Based in Mumbai, Mettle designs the operational architecture that allows boutique concepts to scale and generate predictable returns nationwide and globally.",
      image: "/images/sealinknight.webp",
      cta: "Explore Method",
	  link: "#framework",
    },
	
    {
      id: 2,
      headline: "₹12Cr → ₹34Cr Revenue.",
      byline: "Proven velocity through systemic design and operational audits.",
      image: "/images/stair.webp",
      cta: "Our Projects",
	  link: "#works",
    },
	
    {
      id: 3,
      headline: "From blank space to first service.",
      byline: "Brand, menu, systems, hiring, training, go-live. Complete end-to-end implementation.",
      image: "/images/cornback.webp",
      cta: "View Services",
	  link: "#services",
    },
	
    {
      id: 4,
      headline: "We turn opinions into options",
      byline: "Consistent, rigorous thinking. No noise. Just clarity and partnership.",
      image: "/images/whiteback.webp",
      cta: "Our Philosophy",
	  link: "#philosophy",
    },
	
	{
      id: 5,
      headline: "We listen.",
      byline: "We reduce. We decide - together.",
      image: "/images/heroback.webp",
      cta: "Know more about us",
	  link: "#team",
    },
	
  ];

  const services = [
    { title: "Turnkey Launch", desc: "End-to-end project management from concept to opening night.", icon: <Anchor size={20} /> },
    { title: "Menu Dev", desc: "Culinary engineering for maximum yield and flavor consistency.", icon: <Utensils size={20} /> },
    { title: "Kitchen & MEP", desc: "Technical design optimizing workflow and equipment efficiency.", icon: <Layout size={20} /> },
    { title: "Consulting", desc: "Operational audits and turnaround strategies for distressed assets.", icon: <ShieldCheck size={20} /> },
    { title: "Food Styling", desc: "Visual storytelling through professional culinary photography.", icon: <Camera size={20} /> },
    { title: "Events", desc: "Curating high-end private dining and corporate experiences.", icon: <Coffee size={20} /> },
    { title: "Brand Dev", desc: "Identity creation that resonates with your target market.", icon: <PenTool size={20} /> },
    { title: "Training", desc: "SOP implementation and staff leadership coaching.", icon: <GraduationCap size={20} /> },
  ];

  const projects = [
  { id: 1, name: "Vantara Niwas", location: "Jamnagar", year: "2023", logo: "vantaralogo.webp" },
  { id: 2, name: "Little Food", location: "Mumbai", year: "2022", logo: "littlefoodlogo.webp" },
  { id: 3, name: "Sarabi", location: "Goa", year: "2025", logo: "saarbai.webp" },
  { id: 5, name: "Basque", location: "Mumbai", year: "2021", logo: "basque.webp" },
  { id: 6, name: "Mirari", location: "Lonavala", year: "2026", logo: "mirarilogo.webp" },
  { id: 7, name: "Zeki", location: "Mumbai", year: "2021", logo: "zekilogo.webp" },
  { id: 8, name: "Indulge", location: "Mumbai", year: "2025", logo: "indulgelogo.webp" },
  { id: 9, name: "Whatsapp", location: "Mumbai", year: "2021", logo: "whatsapplogo.webp" },
  { id: 10, name: "Moonshine", location: "Mumbai", year: "2021", logo: "moonshine.webp" },
  { id: 11, name: "Phat Fillings", location: "Mumbai", year: "2021", logo: "phatlogo.webp" },
  { id: 12, name: "Doppler", location: "Jaipur", year: "2026", logo: "doppler.webp" },
];


const frameworkStages = [
  {
    step: "01",
    title: "Validation",
    desc: "Pressure-testing concepts against capital constraints.",
    image: "/images//pepncil.webp"
  },
  {
    step: "02",
    title: "Systemic Design",
    desc: "Planning spatial flow and BOH efficiency.",
    image: "/images//phapse 1.webp"
  },
  {
    step: "03",
    title: "Menu Architecture",
    desc: "Yield management and supply chain logic.",
    image: "/images//menpu.jpg"
  },
  {
    step: "04",
    title: "Human Systems",
    desc: "Leadership structures and assembling the right people for success.",
    image: "/images//vantapragroup.jpg"
  },
  {
    step: "05",
    title: "Launch & Stabilize",
    desc: "Standardization & on-ground training. Ensuring flawless execution from day one",
    image: "/images//vidiptaction.jpg"
  }
]

  // Auto-scroll hero
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="bg-[#FAF9F6] text-[#0A0A0A] font-sans selection:bg-[#A54040] selection:text-white overflow-x-hidden antialiased">
      
      {/* --- FLOATING ACTION BUTTONS --- */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
        <a href="https://wa.me/91816950115" className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <MessageCircle size={24} />
        </a>
        <a href="tel:+91816950115" className="w-14 h-14 rounded-full bg-[#A54040] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <Phone size={24} />
        </a>
      </div>

      {/* --- 1. TOP NAVIGATION --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6 flex justify-between items-center ${isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm' : 'bg-transparent text-white'}`}>
        
        {/* Logo */}
        <div className="flex items-center gap-4 z-50">
           {/* Logo Placeholder - User can replace bg-image url */}
           <img 
  src="/images/mettlenobacklogo.png" 
  className={`h-10 md:h-12 ${isScrolled ? 'brightness-0' : 'brightness-200'}`} 
/>

 <div className="flex flex-col leading-none">
  <span
    className="text-xl tracking-tight uppercase"
    style={{ fontFamily: "Times New Roman, serif", color: "#A54040" }}
  >
    METTLE
  </span>
  <span
    className="text-[9px] uppercase tracking-[0.3em]"
    style={{ fontFamily: "Times New Roman, serif", color: "#A54040" }}
  >
    HOSPITALITY
  </span>
</div>

        </div>

        {/* Desktop Links */}
        <div className={`hidden lg:flex items-center space-x-10 ${isScrolled ? 'text-[#2A3439]' : 'text-white'}`}>
          {['Home', 'Services', 'Philosophy', 'Framework', 'Works', 'Team', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-[#A54040] transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`lg:hidden z-50 p-2 ${isScrolled ? 'text-black' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <div className="space-y-1.5"><div className="w-6 h-0.5 bg-current"></div><div className="w-4 h-0.5 bg-current ml-auto"></div></div>}
        </button>

{/* Mobile Menu Overlay */}
<div
  className={`fixed inset-0 bg-[#0A0A0A] z-40 flex flex-col items-center justify-center space-y-8 text-white transition-all duration-500 ${
    mobileMenuOpen
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-10 pointer-events-none"
  }`}
>
  {['Home', 'Services', 'Philosophy', 'Framework', 'Works', 'Team', 'Contact'].map((item) => (
    <a
      key={item}
      href={`#${item.toLowerCase()}`}
      onClick={() => setMobileMenuOpen(false)}
      className="text-2xl uppercase tracking-widest font-bold hover:text-[#A54040] transition-colors"
    >
      {item}
    </a>
  ))}
</div>

        
      </nav>

      {/* --- 2. HERO SLIDESHOW --- */}
      <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
        {heroSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.headline}
              className="w-full h-full object-cover transform scale-105 animate-slow-zoom" 
            />
            
            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-24 max-w-7xl mx-auto">
              <div className="mb-8 flex items-center space-x-4 animate-slide-up">
                 <div className="h-[1px] w-12 bg-[#A54040]"></div>
                 <span className="text-white/80 text-[10px] md:text-xs uppercase tracking-[0.4em]">
                   
                 </span>
              </div>
              
              {/* Reduced Headline Size */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[1.1] mb-8 max-w-4xl animate-slide-up-delay-1">
                {slide.headline}
              </h1>
              
              <p className="text-lg md:text-xl text-neutral-200 font-light max-w-xl mb-12 animate-slide-up-delay-2 leading-relaxed">
                {slide.byline}
              </p>
              
  <a href={slide.link} className="w-fit bg-[#A54040] text-white px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-colors animate-fade-in flex items-center gap-4">
  {slide.cta} <ArrowRight size={16} />
</a>

            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="absolute bottom-12 right-6 md:right-24 z-30 flex items-center gap-6">
          <button onClick={prevSlide} className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all">
            <ChevronLeft size={20} />
          </button>
          <div className="flex space-x-2">
            {heroSlides.map((_, i) => (
              <div key={i} className={`h-0.5 transition-all duration-500 ${i === activeSlide ? 'w-8 bg-[#A54040]' : 'w-4 bg-white/30'}`}></div>
            ))}
          </div>
          <button onClick={nextSlide} className="p-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all">
            <ChevronRight size={20} />
          </button>
        </div>
      </section>

      {/* --- 3. MARQUEE (Selected Works Integrated) --- */}
      <div id="works" className="bg-white py-12 border-b border-neutral-200 overflow-hidden relative">
         <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
         <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
         
        <div className="flex animate-marquee items-center gap-24 whitespace-nowrap px-12">
          {/* Duplicating array for infinite scroll effect */}
          {[...projects, ...projects].map((p, idx) => (
             <div key={idx} className="flex flex-col items-center gap-4 opacity-80 hover:opacity-100 transition-all cursor-default group">
               {/* Project Logo Placeholder */}
               <div className="h-24 w-24 bg-white rounded-lg border border-neutral-200 flex items-center justify-center shadow-sm overflow-hidden">
                  <img
                      src={`/images/brandlogos/${p.logo}`}
                     alt={p.name}
                     className="max-w-[70%] max-h-[70%] object-contain"
                     />
                  </div>

               <div className="text-center">
                  <div className="text-sm font-bold uppercase tracking-widest text-black mb-1">{p.name}</div>
                  <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500">
                    <MapPin size={10} /> {p.location} • <span className="font-bold">{p.year}</span>
                  </div>
               </div>
             </div>
          ))}
        </div>
      </div>

      {/* --- 4. SERVICES (Solar System Loop) --- */}
      <section id="services" className="py-32 relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
           <img 
              src="/images/picnicbasket.jpeg" 
              className="w-full h-full object-cover opacity-10" 
              alt="Background"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-transparent to-[#FAF9F6]"></div>
        </div>

        <div className="relative z-10 text-center mb-16 px-6">
            <span className="text-[#A54040] text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
              The Mettle <br/> System.
            </h2>
        </div>

        <div className="relative w-[340px] h-[340px] md:w-[600px] md:h-[600px] z-10 flex items-center justify-center perspective-1000">
            {/* Orbit Rings */}
            <div className="absolute w-[80%] h-[80%] border border-neutral-300/60 rounded-full animate-spin-slow pointer-events-none"></div>
            <div className="absolute w-[120%] h-[120%] border border-neutral-300/30 rounded-full pointer-events-none"></div>
            
            {/* Sun / Logo Center */}
            <img 
                  src="/images/mettlenobacklogo.png" 
                  className={`h-10 md:h-12 ${isScrolled ? 'brightness-0' : 'brightness-200'}`} 
              />

            {/* Orbiting Planets */}
            <div className="absolute inset-0 animate-spin-slow hover:pause-spin">
              {services.map((service, index) => {
                 const angle = (index / services.length) * 2 * Math.PI;
                 const radiusPercent = 40; // Percentage of container width
                 const left = `calc(50% + ${Math.cos(angle) * radiusPercent}%)`;
                 const top = `calc(50% + ${Math.sin(angle) * radiusPercent}%)`;
                 const isFlipped = flippedService === index;

                 return (
                   <div 
                      key={index}
                      className="absolute w-16 h-16 md:w-20 md:h-20 -ml-8 -mt-8 md:-ml-10 md:-mt-10 cursor-pointer perspective-1000"
                      style={{ left, top }}
                      onClick={() => setFlippedService(isFlipped ? null : index)}
                   >
                      <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
                          {/* Front Face */}
                          <div className="absolute inset-0 backface-hidden">
                              <div className="w-full h-full bg-white border border-neutral-200 rounded-full flex items-center justify-center shadow-lg group hover:scale-110 transition-transform hover:border-[#A54040]">
                                <div className="text-neutral-700 group-hover:text-[#A54040] animate-reverse-spin">
                                    {service.icon}
                                </div>
                              </div>
                          </div>

                          {/* Back Face (Description) - Using a tooltip style pop-up relative to the icon */}
                          <div className="absolute inset-0 backface-hidden rotate-y-180 flex items-center justify-center">
                              <div className="w-full h-full bg-[#A54040] rounded-full flex items-center justify-center shadow-xl animate-reverse-spin">
                                  <ArrowRight className="text-white w-6 h-6" />
                              </div>
                              {/* The actual text description popout */}
                              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-white p-4 shadow-2xl rounded-lg text-center pointer-events-none z-50 animate-reverse-spin">
                                  <h4 className="font-bold text-xs uppercase mb-1 text-[#A54040]">{service.title}</h4>
                                  <p className="text-[10px] leading-tight text-neutral-500">{service.desc}</p>
                              </div>
                          </div>
                      </div>
                   </div>
                 );
              })}
            </div>
        </div>
        
        <p className="text-[10px] uppercase tracking-widest text-neutral-400 mt-12 animate-pulse">Click icons to explore services</p>
      </section>

      {/* --- 5. PHILOSOPHY / PREMISE --- */}
      <section id="philosophy" className="py-32 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[#A54040] text-[10px] uppercase tracking-[0.4em] font-bold block mb-8">The Premise</span>
          <h3 className="text-3xl md:text-5xl font-serif italic text-[#2A3439] mb-12 leading-tight">
            "Passion fills the dining room.<br/>Engineering fills the bank."
          </h3>
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
               <h4 className="text-lg font-bold uppercase mb-4 flex items-center gap-3">
                 <div className="w-2 h-2 bg-[#A54040]"></div> Why They Fail
               </h4>
               <p className="text-[#2A3439] font-light leading-relaxed mb-6 text-sm md:text-base">
                 80% of independent restaurants close within 5 years. Not because the food was bad, but because the math was broken before the doors opened. Inefficient layouts bleed labor, and poor menu architecture bleeds margin.
               </p>
            </div>
            <div>
               <h4 className="text-lg font-bold uppercase mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-black"></div> Why We Exist
               </h4>
               <p className="text-[#2A3439] font-light leading-relaxed mb-6 text-sm md:text-base">
                 Mettle is the antidote to "gut feeling." We treat hospitality as a manufacturing process wrapped in an art form. We stabilize the chaos of F&B with rigorous systemic design, ensuring your capital is protected by logic, not luck.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 6. TEAM (With "Based in Mumbai" Text) --- */}
      <section id="team" className="py-32 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
           <div className="grid md:grid-cols-12 gap-16 items-center">
              <div className="md:col-span-6 relative order-2 md:order-1">
                 {/* Group Placeholder */}
                 <div className="w-full aspect-[4/3] bg-neutral-200 overflow-hidden relative shadow-2xl">
                    <img src="/images/chatgptimg.png" alt="The Team" className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700" />
                 </div>
              </div>
              <div className="md:col-span-6 space-y-8 order-1 md:order-2">
                 <span className="text-[#A54040] text-[10px] uppercase tracking-[0.4em] font-bold block">Who We Are</span>
                 <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Our<br/>Crew </h2>
                 
                 {/* Requested Text Integrated Here */}
                 <p className="text-lg font-medium italic text-neutral-800 border-l-2 border-[#A54040] pl-6 py-2">
                    "Based in Mumbai, A motley crew of young and seasoned individuals, we don’t operate in a yes-sir, yes-ma’am world. We believe in accountability, showing up, and building brands we’re genuinely proud of.

                    Whether it’s Mayank’s puns or Pranav’s completely zoned-out moments, we build with pride, respect, and most importantly original thought, always."
                 </p>

                
                 
                 <div className="flex gap-6 pt-6 border-t border-black/5">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-neutral-300 overflow-hidden shadow-xl">

                       <img src="/images/vidit1.png" alt="Founder" className="w-full h-full object-cover" />
                    </div>
                    <div>
                       <div className="font-bold text-lg uppercase">Chef Vidit Aren</div>
                       <div className="text-[10px] uppercase tracking-widest text-[#A54040]">Founder</div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- 8. FRAMEWORK / LIFECYCLE (With Video BG) --- */}
      <section id="framework" className="py-32 relative text-white overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 z-0">
            <img 
               src="/images/hero1.jpg" 
               className="w-full h-full object-cover grayscale opacity-20"
               alt="Background Texture"
            />
            <div className="absolute inset-0 bg-black/90"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
           <span className="text-[#A54040] text-[10px] uppercase tracking-[0.4em] font-bold block mb-12">The Method</span>
           <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-24">Lifecycle <br/> Architecture.</h2>
           
           <div className="space-y-0">
{frameworkStages.map((stage, i) => (
  <div
    key={i}
    className="group relative w-full h-[160px] md:h-[200px] overflow-hidden border-t border-white/10 cursor-pointer"
  >
    {/* Background image */}
    <img
      src={stage.image}
      className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40 group-hover:opacity-90 transition-all duration-700"
      alt=""
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/80 group-hover:bg-black/40 transition-all duration-700"></div>

    {/* Content */}
    <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
      <div className="grid md:grid-cols-12 w-full items-center gap-8">
        
        <span className="md:col-span-1 text-xs font-black text-[#A54040]">
          {stage.step}
        </span>

        <h3 className="md:col-span-4 text-2xl md:text-3xl font-bold uppercase tracking-tight text-white">
          {stage.title}
        </h3>

        <p className="md:col-span-5 text-neutral-300 font-light">
          {stage.desc}
        </p>

        <div className="md:col-span-2 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight className="text-[#A54040]" />
        </div>
      </div>
    </div>
  </div>
))}

              <div className="border-t border-white/10"></div>
           </div>
        </div>
      </section>

      {/* --- 9. CONTACT & CTA (With BG Image) --- */}
      <section id="contact" className="py-32 relative bg-[#FAF9F6] overflow-hidden">
        {/* Background Image */}
         <div className="absolute inset-0 z-0 opacity-5">
            <img src="/images/hero1.jpg" className="w-full h-full object-cover grayscale" />
         </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
           <div className="grid lg:grid-cols-2 gap-24">
              
              {/* Left Column: CTAs */}
              <div className="space-y-16">
                 <div>
                    <span className="text-[#A54040] text-[10px] uppercase tracking-[0.4em] font-bold block mb-6">Initiate</span>
                    <h2 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                       Start the <br/> Dialogue.
                    </h2>
                    <p className="text-[#2A3439] text-lg font-light max-w-md">
                       Whether you are in concept phase or need a turnaround for a live asset, we engineer the outcome.
                    </p>
                 </div>

                 <div className="flex flex-col gap-6 items-start">
<a
  href="https://calendar.app.google/TSLqxFvhp5NHXkJ8A"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full md:w-auto bg-[#0A0A0A] text-white px-10 py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#A54040] transition-colors flex items-center justify-between gap-8 group"
>
  Book 30-Min Consultation
  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
</a>

                    <div className="flex gap-4 w-full md:w-auto">
                    <a href="tel:+919769311850"
                   className="flex-1 bg-white border border-neutral-200 px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-50 flex items-center justify-center gap-3">
                  <Phone size={14} className="text-[#A54040]" /> Call Now
                         </a>

                       <a href="https://wa.me/9769311850" target="_blank" rel="noopener noreferrer"
                    className="flex-1 bg-white border border-neutral-200 px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-neutral-50 flex items-center justify-center gap-3">
                       <MessageCircle size={14} className="text-[#25D366]" /> WhatsApp
                           </a>

                    </div>
                 </div>
              </div>

              {/* Right Column: Form */}
              <div className="bg-white/95 backdrop-blur-sm p-10 md:p-12 shadow-2xl shadow-neutral-200/50">
                 <form
  action="https://formspree.io/f/mrblwabz"
  method="POST"
  className="space-y-8"
>

                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-widest font-black text-neutral-400">Name</label>
                          <input type="text" className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-[#A54040] bg-transparent transition-colors" placeholder="Full Name" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-widest font-black text-neutral-400">City</label>
                          <input type="text" className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-[#A54040] bg-transparent transition-colors" placeholder="Project Location" />
                       </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-widest font-black text-neutral-400">Email</label>
                          <input type="email" className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-[#A54040] bg-transparent transition-colors" placeholder="Email Address" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-widest font-black text-neutral-400">Phone</label>
                          <input type="tel" className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-[#A54040] bg-transparent transition-colors" placeholder="+91" />
                       </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                       <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-widest font-black text-neutral-400">Inquiry Type</label>
                          <select className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-[#A54040] bg-transparent transition-colors text-sm font-bold appearance-none">
                             <option>Restaurant / Café Launch</option>
                             <option>Hospitality Consulting</option>
                             <option>Events & Private Dining</option>
                             <option>Training & SOPs</option>
                             <option>Brand Development</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[9px] uppercase tracking-widest font-black text-neutral-400">Stage</label>
                          <select className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-[#A54040] bg-transparent transition-colors text-sm font-bold appearance-none">
                             <option>Concept / Idea</option>
                             <option>Funded / Location Locked</option>
                             <option>Under Construction</option>
                             <option>Operational (Turnaround)</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[9px] uppercase tracking-widest font-black text-neutral-400">Message</label>
                       <textarea className="w-full border-b border-neutral-200 py-3 focus:outline-none focus:border-[#A54040] bg-transparent transition-colors min-h-[100px]" placeholder="Tell us about your vision..."></textarea>
                    </div>

                    <button className="w-full bg-[#A54040] text-white py-6 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-black transition-colors">
                       Submit Inquiry
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white border-t border-neutral-200 py-16 px-6 md:px-12">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-400 text-center md:text-left">
            <div>© 2024 Mettle Hospitality</div>
            <div className="flex gap-8">
               <a href="https://www.instagram.com/arenvidit/?hl=en" className="hover:text-[#A54040]">Instagram</a>
               <a href="https://www.linkedin.com/company/mettle-hospitality/" className="hover:text-[#A54040]">LinkedIn</a>
               <a href="mailto:vidit@mettle-hospitality.com" className="hover:text-[#A54040]">Email</a>
            </div>
            <div>Based in Mumbai • Serving Globally & Pan-India</div>
         </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spin { 
           0% { transform: rotate(0deg); } 
           100% { transform: rotate(360deg); } 
        }
        @keyframes reverse-spin { 
           0% { transform: rotate(0deg); } 
           100% { transform: rotate(-360deg); } 
        }
        .animate-slide-up { animation: slide-up 0.8s ease-out forwards; }
        .animate-slide-up-delay-1 { animation: slide-up 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-slide-up-delay-2 { animation: slide-up 0.8s ease-out 0.4s forwards; opacity: 0; }
        .animate-fade-in { animation: fade-in 1s ease-out 0.6s forwards; opacity: 0; }
        .animate-slow-zoom { animation: slow-zoom 20s linear infinite alternate; }
        .animate-marquee { animation: marquee 18s linear infinite; }
        .animate-spin-slow { animation: spin 22s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 22s linear infinite; }
        .hover\\:pause-spin:hover { animation-play-state: paused; }
        .hover\\:pause-spin:hover .animate-reverse-spin { animation-play-state: paused; }
        
        /* 3D Flip Utilities */
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}} />
    </div>
  );
};

export default App;