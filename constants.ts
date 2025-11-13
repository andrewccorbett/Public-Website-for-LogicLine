
import type { NavLink, ComparisonData } from './types';

export const NAV_LINKS: NavLink[] = [
    { id: 'home', label: 'Home' },
    { id: 'problem', label: 'The Problem' },
    { id: 'solution', label: 'The Solution' },
    { id: 'how-it-works', label: 'The AI Core' },
    { id: 'demo', label: 'Demo' },
    { id: 'market', label: 'Market' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'team', label: 'Meet the Team' },
];

export const SOLUTION_TABS = {
    competitor: {
        title: 'Direct Competitor Monitoring',
        description: "Provides a real-time feed tracking feature releases, pricing model changes, and key personnel hires from specified rivals. Instead of discovering a competitor's pivot months late, founders see it as it happens.",
        valuePoints: [
            'Eliminates strategic blind spots.',
            'Enables rapid response to competitor moves.',
            'Visualizes market positioning with a dynamic heatmap.',
        ]
    },
    funding: {
        title: 'Funding & VC Pipeline Analysis',
        description: "Actively identifies the most relevant VCs investing in the user's niche and immediately alerts on newly funded rivals, detailing their new capital runway and the investment thesis.",
        valuePoints: [
            'Identifies "who to watch" (new, well-funded rivals).',
            'Builds a qualified pipeline of active, relevant investors.',
            'Understands the flow of capital in the ecosystem.',
        ]
    },
    ip: {
        title: 'Patent & IP Alerts',
        description: "Continuously monitors new IP filings and compares their claims directly against the user's R&D roadmap. The AI assesses for potential competitive blockades or new \"white space\" opportunities.",
        valuePoints: [
            'Prevents wasting R&D on a direction that is already patented.',
            'Identifies novel "white space" for innovation.',
            'Provides a timeline of IP filings to predict competitor strategy.',
        ]
    }
};

export const AI_EXPLANATIONS = {
    what: {
        title: "What The AI Does",
        description: "Our dual-engine AI continuously scans and ingests a massive stream of unstructured public data—patent filings, VC press releases, academic papers, and technical blogs. Using a Retrieval-Augmented Generation (RAG) model, it extracts and fact-checks relevant information. It then uses Multi-Modal Chain-of-Thought Processing (MCP) to synthesize these findings, identifying patterns, trends, and critical signals that would be impossible for a human team to track in real-time."
    },
    how: {
        title: "How You Interact With It",
        description: "Your role is simple and strategic. You provide the initial context by defining your R&D tracks, key competitors, and market focus. From there, the AI works autonomously in the background as your 'always-on' internal analyst. Your primary interaction is with the output: a clean, prioritized feed of alerts and a dynamic dashboard that visualizes the competitive landscape, freeing you from the manual work of data collection and analysis."
    },
    why: {
        title: "Why It's a Game-Changer",
        description: "LogicLine's AI gives you the unfair advantage of foresight. It collapses the months-long strategic analysis cycle into minutes, delivering insights at the speed of your engineering team. This isn't just about data; it's about turning that data into decisive, actionable intelligence. It ensures your R&D capital and engineering time are always invested with maximum impact, preventing costly misalignments with the market and keeping you steps ahead of the competition."
    }
};

