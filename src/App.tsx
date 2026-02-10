import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import HomePage from './pages/HomePage';
import SpeciesDetailPage from './pages/SpeciesDetailPage';
import AboutPage from './pages/AboutPage';
import DiseaseDetailPage from './pages/DiseaseDetailPage'; // <--- NEU

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Fisch-Details */}
        <Route path="/species/:slug" element={<SpeciesDetailPage />} />
        
        {/* Krankheits-Details (Neue Route) */}
        <Route path="/disease/:slug" element={<DiseaseDetailPage />} />
        
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
