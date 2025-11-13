import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { DemoSection } from './components/DemoSection';
import { MarketSection } from './components/MarketSection';
import { ComparisonSection } from './components/ComparisonSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';
import { NAV_LINKS } from './constants';
import type { NavLink } from './types';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    
    const sectionRefs = useRef<{[key: string]: HTMLElement | null}>({});

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = '';
            NAV_LINKS.forEach((link) => {
                const section = sectionRefs.current[link.id];
                if (section) {
                    const sectionTop = section.offsetTop;
                    if (window.scrollY >= sectionTop - 100) {
                        currentSection = link.id;
                    }
                }
            });
            setActiveSection(currentSection || 'home');
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleNavClick = (id: string) => {
      const section = sectionRefs.current[id];
      if(section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }

    return (
        <div className="bg-neutral-50 text-neutral-800">
            <Header navLinks={NAV_LINKS} activeSection={activeSection} onNavClick={handleNavClick} />
            <main>
                <HomeSection ref={el => sectionRefs.current['home'] = el} onDemoClick={() => handleNavClick('demo')} />
                <ProblemSection ref={el => sectionRefs.current['problem'] = el} />
                <SolutionSection ref={el => sectionRefs.current['solution'] = el} />
                <HowItWorksSection ref={el => sectionRefs.current['how-it-works'] = el} />
                <DemoSection ref={el => sectionRefs.current['demo'] = el} />
                <MarketSection ref={el => sectionRefs.current['market'] = el} />
                <ComparisonSection ref={el => sectionRefs.current['comparison'] = el} />
                <TeamSection ref={el => sectionRefs.current['team'] = el} />
            </main>
            <Footer />
        </div>
    );
};

export default App;
