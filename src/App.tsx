import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { ComparisonBar } from './components/comparison/ComparisonBar';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import ErrorBoundary from './components/error/ErrorBoundary';
import { ToastProvider } from './contexts/ToastContext';
import PWAUpdatePrompt from './components/pwa/PWAUpdatePrompt';
import NotificationPermissionBanner from './components/notifications/NotificationPermissionBanner';
import { startReminderSystem } from './lib/notifications';
import { Loader2 } from 'lucide-react';

import NotFoundPage from './pages/NotFoundPage';

const HomePage            = lazy(() => import('./pages/HomePage'));
const AboutPage           = lazy(() => import('./pages/AboutPage'));
const AuthPage            = lazy(() => import('./pages/AuthPage'));
const TermsOfServicePage  = lazy(() => import('./pages/TermsOfServicePage'));
const PrivacyPolicyPage   = lazy(() => import('./pages/PrivacyPolicyPage'));

const SpeciesIndexPage    = lazy(() => import('./pages/SpeciesIndexPage'));
const SpeciesDetailPage   = lazy(() => import('./pages/SpeciesDetailPage'));

const DiseaseIndexPage    = lazy(() => import('./pages/DiseaseIndexPage'));
const DiseaseDetailPage   = lazy(() => import('./pages/DiseaseDetailPage'));

const PlantsIndexPage     = lazy(() => import('./pages/PlantsIndexPage').then(m => ({ default: m.PlantsIndexPage })));
const PlantDetailPage     = lazy(() => import('./pages/PlantDetailPage').then(m => ({ default: m.PlantDetailPage })));

const HabitatsIndexPage   = lazy(() => import('./pages/HabitatsIndexPage').then(m => ({ default: m.HabitatsIndexPage })));
const HabitatsDetailPage  = lazy(() => import('./pages/HabitatsDetailPage').then(m => ({ default: m.HabitatsDetailPage })));

const KnowledgeHubPage    = lazy(() => import('./pages/KnowledgeHubPage'));
const KnowledgeDetailPage = lazy(() => import('./pages/KnowledgeDetailPage'));

const DashboardPage       = lazy(() => import('./pages/DashboardPage'));
const MyTanksPage         = lazy(() => import('./pages/MyTanksPage'));
const TankDetailPage      = lazy(() => import('./pages/TankDetailPage'));
const TankBuilderPage     = lazy(() => import('./pages/TankBuilderPage').then(m => ({ default: m.TankBuilderPage })));
const PublicTankPage      = lazy(() => import('./pages/PublicTankPage'));

const ComparisonPage      = lazy(() => import('./pages/ComparisonPage'));

const SettingsPage        = lazy(() => import('./pages/SettingsPage'));
const ProfilePage         = lazy(() => import('./pages/ProfilePage'));
const FavoritesPage       = lazy(() => import('./pages/FavoritesPage'));

const AdminDashboard      = lazy(() => import('./pages/admin/AdminDashboard'));
const SpeciesManager      = lazy(() => import('./pages/admin/SpeciesManager'));
const UserManager         = lazy(() => import('./pages/admin/UserManager'));

const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
  </div>
);

function App() {
  useEffect(() => { startReminderSystem(); }, []);

  return (
    <ErrorBoundary>
      <ToastProvider>
        <NotificationPermissionBanner />
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />

              <Route path="/login" element={<AuthPage />} />
              <Route path="/auth"  element={<AuthPage />} />

              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/privacy-policy"   element={<PrivacyPolicyPage />} />

              <Route path="/species"       element={<SpeciesIndexPage />} />
              <Route path="/species/:slug" element={<SpeciesDetailPage />} />

              <Route path="/diseases"       element={<DiseaseIndexPage />} />
              <Route path="/diseases/:slug" element={<DiseaseDetailPage />} />

              <Route path="/plants"       element={<PlantsIndexPage />} />
              <Route path="/plants/:slug" element={<PlantDetailPage />} />

              <Route path="/habitats"       element={<HabitatsIndexPage />} />
              <Route path="/habitats/:slug" element={<HabitatsDetailPage />} />
              <Route path="/biotopes"       element={<HabitatsIndexPage />} />
              <Route path="/biotopes/:slug" element={<HabitatsDetailPage />} />

              <Route path="/knowledge"       element={<KnowledgeHubPage />} />
              <Route path="/knowledge/:slug" element={<KnowledgeDetailPage />} />

              {/* Public tank profiles – no auth required */}
              <Route path="/tanks/:slug" element={<PublicTankPage />} />

              <Route path="/dashboard"   element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
              <Route path="/my-tanks"    element={<ProtectedRoute><MyTanksPage /></ProtectedRoute>} />
              <Route path="/my-tanks/:id" element={<ProtectedRoute><TankDetailPage /></ProtectedRoute>} />

              <Route path="/tank-builder" element={<TankBuilderPage />} />

              <Route path="/compare" element={<ComparisonPage />} />

              <Route path="/settings"       element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
              <Route path="/favorites"      element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
              <Route path="/profile"        element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="/profile/:userId" element={<ProfilePage />} />

              <Route path="/admin"         element={<ProtectedRoute requireAdmin><AdminDashboard /></ProtectedRoute>} />
              <Route path="/admin/species" element={<ProtectedRoute requireAdmin><SpeciesManager /></ProtectedRoute>} />
              <Route path="/admin/users"   element={<ProtectedRoute requireAdmin><UserManager /></ProtectedRoute>} />

              <Route path="/about" element={<AboutPage />} />
              <Route path="*"      element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <ComparisonBar />
        </Layout>
        <PWAUpdatePrompt />
      </ToastProvider>
    </ErrorBoundary>
  );
}

export default App;
