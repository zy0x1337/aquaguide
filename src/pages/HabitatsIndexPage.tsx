import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import habitatsData from '../data/habitats.json';
import  PageHeader  from '../components/ui/PageHeader';
import  AnimatedTransition  from '../components/ui/AnimatedTransition';

export const HabitatsIndexPage: React.FC = () => {
  return (
    <AnimatedTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PageHeader 
          title="Explore the Wild" 
          description="Discover the natural habitats where your favorite aquarium species originate. Learn how they live in the wild to create better environments at home."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {habitatsData.map((habitat) => (
            <Link 
              key={habitat.id} 
              to={`/habitats/${habitat.id}`}
              className="group block rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
                <img 
                  src={habitat.imageUrl} 
                  alt={habitat.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">{habitat.title}</h3>
                  <p className="text-gray-200 text-sm line-clamp-2">{habitat.subtitle}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4">
                  {habitat.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                  Explore this habitat
                  <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedTransition>
  );
};
