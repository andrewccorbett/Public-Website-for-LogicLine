
import React, { forwardRef } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Section } from './Section';
import { MARKET_CHART_DATA } from '../constants';

export const MarketSection = forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section ref={ref} id="market">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-6">The Market Opportunity</h2>
            <p className="text-lg text-neutral-600 max-w-4xl mx-auto text-center mb-12">
                The market for strategic intelligence is vast. Our initial focus is a high-value, high-need niche: North American robotics and AI-hardware companies. This $17.5M SAM represents a critical beachhead within the larger $700M+ global market for this function.
            </p>
            <div className="w-full max-w-md mx-auto h-80 md:h-96">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={MARKET_CHART_DATA}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius="80%"
                            dataKey="value"
                            nameKey="name"
                        >
                            {MARKET_CHART_DATA.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value: number) => `$${value}M`} />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Section>
    );
});
