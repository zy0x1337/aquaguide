import { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { SEOHead } from '../../components/seo/SEOHead';
import { SpeciesModal } from '../../components/admin/SpeciesModal';

const SpeciesManager = () => {
  const [species, setSpecies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [editingSpecies, setEditingSpecies] = useState<any>(null);

  useEffect(() => {
    loadSpecies();
  }, []);

  const loadSpecies = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('species')
      .select('*')
      .order('created_at', { ascending: false });
    setSpecies(data || []);
    setLoading(false);
  };

  const deleteSpecies = async (id: string) => {
    if (!confirm('Are you sure you want to delete this species?')) return;
    await supabase.from('species').delete().eq('id', id);
    loadSpecies();
  };

  const openAddModal = () => {
    setEditingSpecies(null);
    setModalOpen(true);
  };

  const openEditModal = (species: any) => {
    setEditingSpecies(species);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setEditingSpecies(null);
  };

  const handleModalSuccess = () => {
    loadSpecies();
  };

  const filteredSpecies = species.filter(s => {
    const matchesSearch = s.common_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.scientific_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || s.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <SEOHead title="Species Manager - Admin" description="Manage fish and plant species." />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">Species Manager</h1>
            <p className="text-gray-600 dark:text-gray-400">{filteredSpecies.length} species in database</p>
          </div>
          <button 
            onClick={openAddModal}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold shadow-lg transition-all"
          >
            <Plus className="w-5 h-5" />
            Add Species
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search species..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="fish">Fish</option>
              <option value="plant">Plants</option>
              <option value="invertebrate">Invertebrates</option>
              <option value="coral">Corals</option>
            </select>
          </div>
        </div>

        {/* Species List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : filteredSpecies.length === 0 ? (
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 p-12 text-center">
            <p className="text-gray-600 dark:text-gray-400">No species found. Add your first one!</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSpecies.map(s => (
              <div key={s.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-md transition-all">
                {s.image_url && (
                  <div className="relative">
                    <img src={s.image_url} alt={s.common_name} className="w-full h-48 object-cover" />
                    {s.image_credit && (
                      <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded backdrop-blur-sm">
                        {s.image_credit}
                      </div>
                    )}
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">{s.common_name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">{s.scientific_name}</p>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-indigo-100 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 rounded-full">
                      {s.type}
                    </span>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button 
                      onClick={() => openEditModal(s)}
                      className="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center gap-1"
                    >
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteSpecies(s.id)}
                      className="px-3 py-2 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 rounded-lg font-semibold text-sm transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <SpeciesModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        onSuccess={handleModalSuccess}
        editingSpecies={editingSpecies}
      />
    </div>
  );
};

export default SpeciesManager;
