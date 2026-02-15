import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import ErrorBoundary from './components/error/ErrorBoundary';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// Species Pages
import SpeciesIndexPage from './pages/SpeciesIndexPage';
import SpeciesDetailPage from './pages/SpeciesDetailPage';

// Disease Pages
import DiseaseIndexPage from './pages/DiseaseIndexPage';
import DiseaseDetailPage from './pages/DiseaseDetailPage';

// 🌱 PLANT PAGES
import { PlantsIndexPage } from './pages/PlantsIndexPage';
import { PlantDetailPage } from './pages/PlantDetailPage';

// 🎨 TANK BUILDER
import { TankBuilderPage } from './pages/TankBuilderPage';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          {/* Home (Haupt-Datenbank mit Suche) */}
          <Route path="/" element={<HomePage />} />

          {/* Species Routes */}
          <Route path="/species" element={<SpeciesIndexPage />} />
          <Route path="/species/:slug" element={<SpeciesDetailPage />} />

          {/* Disease Routes */}
          <Route path="/diseases" element={<DiseaseIndexPage />} />
          <Route path="/diseases/:slug" element={<DiseaseDetailPage />} />

          {/* 🌱 Plant Routes */}
          <Route path="/plants" element={<PlantsIndexPage />} />
          <Route path="/plants/:slug" element={<PlantDetailPage />} />

          {/* 🎨 Tank Builder */}
          <Route path="/tank-builder" element={<TankBuilderPage />} />

          {/* About Page */}
          <Route path="/about" element={<AboutPage />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
