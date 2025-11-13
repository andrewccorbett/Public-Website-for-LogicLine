
import React, { forwardRef, ReactNode } from 'react';

interface SectionProps {
    id: string;
    children: ReactNode;
    className?: string;
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ id, children, className = '' }, ref) => {
    return (
        <section ref={ref} id={id} className={`max-w-7xl mx-auto px-4 py-16 md:py-24 ${className}`}>
            {children}
        </section>
    );
});
