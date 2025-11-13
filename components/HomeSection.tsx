import React, { forwardRef } from 'react';
import { Section } from './Section';

interface HomeSectionProps {
    onDemoClick: () => void;
}

export const HomeSection = forwardRef<HTMLElement, HomeSectionProps>(({ onDemoClick }, ref) => {
    return (
        <section ref={ref} id="home" className="hero-background text-center text-white py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">End the R&D-Market Misalignment Gap</h2>
                <p className="text-xl text-neutral-200 max-w-3xl mx-auto mb-12">
                    LogicLine provides continuous, automated strategic intelligence for deep-tech and robotics founders, replacing slow, static consulting with real-time, actionable insights to ensure R&D aligns with market reality.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button 
                        onClick={onDemoClick}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer w-full sm:w-auto"
                    >
                        See the AI in Action
                    </button>
                    <a 
                        href="mailto:acorbet2@nd.edu?subject=Inquiry%20from%20LogicLine%20Website"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer w-full sm:w-auto"
                    >
                        Contact Us
                    </a>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-20">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                        <h3 className="text-3xl font-bold text-white">$700M+</h3>
                        <p className="text-neutral-200 font-medium">Total Addressable Market (TAM)</p>
                        <p className="text-sm text-neutral-300 mt-2">Global strategic intelligence function for early venture-backed companies.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                        <h3 className="text-3xl font-bold text-white">$17.5M</h3>
                        <p className="text-neutral-200 font-medium">Serviceable Addressable Market (SAM)</p>
                        <p className="text-sm text-neutral-300 mt-2">Immediate focus on North American Robotics & AI-Hardware startups.</p>
                    </div>
                </div>
            </div>
        </section>
    );
});