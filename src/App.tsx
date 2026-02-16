import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ComparisonBar } from './components/comparison/ComparisonBar';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import ErrorBoundary from './components/error/ErrorBoundary';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// Auth
import AuthPage from './pages/AuthPage';

// Species Pages
import SpeciesIndexPage from './pages/SpeciesIndexPage';
import SpeciesDetailPage from './pages/SpeciesDetailPage';

// Disease Pages
import DiseaseIndexPage from './pages/DiseaseIndexPage';
import DiseaseDetailPage from './pages/DiseaseDetailPage';

// 🌱 PLANT PAGES
import { PlantsIndexPage } from './pages/PlantsIndexPage';
import { PlantDetailPage } from './pages/PlantDetailPage';

// 🐠 MY TANKS
import MyTanksPage from './pages/MyTanksPage';

// 🎨 TANK BUILDER
import { TankBuilderPage } from './pages/TankBuilderPage';

// ⚖️ COMPARISON
import ComparisonPage from './pages/ComparisonPage';

// 👑 ADMIN PAGES
import AdminDashboard from './pages/admin/AdminDashboard';
import SpeciesManager from './pages/admin/SpeciesManager';
import UserManager from './pages/admin/UserManager';

function App() {
  return (
    <ErrorBoundary>
      <Layout>
        <Routes>
          {/* Home (Haupt-Datenbank mit Suche) */}
          <Route path="/" element={<HomePage />} />

          {/* Auth */}
          <Route path="/login" element={<AuthPage />} />

          {/* Species Routes */}
          <Route path="/species" element={<SpeciesIndexPage />} />
          <Route path="/species/:slug" element={<SpeciesDetailPage />} />

          {/* Disease Routes */}
          <Route path="/diseases" element={<DiseaseIndexPage />} />
          <Route path="/diseases/:slug" element={<DiseaseDetailPage />} />

          {/* 🌱 Plant Routes */}
          <Route path="/plants" element={<PlantsIndexPage />} />
          <Route path="/plants/:slug" element={<PlantDetailPage />} />

          {/* 🐠 My Tanks (Protected) */}
          <Route path="/my-tanks" element={<ProtectedRoute><MyTanksPage /></ProtectedRoute>} />

          {/* 🎨 Tank Builder */}
          <Route path="/tank-builder" element={<TankBuilderPage />} />

          {/* ⚖️ Comparison Tool */}
          <Route path="/compare" element={<ComparisonPage />} />

          {/* 👑 Admin Routes (Protected) */}
          <Route path="/admin" element={<ProtectedRoute requireAdmin><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/species" element={<ProtectedRoute requireAdmin><SpeciesManager /></ProtectedRoute>} />
          <Route path="/admin/users" element={<ProtectedRoute requireAdmin><UserManager /></ProtectedRoute>} />

          {/* About Page */}
          <Route path="/about" element={<AboutPage />} />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        
        {/* Global Comparison Bar */}
        <ComparisonBar />
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
