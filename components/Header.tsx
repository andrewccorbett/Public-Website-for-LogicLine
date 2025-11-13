
import React from 'react';
import type { NavLink } from '../types';

interface HeaderProps {
    navLinks: NavLink[];
    activeSection: string;
    onNavClick: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ navLinks, activeSection, onNavClick }) => {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md shadow-sm">
            <nav className="max-w-7xl mx-auto flex flex-wrap justify-between items-center p-4">
                <h1 className="text-2xl font-bold text-blue-900">LogicLine Innovation</h1>
                <div id="nav-links" className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-0">
                    {navLinks.map((link) => (
                        <span
                            key={link.id}
                            onClick={() => onNavClick(link.id)}
                            className={`nav-link cursor-pointer px-3 py-2 rounded-md transition-all duration-200 font-medium transform hover:scale-105 ${
                                activeSection === link.id
                                    ? 'bg-blue-900 text-white shadow-md'
                                    : 'text-neutral-700 hover:bg-blue-100'
                            }`}
                        >
                            {link.label}
                        </span>
                    ))}
                </div>
            </nav>
        </header>
    );
};
