
import React, { useState, forwardRef } from 'react';
import { Section } from './Section';
import { COMPARISON_DATA } from '../constants';

type ComparisonKey = 'logicline' | 'consultant';

const ComparisonButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
    <button
        onClick={onClick}
        className={`px-6 py-3 rounded-md font-semibold transition-all duration-200 transform ${
            isActive 
            ? 'bg-blue-700 text-white scale-105 shadow-lg' 
            : 'bg-neutral-200 text-neutral-600 hover:bg-neutral-300'
        }`}
    >
        {label}
    </button>
);

export const ComparisonSection = forwardRef<HTMLElement>((props, ref) => {
    const [activeComparison, setActiveComparison] = useState<ComparisonKey>('logicline');
    const data = COMPARISON_DATA[activeComparison];

    return (
        <Section ref={ref} id="comparison" className="bg-white rounded-xl shadow-lg my-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">The LogicLine Advantage</h2>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto text-center mb-12">
                Why choose an automated platform over traditional, high-cost consultants? The difference is speed, cost, and actionability. Click to compare the value proposition of each model.
            </p>
            <div className="flex justify-center gap-4 mb-8">
                <ComparisonButton label="LogicLine Platform" isActive={activeComparison === 'logicline'} onClick={() => setActiveComparison('logicline')} />
                <ComparisonButton label="Traditional Consultants" isActive={activeComparison === 'consultant'} onClick={() => setActiveComparison('consultant')} />
            </div>
            <div className="max-w-2xl mx-auto bg-neutral-50 p-6 rounded-lg border border-neutral-200 shadow-inner">
                 <h3 className={`text-2xl font-bold ${data.color} mb-4`}>{data.title}</h3>
                 <ul className="space-y-3">
                    {data.items.map(item => (
                         <li key={item.label} className="flex justify-between items-center flex-wrap">
                             <span className="font-semibold text-neutral-800">{item.label}:</span>
                             <span className="text-neutral-600 text-right">{item.value}</span>
                         </li>
                    ))}
                 </ul>
            </div>
        </Section>
    );
});
