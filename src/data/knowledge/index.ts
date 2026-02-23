import { KnowledgeArticle } from '../../types/knowledge';
import { nitrogenCycle } from './nitrogen-cycle';
import { tannins } from './tannins';
import { algaeInAquarium } from './algae-in-aquarium';
import { aquariumCyclingPhase } from './aquarium-cycling-phase';
import { waterParametersCo2 } from './water-parameters-co2';
import { aquariumFilterTypes } from './aquarium-filter-types';
import { fishCompatibilityGuide } from './fish-compatibility-guide';
import { plantedTankSetup } from './planted-tank-setup';

export const allKnowledgeArticles: KnowledgeArticle[] = [
  nitrogenCycle,
  tannins,
  algaeInAquarium,
  aquariumCyclingPhase,
  waterParametersCo2,
  aquariumFilterTypes,
  fishCompatibilityGuide,
  plantedTankSetup
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
