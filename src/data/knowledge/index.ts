import { KnowledgeArticle } from '../../types/knowledge';
import { nitrogenCycle } from './nitrogen-cycle';
import { tannins } from './tannins';

export const allKnowledgeArticles: KnowledgeArticle[] = [
  nitrogenCycle,
  tannins,
];

export const getArticleBySlug = (slug: string): KnowledgeArticle | undefined => {
  return allKnowledgeArticles.find(article => article.slug === slug);
};

export const getArticlesByCategory = (category: KnowledgeArticle['category']): KnowledgeArticle[] => {
  return allKnowledgeArticles.filter(article => article.category === category);
};

export const getArticlesByDifficulty = (difficulty: KnowledgeArticle['difficulty']): KnowledgeArticle[] => {
  return allKnowledgeArticles.filter(article => article.difficulty === difficulty);
};
