
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
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNTEyIDI1NiI+CiAgICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YxZjVmOSIgLz4KICAgIDxyZWN0IHg9IjQwIiB5PSI0MCIgd2lkdGg9IjQzMiIgaGVpZž0IjIwMCIgcng9IjEwIiBmaWxsPSIjZmZmIiBzdHJva2U9IiNkMWQ1ZDAiIHN0cm9rZS13aWR0aD0iMiIgLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgYTbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiMxZTMyYmEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5Mb2dpY0xpbmUgLSBTZXR1cCBDb25maWd1cmF0aW9uPC90ZXh0PgogICAgPHRleHQgeD0iNjAiIHk9IjgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM0NzU1NTViIj5SLkQgR29hbHM6PC90ZXh0PgogICAgPHJlY3QgeD0iNjAiIHk9Ijg1IiB3aWR0aD0iMzg5IiBoZWlnaHQ9IjMwIiByeD0iNCIgZmlsbD0iI2Y4ZmFmYyIgc3Ryb2tlPSIjZTJlOGYwIiAvPgoJPHRleHQgeD0iNjUiIHk9IjEwNSIgZmlsbD0iIzY0NzQ4YiI+QXV0b25vbW91cyBEcm9uZSBOb2RlemEuLi48L3RleHQ+CiAgICA8dGV4dCB4PSI2MCIgeT0iMTQwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM0NzU1NTViIj5LZXkgQ29tcGV0aXRvcnM6PC90ZXh0PgogICAgPHJlY3QgeD0iNjAiIHk9IjE0NSIgd2lkdGg9IjM4OSIgaGVpZ2h0PSIzMCIgcng9IjQiIGZpbGw9IiNmOGZhZmMiIHN0cm9rZT0iI2UyZThmMCIgLz4KCTx0ZXh0IHg9IjY1IiB5PSIxNjUiIGZpbGw9IiM2NDc0OGIiPkN5YmVyRHluZSBTb2x1dGlvbnMsIEFzdHJhUm9ib3RpY3MuLi48L3RleHQ+CiAgICA8cmVjdCB4PSIyMjYiIHk9IjE5MCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjMwIiByeD0iNSIgZmlsbD0iIzI1OTZlZiIgLz4KICAgIDx0ZXh0IHg9IjI1NiIgeT0iMjEwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJzZW1pYm9sZCI+U2F2ZTwvdGV4dD4KPC9zdmc+'
    },
    {
        title: '2. Continuous Data Ingestion',
        description: 'Our system automatically monitors thousands of sources 24/7, including patent offices, VC funding announcements, academic journals, and technical news sites, feeding a constant stream of relevant data into the analysis engine.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNTEyIDI1NiI+CiAgICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YxZjVmOSIgLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE4MTgyZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkRhdGEgU291cmNlcyBJbmdlc3Rpb248L3RleHQ+CiAgICAKICAgIDx0ZXh0IHg9IjgwIiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNDc1NTViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QYXRlbnRzPC90ZXh0PgogICAgPGNpcmNsZSBjeD0iODAiIGN5PSI2MCIgcj0iMjAiIGZpbGw9IiNlM2U3ZmEiIHN0cm9rZT0iIzNhODJmNyIgLz4KICAgIDx0ZXh0IHg9IjE4MCIgeT0iODAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzQ3NTU1YiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VkMgRGF0YTwvdGV4dD4KICAgIDxjaXJjbGUgY3g9IjE4MCIgY3k9IjYwIiByPSIyMCIgZmlsbD0iI2YwZjVkOSIgc3Ryb2tlPSIjZWU5YjdhIiAvPgogICAgPHRleHQgeD0iMjg3IiB5PSI4MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNDc1NTViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5OZXdzICZhbXA7IEJsb2dzPC90ZXh0PgogICAgPGNpcmNsZSBjeD0iMjg3IiBjeT0iNjAiIHI9IjIwIiBmaWxsPSIjZWNlZWYwIiBzdHJva2U9IiM2MWI5NjMiIC8+CiAgICA8dGV4dCB4PSI0MDIiIHk9IjgwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM0NzU1NTViIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BY2FkZW1pYzwvdGV4dD4KICAgIDxjaXJjbGUgY3g9IjQwMiIgY3k9IjYwIiByPSIyMCIgZmlsbD0iI2YxZjVlZiIgc3Ryb2tlPSIjY2E4OWZmIiAvPgogICAgCiAgICA8bGluZSB4MT0iODgiIHkxPSI4MiIgeDI9IjI0NiIgeTI9IjEyOCIgc3Ryb2tlPSIjY2FkMWQ4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjQgMiIgLz4KICAgIDxsaW5lIHgxPSIxNzIiIHkxPSI4MiIgeDI9IjI1MCIgeTI9IjEzMiIgc3Ryb2tlPSIjY2FkMWQ4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjQgMiIgLz4KICAgIDxsaW5lIHgxPSIyOTUiIHkxPSI4MiIgeDI9IjI2MiIgeTI9IjEzMiIgc3Ryb2tlPSIjY2FkMWQ4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjQgMiIgLz4KICAgIDxsaW5lIHgxPSI0MDMiIHkxPSI4MiIgeDI9IjI2NiIgeTI9IjEyOCIgc3Ryb2tlPSIjY2FkMWQ4IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjQgMiIgLz4KICAgIAogICAgPHJlY3QgeD0iMTg2IiB5PSIxNDIiIHdpZHRoPSIxNDAiIGhlaWdodD0iNjAiIHJ4PSIxMCIgZmlsbD0iIzFkMjgyMyIgLz4KICAgIDx0ZXh0IHg9IjI1NiIgeT0iMTc4IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNmZmYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtd2VpZ2h0PSJib2xkIj5Mb2dpY0xpbmUgQUsKPC90ZXh0PgogICAgPHRleHQgeD0iMjU2IiB5PSIxOTYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0iI2E1YWFiMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW5nZXN0aW9uIEVuZ2luZTwvdGV4dD4KPC9zdmc+'
    },
    {
        title: '3. AI Analysis & Synthesis',
        description: 'The AI engine processes the ingested data, performing RAG for fact extraction and MCP for strategic reasoning. It connects dots between disparate information points to build a coherent intelligence picture.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNTEyIDI1NiI+CiAgICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YxZjVmOSIgLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE4MTgyZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkFJIEFuYWx5c2lzIEVuZ2luZTwvdGV4dD4KICAgIAogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IGlkPSJncmFkIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzZiYzRmNTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojM2E4MmY3O3N0b3Atb3BhY2l0eToxIiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICAKICAgIDxyZWN0IHg9IjQwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiNlM2U3ZmEiIHN0cm9rZT0iI2JiY2JmZiIgLz4KICAgIDx0ZXh0IHg9IjExNSIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxZTRkYTMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlJBRzwvdGV4dD4KICAgIDx0ZXh0IHg9IjExNSIgeT0iMTE1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM0NDQ2ODYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRhdGEgUmV0cmlldmFsPC90ZXh0PgogICAgCiAgICA8bGluZSB4MT0iMTkwIiB5MT0iMTAwIiB4Mj0iMjUwIiB5Mj0iMTAwIiBzdHJva2U9IiNjMmNkZDUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iNSIgLz4KICAgIDxwb2x5Z29uIHBvaW50cz0iMjUwLDEwNiAyNjAsMTAwIDI1MCw5NCIgZmlsbD0iI2MyY2RkNSIgLz4KICAgIAogICAgPHJlY3QgeD0iMjcwIiB5PSI2MCIgd2lkdGg9IjE1MCIgaGVpZ2h0PSI4MCIgcng9IjgiIGZpbGw9IiNkMWZhZTciIHN0cm9rZT0iI2E3ZjBjOCIgLz4KICAgIDx0ZXh0IHg9IjM0NSIgeT0iOTUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxNjY1MzQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1DUDwvdGV4dD4KICAgIDx0ZXh0IHg9IjM0NSIgeT0iMTE1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM0NDQ2ODYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlN0cmF0ZWdpYyBSZWFzb25pbmc8L3RleHQ+CiAgICAKICAgIDxyZWN0IHg9IjQwIiB5PSIxNzUiIHdpZHRoPSI0MzIiIGhlaWdodD0iNDAiIHJ4PSI4IiBmaWxsPSJ1cmwoI2dyYWQpIiAvPgogICAgPHRleHQgeD0iNTAuMSUiIHk9IjIwMiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXdlaWdodD0iYm9sZCI+U3ludGhlc2l6ZWQgSW5zaWdodHM8L3RleHQ+CiAgICAKICAgIDxsaW5lIHgxPSIxMTUiIHkxPSIxNDAiIHgyPSIxMTUiIHkyPSIxNzUiIHN0cm9rZT0iI2MyY2RkNSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgogICAgPHBvbHlnb24gcG9pbnRzPSIxMTAsMTc1IDEyMCwxNzUgMTE1LDE4MyIgZmlsbD0iI2MyY2RkNSIgLz4KICAgIDxsaW5lIHgxPSIzNDUiIHkxPSIxNDAiIHgyPSIzNDUiIHkyPSIxNzUiIHN0cm9rZT0iI2MyY2RkNSIgc3Ryb2tlLXdpZHRoPSIyIiAvPgoJPHBvbHlnb24gcG9pbnRzPSIzNDAsMTc1IDE1MCwxNzUgMzQ1LDE4MyIgZmlsbD0iI2MyY2RkNSIgLz4KPC9zdmc+'
    },
    {
        title: '4. Receive Actionable Alerts',
        description: 'When a critical event is detected—like a competitor launching a new feature or a rival securing funding—you receive an immediate alert. Each alert includes a concise summary and a "Strategic Urgency Score" from 1-5.',
        image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iMjU2IiB2aWV3Qm94PSIwIDAgNTEyIDI1NiI+CiAgICA8cmVjdCB3aWR0aD0iNTEyIiBoZWlnaHQ9IjI1NiIgZmlsbD0iI2YxZjVmOSIgLz4KICAgIDx0ZXh0IHg9IjUwJSIgeT0iMjUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzE4MTgyZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC13ZWlnaHQ9ImJvbGQiPkFjdGlvbmFibGUgQWxlcnRzIEZlZWQ8L3RleHQ+CiAgICA8IS0tIEFsZXJ0IDE6IEhpZ2ggVXJnZW5jeSAtLT4KICAgIDxyZWN0IHg9IjIwIiB5PSI0NSIgd2lkdGg9IjQ3MiIgaGVpZ2h0PSI2MCIgcng9IjgiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2UyZThmOCIgLz4KICAgIDxyZWN0IHg9IjIwIiB5PSI0NSIgd2lkdGg9IjgiIGhlaWdodD0iNjAiIHJ4PSI4IDAgMCA4IiBmaWxsPSIjZWY0NDQ0IiAvPgogICAgPHRleHQgeD0iNDAiIHk9IjcwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSIjMWUyOTNiIj5JUCBBTEVSVDogQ29tcGV0aXRvciBGaWxlcyBOZXcgUGF0ZW50PC90ZXh0PgogICAgPHRleHQgeD0iNDAiIHk9IjkwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiM0NzU1NjkiPkFzdHJhUm9ib3RpY3MgaGFzIGZpbGVkIGEgcGF0ZW50IGZvciBhICJuZXVyYWwgbmV0d29yayBiYXNlZCBwYXRoZmluZGluZyIgYWxnb3JpdGhtLi4uPC90ZXh0PgogICAgPHRleHQgeD0iNDc1IiB5PSI2NSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjOTRhM2I4IiB0ZXh0LWFuY2hvcj0iZW5kIj5VcmdlbmN5PC90ZXh0PgogICAgPHRleHQgeD0iNDc1IiB5PSI4OCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjZWY0NDQ0IiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iYm9sZCI+NTwvdGV4dD4KICAgIDwhLS0gQWxlcnQgMjogTWVkaXVtIFVyZ2VuY3kgLS0+CiAgICA8cmVjdCB4PSIyMCIgeT0iMTE1IiB3aWR0aD0iNDcyIiBoZWlnaHQ9IjYwIiByeD0iOCIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjZTJlOGYwIiAvPgogICAgPHJlY3QgeD0iMjAiIHk9IjExNSIgd2lkdGg9IjgiIGhlaWdodD0iNjAiIHJ4PSI4IDAgMCA4IiBmaWxsPSIjZjk3MzE2IiAvPgogICAgPHRleHQgeD0iNDAiIHk9IjE0MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE0IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iIzFlMjkzYiI+RlVORElORyBBTEVSVDogVkMgSW52ZXN0cyBpbiBSaXZhbDwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIxNjAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzQ3NTU2OSI+Q3liZXJEeW5lIFNvbHV0aW9ucyBzZWN1cmVzICQyNU0gU2VyaWVzIEIgZnJvbSBFcXVpdHkgVmVudHVyZXMuLi48L3RleHQ+CiAgICA8dGV4dCB4PSI0NzUiIHk9IjEzNSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEwIiBmaWxsPSIjOTRhM2I4IiB0ZXh0LWFuY2hvcj0iZW5kIj5VcmdlbmN5PC90ZXh0PgogICAgPHRleHQgeD0iNDc1IiB5PSIxNTgiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2Y5NzMxNiIgdGV4dC1hbmNob3I9ImVuZCIgZm9udC13ZWlnaHQ9ImJvbGQiPjQ8L3RleHQ+CiAgICA8IS0tIEFsZXJ0IDM6IExvdyBVcmdlbmN5IC0tPgogICAgPHJlY3QgeD0iMjAiIHk9IjE4NSIgd2lkdGg9IjQ3MiIgaGVpZ2h0PSI2MCIgcng9IjgiIGZpbGw9IiNmZmYiIHN0cm9rZT0iI2UyZThmOCIgLz4KICAgIDxyZWN0IHg9IjIwIiB5PSIxODUiIHdpZHRoPSI4IiBoZWlnaHQ9IjYwIiByeD0iOCAwIDAgOCIgZmlsbD0iIzIyYzU1ZSIgLz4KICAgIDx0ZXh0IHg9IjQwIiB5PSIyMTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IiMxZTI5M2IiPk1BUktFVCBTSElGVCBBTEVSVDwvdGV4dD4KICAgIDx0ZXh0IHg9IjQwIiB5PSIyMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzQ3NTU2OSI+TmV3IHJlc2VhcmNoIHBhcGVyIG9uIFF1YW50dW0gQ29tcHV0aW5nIGZyb20gQ01VIHN1Z2dlc3RzIGEgc2hpZnQgaW4gbWF0ZXJpYWwgc2NpZW5jZS4uLjwvdGV4dD4KICAgIDx0ZXh0IHg9IjQ3NSIgeT0iMjA1IiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTAiIGZpbGw9IiM5NGEzYjgiIHRleHQtYW5jaG9yPSJlbmQiPlVyZ2VuY3k8L3RleHQ+CiAgICA8dGV4dCB4PSI0NzUiIHk9IjIyOCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMjJjNTVlIiB0ZXh0LWFuY2hvcj0iZW5kIiBmb250LXdlaWdodD0iYm9sZCI+MjwvdGV4dD4KPC9zdmc+'
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