export const DEMO_STEPS_DATA = [
    {
        title: '1. Define Your Landscape',
        description: 'Begin by providing your core R&D goals, current projects, and key competitors. This creates a personalized baseline for the AI to work from, ensuring all insights are relevant to your strategic position.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNTEyIDI1NiI+CiAgICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YxZjVmOSIvPgogICAgPHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iNDcyIiBoZWlnaHQ9IjIxNiIgcng9IjEyIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNlMmU4ZjAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iMjU2IiB5PSI0NSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMGYxNzJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNjAwIj5EZWZpbmUgWW91ciBTdHJhdGVnaWMgTGFuZHNjYXBlPC90ZXh0PgogICAgCiAgICA8IS0tIEFyZWEgb2YgSW50ZXJlc3QgLS0+CiAgICA8dGV4dCB4PSI0MCIgeT0iNzUiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzMzNDE1NSIgZm9udC13ZWlnaHQ9IjUwMCI+QXJlYSBvZiBJbnRlcmVzdDwvdGV4dD4KICAgIDxyZWN0IHg9IjQwIiB5PSI4MiIgd2lkdGg9IjQzMiIgaGVpZ2h0PSIzMiIgcng9IjYiIGZpbGw9IiNmOGZhZmMiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgPHRleHQgeD0iNTAiIHk9IjEwMyIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ3NDhiIj5lLmcuZy4sIEFJLXBvd2VyZWQgcm9ib3RpY3MgZm9yIGxvZ2lzdGljczwvdGV4dD4KCiAgICA8IS0tIEtleSBPYmplY3RpdmVzIC0tPgogICAgPHRleHQgeD0iNDAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjMzM0MTU1IiBmb250LXdlaWdodD0iNTAwIj5LZXkgT2JqZWN0aXZlczwvdGV4dD4KICAgIDxyZWN0IHg9IjQwIiB5PSIxMzciIHdpZHRoPSI0MzIiIGhlaWdodD0iMzIiIHJ4PSI2IiBmaWxsPSIjZjhmYWZjIiBzdHJva2U9IiNjYmQ1ZTEiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHRleHQgeD0iNTAiIHk9IjE1OCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ3NDhiIj5lLmcuLCBSZWR1Y2UgcGlja2luZyBlcnJvcnMgYnkgMzAlPC90ZXh0PgoKICAgIDwhLS0gQ29tcGV0aXRvcnMgLS0+CiAgICA8dGV4dCB4PSI0MCIgeT0iMTg1IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2lzeT0iMTMiIGZpbGw9IiMzMzQxNTUiIGZvbnQtd2VpZ2h0PSI1MDAiPkNvbXBldGl0b3JzPC90ZXh0PgogICAgPHJlY3QgeD0iNDAiIHk9IjE5MiIgd2lkdGg9IjQzMiIgaGVpZ2h0PSIzMiIgcng9IjYiIGZpbGw9IiNmOGZhZmMiIHN0cm9rZT0iI2NiZDVlMSIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgPHRleHQgeD0iNTAiIHk9IjIxMyIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjNjQ3NDhiIj5lLmcuZy4sIEJvc3RvbiBEeW5hbWljcywgQWdpbGl0eSBSb2JvdGljczwvdGV4dD4KPC9zdmc+'
    },
    {
        title: '2. Continuous Data Ingestion',
        description: 'Our system automatically monitors thousands of sources 24/7, including patent offices, VC funding announcements, academic journals, and technical news sites, feeding a constant stream of relevant data into the analysis engine.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNTEyIDI1NiI+CiAgICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YxZjVmOSIvPgogICAgPHRleHQgeD0iMjU2IiB5PSIzNSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSIjMGYxNzJhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNjAwIj5Db250aW51b3VzIERhdGEgSW5nZXN0aW9uICgyNC83KTwvdGV4dD4KICAgIDxyZWN0IHg9IjE5NiIgeT0iOTgiIHdpZHRoPSIxMjAiIGhlaWdodD0iNjAiIHJ4PSI4IiBmaWxsPSIjMWU0MGFmIiBzdHJva2U9IiMxZDRlZDgiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgPHRleHQgeD0iMjU2IiB5PSIxMjIiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5Mb2dpY0xpbmUgQUk8L3RleHQ+CiAgICA8dGV4dCB4PSIyNTYiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjOTNjNWZkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Jbmdlc3Rpb24gRW5naW5lPC90ZXh0PgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAsIDYwKSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSI1MCIgcng9IjYiIGZpbGw9IiNlMGU3ZmYiIHN0cm9rZT0iI2E1YjRmYyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPHRleHQgeD0iNTAiIHk9IjI1IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMzMTJlODEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI1MTAiPlBhdGVudCBGaWxpbmdzPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI0MCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjNDMzOGNhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VU1BUTywgRVBPLCBldGMuPC90ZXh0PgogICAgPC9nPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzcyLCA2MCkiPgogICAgICAgIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIHJ4PSI2IiBmaWxsPSIjZGNmY2U3IiBzdHJva2U9IiM4NmVmYWMiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICAgIDx0ZXh0IHg9IjUwIiB5PSIyNSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMTQ1MzJkIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNTEwIj5WQyAmYW1wOyBGdW5kaW5nPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI0MCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMTY2NTM0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QcmVzcyBSZWxlYXNlczwvdGV4dD4KICAgIDwvZz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQwLCAxNDYpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjUwIiByeD0iNiIgZmlsbD0iI2ZlZjljMyIgc3Ryb2tlPSIjZmRlMDQ3IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8dGV4dCB4PSI1MCIgeT0iMjUiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzcxM2YxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjUwNSI+QWNhZGVtaWMgUGFwZXJzPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI0MCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjODU0ZDBlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5hclhpdiwgSm91cm5hbHM8L3RleHQ+CiAgICA8L2c+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNzIsIDE0NikiPgogICAgICAgIDxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iNTAiIHJ4PSI2IiBmaWxsPSIjZmVlMmUyIiBzdHJva2U9IiNmY2E1YSIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPHRleHQgeD0iNTAiIHk9IjI1IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM3ZjFkMWQiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSI1MDUiPlRlY2huaWNhbCBOZXdzPC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjUwIiB5PSI0MCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjOTkxYjFiIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5CbG9ncyAmYW1wOyBGZWVkczwvdGV4dD4KICAgIDwvZz4KICAgIDxkZWZzPgogICAgICAgIDxtYXJrZXIgaWQ9ImFycm93aGVhZCIgbWFya2VyV2lkdGg9IjEwIiBtYXJrZXJIZWlnaHQ9IjciIHJlZlg9IjAiIHJlZlk9IjMuNSIgb3JpZW50PSJhdXRvIj4KICAgICAgICAgICAgPHBvbHlnb24gcG9pbnRzPSIwIDAsIDEwIDMuNSwgMCA3IiBmaWxsPSIjNjQ3NDhiIiAvPgogICAgICAgIDwvbWFya2VyPgogICAgPC9kZWZzPgogICAgPHBhdGggZD0iTTE0MCw4NSBDMTcwLDk1IDE4NiwxMDUgMTk2LDExMCIgc3Ryb2tlPSIjNjQ3NDhiIiBzdHJva2Utd2lkdGg9IjEuNSIgZmlsbD0ibm9uZSIgc3Ryb2tlLWRhc2hhcnJheT0iNCAyIiBtYXJrZXItZW5kPSJ1cmwoI2Fycm93aGVhZCkiLz4KICAgIDxwYXRoIGQ9Ik0zNzIsODUgQzM0Miw5NSAzMjYsMTA1IDMxNiwxMTAiIHN0cm9rZT0iIzY0NzQ4YiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjQgMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvd2hlYWQpIi8+CiAgICA8cGF0aCBkPSJNMTQwLDE3MSBDMTcwLDE2MSAxODYsMTUxIDE5NiwxNDYiIHN0cm9rZT0iIzY0NzQ4YiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjQgMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvd2hlYWQpIi8+CiAgICA8cGF0aCBkPSJNMzcyLDE3MSBDMzQyLDE2MSAzMjYsMTUxIDMxNiwxNDYiIHN0cm9rZT0iIzY0NzQ4YiIgc3Ryb2tlLXdpZHRoPSIxLjUiIGZpbGw9Im5vbmUiIHN0cm9rZS1kYXNoYXJyYXk9IjQgMiIgbWFya2VyLWVuZD0idXJsKCNhcnJvd2hlYWQpIi8+Cjwvc3ZnPg=='
    },
    {
        title: '3. AI Analysis & Synthesis',
        description: 'The AI engine processes the ingested data, performing RAG for fact extraction and MCP for strategic reasoning. It connects dots between disparate information points to build a coherent intelligence picture.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNTEyIDI1NiI+CiAgICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YxZjVmOSIgLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE4MTgyZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkFJIEFuYWx5c2lzIEVuZ2luZTwvdGV4dD4KICAgIAogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzZiYzRmNTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojM2E4MmY3O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICAKICAgIDxyZWN0IHg9IjQwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiNlM2U3ZmEiIHN0cm9rZT0iI2JiY2JmZiIgLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxZTRkYTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJBRzwvdGV4dD4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMTE1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM0NDQ2ODYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRhdGEgUmV0cmlldmFsPC90ZXh0PgogICAgCiAgICA8bGluZSB4MT0iMTkwIiB5MT0iMTAwIiB4Mj0iMjUwIiB5Mj0iMTAwIiBzdHJva2U9IiNjMmNkZDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNSIgLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMjUwLDEwNiAyNjAsMTAwIDI1MCw5NCIgZmlsbD0iI2MyY2RkNSIgLz4KICAgIAogICAgPHJlY3QgeD0iMjcwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiNkMWZhZTciIHN0cm9rZT0iI2E3ZjBjOCIgLz4KICAgIDx0ZXh0IHg9IjM0NSIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxNjY1MzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1DUDwvdGV4dD4KICAgIDx0ZXh0IHg9IjM0NSIgeT0iMTE1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM0NDQ2ODYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlN0cmF0ZWdpYyBSZWFzb25pbmc8L3RleHQ+CiAgICAKICAgIDxyZWN0IHg9IjQwIiB5PSIxNzUiIHdpZHRoPSI0MzIiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWQpIiAvPgogICAgPHRleHQgeD0iNTAuMSUiIHk9IjIwMiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCI+U3ludGhlc2l6ZWQgSW5zaWdodHM8L3RleHQ+CiAgICAKICAgIDxsaW5lIHgxPSIxMTUiIHkxPSIxNDAiIHgyPSIxMTUiIHkyPSIxNzUiIHN0cm9rZT0iI2MyY2RkNSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHBvbHlnb24gcG9pbnRzPSIxMTAsMTc1IDEyMCwxNzUgMTE1LDE4MyIgZmlsbD0iI2MyY2RkNSIgLz4KICAgIDxsaW5lIHgxPSIzNDUiIHkxPSIxNDAiIHgyPSIzNDUiIHkyPSIxNzUiIHN0cm9rZT0iI2MyY2RkNSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgoJPHBvbHlnb24gcG9pbnRzPSIzNDAsMTc1IDE1MCwxNzUgMzQ1LDE4MyIgZmlsbD0iI2MyY2RkNSIgLz4KPC9zdmc+'
    },
    {
        title: '4. Receive Actionable Alerts',
        description: 'When a critical event is detected—like a competitor launching a new feature or a rival securing funding—you receive an immediate alert. Each alert includes a concise summary and a "Strategic Urgency Score" from 1-5.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNTEyIDI1NiI+CiAgICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YxZjVmOSIgLz4KICAgIDxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjQ3MiIgaGVpZ2h0PSIyMTYiIHJ4PSIxMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZTJlOGYwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDx0ZXh0IHg9IjI1NiIgeT0iNDUiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzBmMTcyYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjYwMCI+QWN0aW9uYWJsZSBJbnRlbGxpZ2VuY2UgRmVlZDwvdGV4dD4KCiAgICA8IS0tIEFsZXJ0IDE6IENyaXRpY2FsIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAgNjUpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iNDMyIiBoZWlnaHQ9IjU1IiByeD0iOCIgZmlsbD0iI2ZlZjJmMiIgc3Ryb2tlPSIjZmVjYWNhIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8Y2lyY2xlIGN4PSIyOCIgY3k9IjI3LjUiIHI9IjE0IiBmaWxsPSIjZWY0NDQ0Ii8+CiAgICAgICAgPHRleHQgeD0iMjgiIHk9IjMyIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iNzAwIj41PC90ZXh0PgogICAgICAgIDx0ZXh0IHg9IjU1IiB5PSIyNCIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEzIiBmaWxsPSIjOTkxYjFiIiBmb250LXdlaWdodD0iNjAwIj5DT01QRVRJVE9SIEFMRVJTOiBOZXcgRmVhdHVyZSBMYXVuY2g8L3RleHQ+CiAgICAgICAgPHRleHQgeD0iNTUiIHk9IjQ0IiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiNiOTFjMWMiPkFnaWxpdHkgUm9ib3RpY3MgbGF1bmNoZWQgYSBuZXcgZmxlZXQgbWFuYWdlbWVudCBzb2Z0d2FyZSwgZGlyZWN0bHkgY29tcGV0aW5nIHdpdGggeW91ciBwbGFubmVkIFE0IHJlbGVhc2UuPC90ZXh0PgogICAgPC9nPgogICAgCiAgICA8IS0tIEFsZXJ0IDI6IE1vZGVyYXRlIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAgMTMwKSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjQzMiIgaGVpZ2h0PSI1NSIgcng9IjgiIGZpbGw9IiNmZmZiZWIiIHN0cm9rZT0iI2ZlZjNjNyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjgiIGN5PSIyNy41IiByPSIxNCIgZmlsbD0iI2Y1OWUwYiIvPgogICAgICAgIDx0ZXh0IHg9IjI4IiB5PSIzMiIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MzwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI1NSIgeT0iMjQiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzkyNDAwZSIgZm9udC13ZWlnaHQ9IjYwMCI+RlVORElORyBBTEVSVDogUml2YWwgU2VjdXJlcyBTZXJpZXMgQTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI1NSIgeT0iNDQiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2I0NTMwOSI+Q3liZXJEeW5lIFN5c3RlbXMganVzdCBjbG9zZWQgYSAkMTVNL1NlcmllcyBBLCBzaWduYWxpbmcgYWdncmVzc2l2ZSBleHBhbnNpb24gaW4gdGhlIHdhcmVob3VzZSBhdXRvbWF0aW9uIHNwYWNlLjwvdGV4dD4KICAgIDwvZz4KICAgIAogICAgPCEtLSBBbGVydCAzOiBJbmZvcm1hdGlvbmFsIC0tPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAgMTk1KSI+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjQzMiIgaGVpZ2h0PSI1NSIgcng9IjgiIGZpbGw9IiNmMGZkZjQiIHN0cm9rZT0iI2RjZmNlNyIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPGNpcmNsZSBjeD0iMjgiIGN5PSIyNy41IiByPSIxNCIgZmlsbD0iIzIyYzU1ZSIvPgogICAgICAgIDx0ZXh0IHg9IjI4IiB5PSIzMiIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9IjcwMCI+MTwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI1NSIgeT0iMjQiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMyIgZmlsbD0iIzE2NjUzNCIgZm9udC13ZWlnaHQ9IjYwMCI+SVAgVVBEQVRFOiBOZXcgUGF0ZW50IEZpbGluZzwvdGV4dD4KICAgICAgICA8dGV4dCB4PSI1NSIgeT0iNDQiIGZvbnQtZmFtaWx5PSJJbnRlciwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzE1ODAzZCI+QSBuZXcgcGF0ZW50IGZvciAnZHluYW1pYyBvYmplY3QgYXZvaWRhbmNlJyB3YXMgZmlsZWQgYnkgYW4gYWNhZGVtaWMgbGFiLiBMb3cgaW1tZWRpYXRlIHRocmVhdCwgYnV0IHJlbGV2YW50IHRvIHlvdXIgUiZhbXA7RC48L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg=='
    },
    {
        title: '5. Visualize & Strategize',
        description: 'Use the interactive dashboard to explore trends, visualize the competitive landscape with heatmaps, and track market shifts over time. This high-level view transforms raw alerts into a coherent, actionable strategy.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNTEyIDI1NiI+CiAgICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YxZjVmOSIgLz4KICAgIDxyZWN0IHg9IjIwIiB5PSIyMCIgd2lkdGg9IjQ3MiIgaGVpZ2h0PSIyMTYiIHJ4PSIxMCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZDFkNWQwIiAvPgogICAgPHRleHQgeD0iMzUiIHk9IjQ1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxMTJiNGMiIGZvbnQtd2VpZ2h0PSJib2xkIj5TdHJhdGVnaWMgRGFzaGJvYXJkPC90ZXh0PgogICAgPCEtLSBDaGFydCAtLT4KICAgIDxyZWN0IHg9IjM1IiB5PSI2MCIgd2lkdGg9IjIyMCIgaGVpZ2h0PSIxNjAiIHJ4PSI1IiBmaWxsPSIjZmRmZGZlIiBzdHJva2U9IiNmMWRkY2MiIC8+CiAgICA8dGV4dCB4PSIxNDUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM5NDFjZGEiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlZDIEZ1bmRpbmcgVHJlbmRzPC90ZXh0PgogICAgPHBvbHlsaW5lIHBvaW50cz0iNTAgMTkwIDgwIDE0MCAxMTAgMTYwIDE0MCAxMjAgMTcwIDEzMCAyMDAgOTAgMjMwIDEwMCIgc3Ryb2tlPSIjM2E4MmY3IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIC8+CiAgICA8bGluZSB4MT0iNTAiIHkxPSIxOTAiIHgyPSIyNDUiIHkyPSIxOTAiIHN0cm9rZT0iI2QxZDVjZCIgc3Ryb2tlLXdpZHRoPSIxIiAvPgogICAgPGxpbmUgeDE9IjUwIiB5MT0iMTkwIiB4Mj0iNTAiIHkyPSI4MCIgc3Ryb2tlPSIjZDFkNWNkIiBzdHJva2Utd2lkdGg9IjEiIC8+CiAgICAKICAgIDwhLS0gSGVhdG1hcCAtLT4KICAgIDx0ZXh0IHg9IjM4MiIgeT0iNzUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk0MWNkYSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q29tcGV0aXRvciBIZWF0bWFwPC90ZXh0PgogICAgPHJlY3QgeD0iMjcwIiB5PSI4MiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZmNlNWU1IiAvPgogICAgPHJlY3QgeD0iMzI1IiB5PSI4MiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZmVmYWNkIiAvPgogICAgPHJlY3QgeD0iMzgwIiB5PSI4MiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZWNlZWYwIiAvPgogICAgPHJlY3QgeD0iNDM1IiB5PSI4MiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZmZlNGU1IiAvPgogICAgPHJlY3QgeD0iMjcwIiB5PSIxMzkiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2Y4ZjhmYiIgLz4KICAgIDxyZWN0IHg9IjMyNSIgeT0iMTM5IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNkYmY0ZWEiIC8+CiAgICA8cmVjdCB4PSIzODAiIHk9IjEzOSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjYzJkZGZiIiAvPgogICAgPHJlY3QgeD0iNDM1IiB5PSIxMzkiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2E1Y2RmYyIgLz4KICAgIDxyZWN0IHg9IjI3MCIgeT0iMTk2IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmZmZlZTAiIC8+CiAgICA8cmVjdCB4PSIzMjUiIHk9IjE5NiIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIiBmaWxsPSIjZmVmOWNkIiAvPgogICAgPHJlY3QgeD0iMzgwIiB5PSIxOTYiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2Y1Yzg3MyIgLz4KICAgIDxyZWN0IHg9IjQzNSIgeT0iMTk2IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIGZpbGw9IiNmYGI4MmIiIC8+Cjwvc3ZnPg=='
    }
];

