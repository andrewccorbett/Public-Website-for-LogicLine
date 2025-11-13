
import React, { useState, forwardRef } from 'react';
import { Section } from './Section';
import { SOLUTION_TABS } from '../constants';

type TabKey = keyof typeof SOLUTION_TABS;

const TabButton: React.FC<{ label: string; isActive: boolean; onClick: () => void; }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`tab-btn px-4 py-2 rounded-md font-medium transition-all duration-200 ${
            isActive 
            ? 'bg-blue-700 text-white shadow-md' 
            : 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300'
        }`}
    >
        {label}
    </button>
);


export const SolutionSection = forwardRef<HTMLElement>((props, ref) => {
    const [activeTab, setActiveTab] = useState<TabKey>('competitor');
    const activeTabData = SOLUTION_TABS[activeTab];

    return (
        <Section ref={ref} id="solution">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">The Solution: Continuous, Automated Intelligence</h2>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto text-center mb-12">
                LogicLine solves the misalignment gap by providing a continuous, automated platform. Users define their R&D goals and competitors once, and the platform delivers a real-time feed of actionable intelligence across three key verticals. Explore the features below.
            </p>
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
                    <TabButton label="1. Competitor Monitoring" isActive={activeTab === 'competitor'} onClick={() => setActiveTab('competitor')} />
                    <TabButton label="2. VC & Funding Analysis" isActive={activeTab === 'funding'} onClick={() => setActiveTab('funding')} />
                    <TabButton label="3. Patent & IP Alerts" isActive={activeTab === 'ip'} onClick={() => setActiveTab('ip')} />
                </div>
                <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-neutral-200 min-h-[250px] transition-opacity duration-300">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">{activeTabData.title}</h3>
                    <p className="text-neutral-700 mb-4">{activeTabData.description}</p>
                    <strong className="text-neutral-900">Core Value:</strong>
                    <ul className="list-disc list-inside ml-2 mt-2 space-y-1 text-neutral-700">
                        {activeTabData.valuePoints.map((point, index) => <li key={index}>{point}</li>)}
                    </ul>
                </div>
            </div>
        </Section>
    );
});
