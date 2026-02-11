import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

// Species Pages
import SpeciesIndexPage from './pages/SpeciesIndexPage';
import SpeciesDetailPage from './pages/SpeciesDetailPage';

// Disease Pages
import DiseaseIndexPage from './pages/DiseaseIndexPage';
import DiseaseDetailPage from './pages/DiseaseDetailPage';

function App() {
  return (
    <Layout>
      <Routes>
        {/* Home (Haupt-Datenbank mit Suche) */}
        <Route path="/" element={<HomePage />} />

        {/* Species Routes */}
        <Route path="/species" element={<SpeciesIndexPage />} />
        <Route path="/species/:slug" element={<SpeciesDetailPage />} />

        {/* Disease Routes */}
        <Route path="/diseases" element={<DiseaseIndexPage />} />
        <Route path="/disease/:slug" element={<DiseaseDetailPage />} />
        {/* Alias (falls du später Plural nutzt) */}
        <Route path="/diseases/:slug" element={<DiseaseDetailPage />} />

        {/* About Page */}
        <Route path="/about" element={<AboutPage />} />

        {/* 404 Not Found */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
              <div className="text-center">
                <h1 className="text-4xl font-black text-slate-300 mb-4">404</h1>
                <p className="text-slate-500 mb-6">Page not found</p>
                <a href="/" className="text-indigo-600 font-bold hover:underline">
                  Go Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
