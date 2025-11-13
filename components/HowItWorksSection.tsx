
import React, { forwardRef } from 'react';
import { Section } from './Section';
import { AI_EXPLANATIONS } from '../constants';

const AIExplanationCard: React.FC<{ title: string; description: string; icon: React.ReactNode }> = ({ title, description, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
        <div className="flex items-center mb-3">
            <div className="bg-blue-100 text-blue-700 p-2 rounded-full mr-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-blue-900">{title}</h3>
        </div>
        <p className="text-neutral-700 text-base">{description}</p>
    </div>
);

export const HowItWorksSection = forwardRef<HTMLElement>((props, ref) => {

    return (
        <Section ref={ref} id="how-it-works" className="bg-white rounded-xl shadow-lg my-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">The LogicLine AI Core</h2>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto text-center mb-12">
                Our platform isn't just a data feed; it's a strategic reasoning engine. We use a sophisticated AI architecture, powered by the Gemini API, to transform raw public information into your competitive advantage.
            </p>

            {/* AI Workflow Diagram */}
            <div className="my-16">
                 <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
                    <div className="flex-1 p-4 bg-neutral-100 rounded-lg">
                        <span className="text-blue-700 font-bold">1. Context & Goals</span>
                        <p className="text-sm text-neutral-600">You define your R&D and competitors.</p>
                    </div>
                    <div className="text-2xl text-blue-400 font-light transform rotate-90 md:rotate-0">→</div>
                     <div className="flex-1 p-4 bg-blue-100 rounded-lg">
                        <span className="text-blue-700 font-bold">2. RAG: Data Retrieval</span>
                        <p className="text-sm text-neutral-600">AI scans patents, news, and funding data.</p>
                    </div>
                    <div className="text-2xl text-blue-400 font-light transform rotate-90 md:rotate-0">→</div>
                    <div className="flex-1 p-4 bg-green-100 rounded-lg">
                        <span className="text-green-700 font-bold">3. MCP: Strategic Reasoning</span>
                        <p className="text-sm text-neutral-600">AI analyzes data against your goals.</p>
                    </div>
                    <div className="text-2xl text-blue-400 font-light transform rotate-90 md:rotate-0">→</div>
                    <div className="flex-1 p-4 bg-indigo-100 rounded-lg">
                        <span className="text-indigo-700 font-bold">4. Actionable Intelligence</span>
                         <p className="text-sm text-neutral-600">Receive alerts & dashboard updates.</p>
                    </div>
                </div>
            </div>

            {/* AI Explanations */}
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                <AIExplanationCard
                    title={AI_EXPLANATIONS.what.title}
                    description={AI_EXPLANATIONS.what.description}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>}
                />
                <AIExplanationCard
                    title={AI_EXPLANATIONS.how.title}
                    description={AI_EXPLANATIONS.how.description}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>}
                />
                <AIExplanationCard
                    title={AI_EXPLANATIONS.why.title}
                    description={AI_EXPLANATIONS.why.description}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                />
            </div>
        </Section>
    );
});