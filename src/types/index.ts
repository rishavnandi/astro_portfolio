// Centralize interfaces
export interface BaseProps {
    children?: React.ReactNode;
    className?: string;
}

export interface ContentProps extends BaseProps {
    title: string;
    description?: string;
    date?: string;
    url?: string;
    image?: string;
}

export interface ProjectProps extends ContentProps {
    gh?: string;
    type?: string;
    tags?: string[];
}

export interface TechnologyProps extends BaseProps {
    name: string;
    icon: React.ReactNode;
} 