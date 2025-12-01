
import React, { useState, forwardRef, useEffect } from 'react';
import { Section } from './Section';
import { GoogleGenAI, Type } from "@google/genai";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ScatterChart, Scatter, ZAxis, Cell } from 'recharts';

export const DemoSection = forwardRef<HTMLElement>((props, ref) => {
    const [step, setStep] = useState<'input' | 'loading' | 'results'>('input');
    const [loadingText, setLoadingText] = useState('Initializing AI Core...');
    const [inputs, setInputs] = useState({
        interest: 'Autonomous Logistics',
        objectives: 'Reduce warehouse picking latency by 30%',
        competitors: 'Boston Dynamics, Agility Robotics'
    });
    const [data, setData] = useState<any>(null);

    const handleGenerate = async () => {
        setStep('loading');
        const loadingMessages = [
            "Scanning global patent databases...",
            "Ingesting competitor press releases...",
            "Analyzing VC funding flows...",
            "Synthesizing strategic insights..."
        ];
        
        // Cycle through loading messages
        let msgIndex = 0;
        const interval = setInterval(() => {
            setLoadingText(loadingMessages[msgIndex]);
            msgIndex = (msgIndex + 1) % loadingMessages.length;
        }, 800);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const prompt = `
                Act as the LogicLine AI engine. Generate a strategic intelligence feed and dashboard data for a user with:
                - Area of Interest: ${inputs.interest}
                - Key Objectives: ${inputs.objectives}
                - Competitors: ${inputs.competitors}

                Return a JSON object with:
                1. "alerts": 3 specific, realistic alerts (types: "Competitor", "Funding", "IP") that sound actionable and urgent.
                2. "vcData": 6 months of VC funding trends (month, amount in millions) showing a trend relevant to the area.
                3. "heatmap": 4-5 competitor positions with x (Market Presence 0-100), y (Innovation Velocity 0-100), z (Threat Level 100-500), and name. Include the user's company as "You".
            `;

            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            alerts: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.OBJECT,
                                    properties: {
                                        type: { type: Type.STRING },
                                        title: { type: Type.STRING },
                                        urgency: { type: Type.NUMBER },
                                        description: { type: Type.STRING }
                                    }
                                }
                            },
                            vcData: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.OBJECT,
                                    properties: {
                                        month: { type: Type.STRING },
                                        amount: { type: Type.NUMBER }
                                    }
                                }
                            },
                            heatmap: {
                                type: Type.ARRAY,
                                items: {
                                    type: Type.OBJECT,
                                    properties: {
                                        name: { type: Type.STRING },
                                        x: { type: Type.NUMBER },
                                        y: { type: Type.NUMBER },
                                        z: { type: Type.NUMBER }
                                    }
                                }
                            }
                        }
                    }
                }
            });

            if (response.text) {
                setData(JSON.parse(response.text));
                clearInterval(interval);
                setStep('results');
            }
        } catch (error) {
            console.error("AI Generation Error", error);
            // Fallback for "Wizard of Oz" feel if API fails
            setData({
                alerts: [
                    { type: 'Competitor', title: 'Rival Product Launch', urgency: 5, description: `${inputs.competitors.split(',')[0]} released a new module targeting your exact latency specs.` },
                    { type: 'Funding', title: 'Series B Raise Detected', urgency: 4, description: `A stealth startup in ${inputs.interest} just raised $25M from Sequoia.` },
                    { type: 'IP', title: 'Blocking Patent Filed', urgency: 3, description: 'New filing covers "predictive picking algorithms" similar to your roadmap.' }
                ],
                vcData: [
                    { month: 'Jan', amount: 45 }, { month: 'Feb', amount: 52 }, { month: 'Mar', amount: 48 },
                    { month: 'Apr', amount: 70 }, { month: 'May', amount: 85 }, { month: 'Jun', amount: 92 }
                ],
                heatmap: [
                    { name: 'You', x: 30, y: 80, z: 200 },
                    { name: 'Competitor A', x: 85, y: 40, z: 400 },
                    { name: 'Competitor B', x: 60, y: 70, z: 300 },
                    { name: 'New Entrant', x: 20, y: 90, z: 150 }
                ]
            });
            clearInterval(interval);
            setStep('results');
        }
    };

    return (
        <Section ref={ref} id="demo" className="bg-gradient-to-br from-neutral-50 to-blue-50/50">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">Interactive Platform Demo</h2>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto text-center mb-12">
                Experience the power of LogicLine firsthand. Define your strategic landscape below, and watch as our AI engine generates a live, tailored intelligence dashboard.
            </p>

            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-200">
                
                {/* Header / Search Bar Section */}
                <div className="bg-blue-900 p-8 text-white">
                    <h3 className="text-xl font-bold mb-6 flex items-center">
                        <svg className="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        Define Your Strategic Parameters
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-blue-200 text-sm font-semibold mb-2">Area of Interest</label>
                            <input 
                                type="text" 
                                value={inputs.interest}
                                onChange={(e) => setInputs({...inputs, interest: e.target.value})}
                                disabled={step !== 'input'}
                                className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-blue-200 text-sm font-semibold mb-2">Key Objectives</label>
                            <input 
                                type="text" 
                                value={inputs.objectives}
                                onChange={(e) => setInputs({...inputs, objectives: e.target.value})}
                                disabled={step !== 'input'}
                                className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-blue-200 text-sm font-semibold mb-2">Key Competitors</label>
                            <input 
                                type="text" 
                                value={inputs.competitors}
                                onChange={(e) => setInputs({...inputs, competitors: e.target.value})}
                                disabled={step !== 'input'}
                                className="w-full px-4 py-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
                            />
                        </div>
                    </div>

                    {step === 'input' && (
                        <div className="mt-8 flex justify-end">
                            <button 
                                onClick={handleGenerate}
                                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 flex items-center"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                Generate Intelligence Dashboard
                            </button>
                        </div>
                    )}
                </div>

                {/* Content Area */}
                <div className="min-h-[400px] bg-neutral-50 p-8">
                    {step === 'loading' && (
                        <div className="flex flex-col items-center justify-center h-full py-12">
                            <div className="relative w-24 h-24 mb-8">
                                <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full animate-ping opacity-25"></div>
                                <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                    <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-blue-800 animate-pulse">{loadingText}</h3>
                            <p className="text-neutral-500 mt-2">Connecting to global data streams...</p>
                        </div>
                    )}

                    {step === 'results' && data && (
                        <div className="animate-fade-in-up">
                            {/* Alerts Feed */}
                            <div className="mb-12">
                                <h3 className="text-lg font-bold text-neutral-800 mb-4 flex items-center uppercase tracking-wider text-sm">
                                    <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
                                    Live Actionable Feed
                                </h3>
                                <div className="space-y-4">
                                    {data.alerts.map((alert: any, idx: number) => (
                                        <div key={idx} className="bg-white border-l-4 border-blue-600 rounded-r-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div className="flex items-center gap-3">
                                                    <span className={`text-xs font-bold px-2 py-1 rounded text-white ${alert.type === 'Competitor' ? 'bg-indigo-500' : alert.type === 'Funding' ? 'bg-green-600' : 'bg-orange-500'}`}>
                                                        {alert.type}
                                                    </span>
                                                    <h4 className="font-bold text-lg text-neutral-800">{alert.title}</h4>
                                                </div>
                                                <div className="flex items-center bg-red-50 px-3 py-1 rounded-full">
                                                    <span className="text-xs text-red-600 font-bold mr-1">Urgency:</span>
                                                    <div className="flex gap-0.5">
                                                        {[...Array(5)].map((_, i) => (
                                                            <div key={i} className={`w-1.5 h-3 rounded-full ${i < alert.urgency ? 'bg-red-500' : 'bg-red-200'}`}></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-neutral-600 mt-2 leading-relaxed">{alert.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dashboard Charts */}
                            <div className="grid lg:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                                    <h4 className="font-bold text-neutral-700 mb-4">VC Capital Inflow: {inputs.interest}</h4>
                                    <div className="h-64">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={data.vcData}>
                                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
                                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                                                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} unit="M" />
                                                <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'}} />
                                                <Line type="monotone" dataKey="amount" stroke="#2563eb" strokeWidth={3} dot={{r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff'}} activeDot={{r: 6}} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <p className="text-xs text-neutral-400 mt-2 text-center">Trailing 6-month capital deployment trends</p>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm border border-neutral-200">
                                    <h4 className="font-bold text-neutral-700 mb-4">Competitive Landscape Heatmap</h4>
                                    <div className="h-64">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <ScatterChart>
                                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e5e5" />
                                                <XAxis type="number" dataKey="x" name="Market Presence" unit="%" label={{ value: 'Market Presence', position: 'bottom', fontSize: 12 }} />
                                                <YAxis type="number" dataKey="y" name="Innovation Velocity" unit="%" label={{ value: 'Innovation Velocity', angle: -90, position: 'left', fontSize: 12 }} />
                                                <ZAxis type="number" dataKey="z" range={[100, 500]} name="Threat Level" />
                                                <Tooltip cursor={{ strokeDasharray: '3 3' }} content={({ active, payload }) => {
                                                    if (active && payload && payload.length) {
                                                        const data = payload[0].payload;
                                                        return (
                                                            <div className="bg-white p-2 shadow-lg rounded-lg border border-neutral-100">
                                                                <p className="font-bold text-blue-900">{data.name}</p>
                                                                <p className="text-xs text-neutral-500">Threat Level: {data.z}</p>
                                                            </div>
                                                        );
                                                    }
                                                    return null;
                                                }} />
                                                <Scatter name="Competitors" data={data.heatmap} fill="#3b82f6">
                                                    {data.heatmap.map((entry: any, index: number) => (
                                                        <Cell key={`cell-${index}`} fill={entry.name === 'You' ? '#22c55e' : '#3b82f6'} />
                                                    ))}
                                                </Scatter>
                                            </ScatterChart>
                                        </ResponsiveContainer>
                                    </div>
                                    <p className="text-xs text-neutral-400 mt-2 text-center">Bubble size indicates estimated R&D spend</p>
                                </div>
                            </div>
                            
                            <div className="mt-8 text-center">
                                <button onClick={() => setStep('input')} className="text-blue-600 hover:text-blue-800 font-medium underline">
                                    Run New Analysis
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </Section>
    );
});
