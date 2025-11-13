import React, { forwardRef } from 'react';
import { Section } from './Section';
import { TEAM_DATA } from '../constants';

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
);


export const TeamSection = forwardRef<HTMLElement>((props, ref) => {
    const { name, title, image, bio, socials } = TEAM_DATA;

    return (
        <Section ref={ref} id="team">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">Meet the Founder</h2>
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex flex-col items-center text-center">
                    <img src={image} alt={name} className="w-40 h-40 rounded-full object-cover shadow-md mb-4" />
                    <h3 className="text-2xl font-bold text-neutral-800">{name}</h3>
                    <p className="text-blue-700 font-semibold">{title}</p>
                    <div className="flex space-x-4 mt-4">
                        <a href={socials[0].url} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-600 transition-colors">
                           <LinkedInIcon />
                        </a>
                        <a href={socials[1].url} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-blue-600 transition-colors">
                           <LinkIcon />
                        </a>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <p className="text-neutral-700 leading-relaxed">{bio}</p>
                </div>
            </div>
        </Section>
    );
});
