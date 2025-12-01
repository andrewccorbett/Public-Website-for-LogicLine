
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

type Message = {
    role: 'user' | 'model';
    text: string;
};

const systemInstruction = `You are a helpful and friendly AI assistant for LogicLine Innovation. Your goal is to answer questions about the company, its product, and its market based on the following information. Be concise and professional in your responses.

**Company:** LogicLine Innovation
**Product:** A continuous, automated strategic intelligence platform for deep-tech and robotics founders.
**Problem it solves:** It closes the "R&D-Market Misalignment Gap." Deep-tech R&D cycles are fast, but strategic analysis (done by traditional consultants) is slow, expensive, and quickly becomes outdated. This leads to wasted capital and missed opportunities.
**Solution:** LogicLine replaces slow consulting with real-time, actionable insights. Users define their R&D goals and competitors once, and the platform delivers a continuous feed of intelligence on:
1.  **Competitor Monitoring:** Tracks feature releases, pricing changes, and key hires.
2.  **Funding & VC Analysis:** Identifies relevant VCs and alerts on newly funded rivals.
3.  **Patent & IP Alerts:** Monitors new IP filings against the user's roadmap.
**AI Technology:** The "AI Core" uses a dual-engine AI:
1.  **Retrieval-Augmented Generation (RAG):** Scans and extracts information from public data like patents, VC press releases, and technical blogs.
2.  **Multi-Modal Chain-of-Thought Processing (MCP):** Synthesizes the findings to identify patterns and critical signals.
**Ethical Use & Insight:** LogicLine operates ethically by using **only publicly available information** (e.g., patents, academic papers). It explicitly is **not** a corporate spy tool and does not access private servers. Its value lies in synthesizing public data to provide unparalleled industry insight and context, not just surveillance.
**User Interaction:** The user provides initial context (R&D tracks, competitors). The AI works autonomously, and the user interacts with a clean feed of alerts and a dashboard.
**Market:**
-   Total Addressable Market (TAM): $700M+ (Global strategic intelligence for early ventures).
-   Serviceable Addressable Market (SAM): $17.5M (North American Robotics & AI-Hardware startups).
**Founder:** Andrew Corbett, who has experience in life sciences R&D, digital transformations for pharma, and is part of Notre Dame's ESTEEM Graduate Program for commercializing technology.

Do not answer questions outside of this context. If a user asks something unrelated, politely state that you can only answer questions about LogicLine Innovation.`;


const ChatIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
);

const SendIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([{
                role: 'model',
                text: "Hello! I'm the LogicLine AI Assistant. Ask me anything about our strategic intelligence platform."
            }]);
        }
    }, [isOpen]);

    const handleSendMessage = async () => {
        if (!userInput.trim() || isLoading) return;

        const newMessages: Message[] = [...messages, { role: 'user', text: userInput }];
        setMessages(newMessages);
        const currentUserInput = userInput;
        setUserInput('');
        setIsLoading(true);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: currentUserInput,
                config: {
                    systemInstruction: systemInstruction,
                }
            });
            const text = response.text;
            
            setMessages([...newMessages, { role: 'model', text: text }]);
        } catch (error) {
            console.error("Error calling Gemini API:", error);
            setMessages([...newMessages, { role: 'model', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div aria-live="polite" className={`fixed bottom-24 right-5 w-[calc(100%-2.5rem)] max-w-sm bg-white rounded-xl shadow-2xl transition-all duration-300 ease-in-out z-50 origin-bottom-right ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="flex justify-between items-center p-4 bg-blue-800 text-white rounded-t-xl">
                    <h3 className="font-bold text-lg">LogicLine AI Assistant</h3>
                    <button onClick={() => setIsOpen(false)} aria-label="Close chat" className="hover:bg-blue-700 p-1 rounded-full"><CloseIcon /></button>
                </div>
                <div ref={chatContainerRef} className="h-96 overflow-y-auto p-4 space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs md:max-w-sm rounded-lg px-4 py-2 ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-neutral-200 text-neutral-800'}`}>
                                <p className="whitespace-pre-wrap">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start">
                             <div className="bg-neutral-200 rounded-lg px-4 py-2">
                                <div className="flex items-center justify-center space-x-1">
                                    <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                    <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                    <div className="w-2 h-2 bg-neutral-500 rounded-full animate-bounce"></div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="p-4 border-t border-neutral-200">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                            placeholder="Ask a question..."
                            className="flex-grow p-2 border border-neutral-600 bg-neutral-700 text-white placeholder:text-neutral-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            aria-label="Chat input"
                        />
                        <button 
                            onClick={handleSendMessage} 
                            disabled={isLoading || !userInput.trim()}
                            className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 disabled:bg-neutral-400 disabled:cursor-not-allowed flex items-center justify-center"
                            aria-label="Send message"
                        >
                            <SendIcon />
                        </button>
                    </div>
                </div>
            </div>
            
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="fixed bottom-5 right-5 bg-blue-700 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 z-50"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {isOpen ? <CloseIcon /> : <ChatIcon />}
            </button>
        </>
    );
};
