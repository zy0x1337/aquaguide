import { Slider } from '../ui/Slider';
import { CheckboxGroup } from '../ui/CheckboxGroup';
import { SearchFilters } from '../../hooks/useSpeciesSearch';
import { EthologyTag } from '../../types/species';

interface FilterPanelProps {
  filters: SearchFilters;
  setFilters: (filters: SearchFilters) => void;
}

export const FilterPanel = ({ filters, setFilters }: FilterPanelProps) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 space-y-6 sticky top-24">
      {/* Difficulty */}
      <FilterSection title="Difficulty">
        <CheckboxGroup
          options={['beginner', 'medium', 'intermediate', 'expert']}
          selected={filters.difficulty}
          onChange={(difficulty) => setFilters({ ...filters, difficulty })}
        />
      </FilterSection>

      {/* Environment */}
      <FilterSection title="Environment">
        <CheckboxGroup
          options={['freshwater', 'saltwater', 'brackish']}
          selected={filters.environment}
          onChange={(environment) => setFilters({ ...filters, environment })}
        />
      </FilterSection>

      {/* Tank Size */}
      <FilterSection title="Tank Size (Liters)">
        <Slider
          min={0}
          max={500}
          value={[filters.minTankSize, filters.maxTankSize]}
          onChange={([minTankSize, maxTankSize]) => 
            setFilters({ ...filters, minTankSize, maxTankSize })
          }
          formatLabel={(v) => `${v}L`}
        />
      </FilterSection>

      {/* Temperature */}
      <FilterSection title="Temperature (°C)">
        <Slider
          min={15}
          max={35}
          value={filters.tempRange}
          onChange={(tempRange) => setFilters({ ...filters, tempRange: tempRange as [number, number] })}
          formatLabel={(v) => `${v}°C`}
        />
      </FilterSection>

      {/* pH Range */}
      <FilterSection title="pH Range">
        <Slider
          min={4.0}
          max={9.0}
          step={0.1}
          value={filters.phRange}
          onChange={(phRange) => setFilters({ ...filters, phRange: phRange as [number, number] })}
          formatLabel={(v) => v.toFixed(1)}
        />
      </FilterSection>

      {/* Diet */}
      <FilterSection title="Diet">
        <CheckboxGroup
          options={['omnivore', 'herbivore', 'carnivore']}
          selected={filters.diet}
          onChange={(diet) => setFilters({ ...filters, diet })}
        />
      </FilterSection>

      {/* Behavior Tags - WITH PROPER TYPING */}
      <FilterSection title="Behavior">
        <CheckboxGroup
          options={[
            'peaceful', 
            'schooling', 
            'bottom_dweller', 
            'surface_dweller',
            'nocturnal',
            'algae_eater',
            'jumper'
          ]}
          selected={filters.tags}
          onChange={(tags) => setFilters({ ...filters, tags: tags as EthologyTag[] })}
        />
      </FilterSection>
    </div>
  );
};

const FilterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">{title}</h3>
    {children}
  </div>
);