export const MARKET_CHART_DATA = [
    { name: 'Total Addressable Market (TAM) - Other', value: 682.5, fill: '#dbeafe' },
    { name: 'Serviceable Addressable Market (SAM)', value: 17.5, fill: '#1d4ed8' },
];

export const COMPARISON_DATA: { [key: string]: ComparisonData } = {
    logicline: {
        title: "LogicLine Platform",
        color: "text-blue-800",
        items: [
            { label: "Update Frequency", value: "Continuous / Real-Time" },
            { label: "Cost Model", value: "Low-Cost SaaS Subscription" },
            { label: "Source", value: "Objective, AI-driven analysis" },
            { label: "Output", value: "Actionable alerts & Urgency Scores" },
            { label: "Core Value", value: "Efficiency & Strategic Foresight" }
        ]
    },
    consultant: {
        title: "Traditional Consultants",
        color: "text-neutral-700",
        items: [
            { label: "Update Frequency", value: "Episodic / Static Snapshot" },
            { label: "Cost Model", value: "High-Cost, Project-Based" },
            { label: "Source", value: "Manual analysis, potential bias" },
            { label: "Output", value: "Static 80-page report" },
            { label: "Core Value", value: "Bespoke, human-led deep dive" }
        ]
    }
};

export const TEAM_DATA = {
    name: 'Andrew Corbett',
    title: 'Founder & CEO',
    image: 'data:image/jpeg;base64,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',
    bio: "Andrew Corbett is the driving force behind LogicLine Innovation, bringing a rare combination of deep technical expertise and proven entrepreneurial leadership. With a background in life sciences and biomedical engineering R&D development, he honed his skills developing digital transformations for some of the largest pharmaceutical clients in the world along with smaller start-up biotechnology innovators. This experience in high-stakes environments, along with his leadership role in DI collegiate athletics, instilled a rigorous approach to engineering that he later applied as a founder. Andrew is currently amplifying his business acumen as a member of Notre Dame's prestigious ESTEEM Graduate Program, which focuses exclusively on commercializing groundbreaking technology. This unique trifecta of technical depth, startup experience, and strategic business education makes him perfectly poised to deliver on LogicLine's ambitious vision.",
    socials: [
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/acorb/' },
        { name: 'Notre Dame ESTEEM', url: 'https://esteem.nd.edu/our-students/records/andrew-corbett-2025-2026/' },
    ]
};