export interface KnowledgeArticle {
  id: string;
  slug: string;
  title: string;
  category: 'chemistry' | 'biology' | 'equipment' | 'maintenance' | 'diseases' | 'plants';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readingTime: number; // in minutes
  summary: string;
  content: {
    introduction: string;
    sections: KnowledgeSection[];
    keyTakeaways: string[];
    relatedTopics: string[]; // slugs of related articles
  };
  visuals?: {
    headerImage?: string;
    diagrams?: KnowledgeDiagram[];
  };
  references?: KnowledgeReference[];
  lastUpdated: string; // ISO date
}

export interface KnowledgeSection {
  heading: string;
  content: string;
  subsections?: {
    subheading: string;
    content: string;
  }[];
  diagram?: string; // reference to diagram id
  callout?: {
    type: 'tip' | 'warning' | 'info' | 'important';
    text: string;
  };
}

export interface KnowledgeDiagram {
  id: string;
  title: string;
  imageUrl: string;
  caption: string;
  credit?: string;
}

export interface KnowledgeReference {
  title: string;
  author?: string;
  url?: string;
  type: 'article' | 'book' | 'study' | 'video';
}
