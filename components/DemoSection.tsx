
import React, { forwardRef } from 'react';
import { Section } from './Section';
import { DEMO_STEPS_DATA } from '../constants';

const Icons: { [key: number]: React.FC<{ className?: string }> } = {
    0: ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>),
    1: ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H7a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>),
    2: ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.556 15.556l-1.414-1.414M18.364 5.636l-1.414 1.414m-12.728 12.728l-1.414 1.414" /></svg>),
    3: ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>),
    4: ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>),
};


export const DemoSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section ref={ref} id="demo">
             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">Platform Workflow Demo</h2>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto text-center mb-12">
                Follow this process to see how LogicLine transforms raw, public data into your competitive advantage. From initial setup to strategic action, the platform is designed for speed and clarity.
            </p>

            <div className="relative max-w-5xl mx-auto mt-16">
                 {/* Vertical line */}
                <div className="absolute left-9 top-0 h-full w-0.5 bg-blue-200" aria-hidden="true"></div>
                
                <div className="relative space-y-12">
                    {DEMO_STEPS_DATA.map((step, index) => {
                        const Icon = Icons[index];

                        return (
                            <div key={index} className="relative pl-20">
                                 {/* Icon and Circle */}
                                <div className="absolute left-0 top-1 flex items-center justify-center">
                                    <div className="flex h-18 w-18 items-center justify-center rounded-full bg-blue-600 shadow-lg ring-8 ring-white">
                                        {Icon && <Icon className="h-8 w-8 text-white" />}
                                    </div>
                                </div>
                                <div className={`grid md:grid-cols-2 gap-8 items-center`}>
                                    <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200 md:order-1">
                                        <h3 className="text-2xl font-bold text-blue-800 mb-2">{step.title}</h3>
                                        <p className="text-neutral-700">{step.description}</p>
                                    </div>
                                    <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center p-2 shadow-inner md:order-2">
                                       <img src={step.image} alt={step.title} className="w-full h-full object-contain rounded-md" />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section>
    );
});