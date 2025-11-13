
import React, { forwardRef } from 'react';
import { Section } from './Section';

export const ProblemSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section ref={ref} id="problem" className="bg-white rounded-xl shadow-lg my-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">The Problem: A Gap Between Speed & Strategy</h2>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto text-center mb-12">
                This section explores the core conflict facing deep-tech startups. Fast-paced engineering cycles, which are essential for innovation, are constantly undermined by slow, episodic strategic analysis. This misalignment creates significant risk, wasting capital and time.
            </p>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                    <h3 className="text-2xl font-bold text-red-800 mb-3">Slow Strategy Cycle (The Old Way)</h3>
                    <ul className="list-none space-y-2">
                        <li className="flex items-start"><span className="text-red-500 font-bold mr-2 mt-1">●</span><span>Identify need for analysis</span></li>
                        <li className="flex items-start"><span className="text-red-500 font-bold mr-2 mt-1">●</span><span>Source and hire expensive consultants</span></li>
                        <li className="flex items-start"><span className="text-red-500 font-bold mr-2 mt-1">●</span><span>Wait weeks/months for static report</span></li>
                        <li className="flex items-start"><span className="text-red-500 font-bold mr-2 mt-1">●</span><span>Report becomes obsolete quickly</span></li>
                        <li className="flex items-start"><span className="text-red-500 font-bold mr-2 mt-1">●</span><strong className="text-red-900">Result: R&D decisions based on outdated info</strong></li>
                    </ul>
                </div>
                <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-r-lg">
                    <h3 className="text-2xl font-bold text-green-800 mb-3">Fast R&D Cycle (The Reality)</h3>
                    <ul className="list-none space-y-2">
                        <li className="flex items-start"><span className="text-green-600 font-bold mr-2 mt-1">●</span><span>Weekly/Monthly Sprints</span></li>
                        <li className="flex items-start"><span className="text-green-600 font-bold mr-2 mt-1">●</span><span>Rapid Prototyping & Iteration</span></li>
                        <li className="flex items-start"><span className="text-green-600 font-bold mr-2 mt-1">●</span><span>Continuous Feature Development</span></li>
                        <li className="flex items-start"><span className="text-green-600 font-bold mr-2 mt-1">●</span><span>Competitors & Market Shift Daily</span></li>
                        <li className="flex items-start"><span className="text-green-600 font-bold mr-2 mt-1">●</span><strong className="text-green-900">Need: Strategic insight at the speed of R&D</strong></li>
                    </ul>
                </div>
            </div>
            <p className="text-center text-lg text-red-700 font-semibold mt-12 max-w-3xl mx-auto">
                This gap leads to misallocated capital, redundant R&D, and missed market opportunities, forcing founders to divert focus from building to administrative analysis.
            </p>
        </Section>
    );
});
