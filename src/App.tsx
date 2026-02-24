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

// ─── Eager (tiny, always needed) ────────────────────────────────────────────
import NotFoundPage from './pages/NotFoundPage';

// ─── Lazy pages ─────────────────────────────────────────────────────────────
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

const ComparisonPage      = lazy(() => import('./pages/ComparisonPage'));

const SettingsPage        = lazy(() => import('./pages/SettingsPage'));
const ProfilePage         = lazy(() => import('./pages/ProfilePage'));
const FavoritesPage       = lazy(() => import('./pages/FavoritesPage'));

const AdminDashboard      = lazy(() => import('./pages/admin/AdminDashboard'));
const SpeciesManager      = lazy(() => import('./pages/admin/SpeciesManager'));
const UserManager         = lazy(() => import('./pages/admin/UserManager'));

// ─── Page loading fallback ───────────────────────────────────────────────────
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <Loader2 className="w-8 h-8 animate-spin text-indigo-500" />
  </div>
);

function App() {
  useEffect(() => {
    startReminderSystem();
  }, []);

  return (
    <ErrorBoundary>
      <ToastProvider>
        <NotificationPermissionBanner />
        <ScrollToTop />

        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<HomePage />} />

              {/* Auth */}
              <Route path="/login" element={<AuthPage />} />
              <Route path="/auth"  element={<AuthPage />} />

              {/* Legal */}
              <Route path="/terms-of-service" element={<TermsOfServicePage />} />
              <Route path="/privacy-policy"   element={<PrivacyPolicyPage />} />

              {/* Species */}
              <Route path="/species"      element={<SpeciesIndexPage />} />
              <Route path="/species/:slug" element={<SpeciesDetailPage />} />

              {/* Diseases */}
              <Route path="/diseases"      element={<DiseaseIndexPage />} />
              <Route path="/diseases/:slug" element={<DiseaseDetailPage />} />

              {/* Plants */}
              <Route path="/plants"      element={<PlantsIndexPage />} />
              <Route path="/plants/:slug" element={<PlantDetailPage />} />

              {/* Habitats */}
              <Route path="/habitats"      element={<HabitatsIndexPage />} />
              <Route path="/habitats/:slug" element={<HabitatsDetailPage />} />
              <Route path="/biotopes"      element={<HabitatsIndexPage />} />
              <Route path="/biotopes/:slug" element={<HabitatsDetailPage />} />

              {/* Knowledge */}
              <Route path="/knowledge"      element={<KnowledgeHubPage />} />
              <Route path="/knowledge/:slug" element={<KnowledgeDetailPage />} />

              {/* Protected: Tanks & Dashboard */}
              <Route path="/dashboard"       element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
              <Route path="/my-tanks"         element={<ProtectedRoute><MyTanksPage /></ProtectedRoute>} />
              <Route path="/my-tanks/:id"     element={<ProtectedRoute><TankDetailPage /></ProtectedRoute>} />

              {/* Tank Builder */}
              <Route path="/tank-builder" element={<TankBuilderPage />} />

              {/* Comparison */}
              <Route path="/compare" element={<ComparisonPage />} />

              {/* Protected: Profile & Settings */}
              <Route path="/settings"          element={<ProtectedRoute><SettingsPage /></ProtectedRoute>} />
              <Route path="/favorites"          element={<ProtectedRoute><FavoritesPage /></ProtectedRoute>} />
              <Route path="/profile"            element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
              <Route path="/profile/:userId"    element={<ProfilePage />} />

              {/* Protected: Admin */}
              <Route path="/admin"         element={<ProtectedRoute requireAdmin><AdminDashboard /></ProtectedRoute>} />
              <Route path="/admin/species" element={<ProtectedRoute requireAdmin><SpeciesManager /></ProtectedRoute>} />
              <Route path="/admin/users"   element={<ProtectedRoute requireAdmin><UserManager /></ProtectedRoute>} />

              {/* About */}
              <Route path="/about" element={<AboutPage />} />

              {/* 404 */}
              <Route path="*" element={<NotFoundPage />} />
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
