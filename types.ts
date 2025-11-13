
export interface NavLink {
    id: string;
    label: string;
}

export interface ComparisonItem {
    label: string;
    value: string;
}

export interface ComparisonData {
    title: string;
    color: string;
    items: ComparisonItem[];
}
