import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { SEOHead } from '../components/seo/SEOHead';
import { Loader2 } from 'lucide-react';

// Import your existing component (we'll use it as-is, just swap data source)
import SpeciesDetailPageOriginal from './SpeciesDetailPageStatic';

const SpeciesDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [species, setSpecies] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSpecies() {
      if (!slug) return;
      
      setLoading(true);
      setError(null);
      
      try {
        const { data, error: fetchError } = await supabase
          .from('species')
          .select('*')
          .eq('slug', slug)
          .eq('type', 'fish')
          .single();

        if (fetchError) throw fetchError;
        if (!data) throw new Error('Species not found');

        // Transform database data to match old Species type structure
        const transformedData = {
          id: data.id,
          slug: data.slug,
          imageUrl: data.image_url,
          imageCredit: data.image_credit,
          funFact: data.fun_fact,
          
          taxonomy: {
            scientificName: data.scientific_name,
            commonName: data.common_name,
            family: data.family,
            origin: data.origin,
            region: data.region,
            biotope: data.biotope,
          },
          
          visuals: {
            iconShape: data.icon_shape || 'compressed',
            adultSizeCM: data.adult_size_cm?.max || data.adult_size_cm?.min || 5,
            color: data.color,
          },
          
          environment: {
            type: data.type === 'fish' ? 'freshwater' : 'saltwater',
            minTankSizeLiters: data.min_tank_size_liters || 0,
            tempC: data.temp_range_c || { min: 22, max: 26 },
            ph: data.ph_range || { min: 6.5, max: 7.5 },
            gh: data.hardness_range_dgh,
            flow: data.flow || 'medium',
            substrate: data.substrate || 'any',
            swimmingZone: data.swimming_zone,
            spaceNeeds: data.space_needs,
            bioloadMultiplier: data.bioload_multiplier,
          },
          
          habitat: {
            planting: data.planting || 'medium',
            plantingNotes: data.planting_notes || '',
            hardscape: data.hardscape || [],
          },
          
          behavior: {
            tags: data.behavior_tags || [],
            minGroupSize: data.min_group_size || 1,
            description: data.behavior_description || data.description,
            temperament: data.temperament,
            compatibility: {
              goodMates: data.good_mates || [],
              badMates: data.bad_mates || [],
              notes: data.compatibility_notes,
              rules: data.compatibility_rules,
              idealTankmates: data.ideal_tankmates,
            },
            aggressionLevel: data.aggression_level,
            activity: data.activity,
            socialStructure: data.social_structure,
            finNipping: data.fin_nipping,
          },
          
          care: {
            difficulty: data.difficulty || 'beginner',
            diet: data.diet || 'omnivore',
            effort: data.effort || 'medium',
            cost: data.cost || 'medium',
            specialRequirements: data.special_requirements || [],
            proTips: data.pro_tips,
            commonMistakes: data.common_mistakes,
            feeding: data.feeding,
            maintenance: data.maintenance,
            equipment: data.equipment,
          },
          
          health: {
            lifespanYears: data.lifespan_years?.max || data.lifespan_years?.min || 3,
            commonDiseases: data.common_diseases || [],
            sensitivities: data.sensitivities || [],
          },
          
          scientificContext: {
            wildHabitat: data.wild_habitat,
            sexualDimorphism: data.sexual_dimorphism,
            variants: data.variants,
          },
          
          breeding: {
            method: data.breeding_method,
            difficulty: data.breeding_difficulty,
            trigger: data.breeding_trigger,
            fryCare: data.fry_care,
            notes: data.breeding_notes,
          },
          
          experienceData: data.experience_data,
        };

        setSpecies(transformedData);
      } catch (err: any) {
        console.error('Error fetching species:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchSpecies();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-indigo-600 animate-spin mx-auto mb-4" />
          <p className="text-slate-600 font-semibold">Loading species data...</p>
        </div>
      </div>
    );
  }

  if (error || !species) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
        <div className="text-center max-w-md mx-auto bg-white rounded-2xl p-12 shadow-lg border border-slate-200">
          <div className="w-24 h-24 bg-slate-200 rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl font-bold text-slate-400">404</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Species Not Found</h1>
          <p className="text-slate-600 mb-6">{error || 'This species does not exist in our database.'}</p>
          <Link to="/species" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold">
            ← Return to Database
          </Link>
        </div>
      </div>
    );
  }

  // Render with the original component, passing transformed data
  return <SpeciesDetailPageOriginal species={species} />;
};

export default SpeciesDetailPage;
