import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { SEOHead } from '../components/seo/SEOHead';
import { ArrowLeft, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsOfServicePage = () => {
  return (
    <PageTransition>
      <SEOHead 
        title="Terms of Service - AquaGuide"
        description="Terms of Service and usage guidelines for AquaGuide."
      />
      
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/auth"
              className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
              <span className="text-sm font-semibold">Back to Sign In</span>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-slate-600 dark:text-slate-400">
              Last updated: February 23, 2026
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                By accessing and using AquaGuide, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                2. Use License
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Permission is granted to temporarily access AquaGuide for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                3. User Accounts
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms. You are responsible for safeguarding your password and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                4. Content Guidelines
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Users may contribute content such as tank setups, fish care tips, and community posts. By submitting content, you grant AquaGuide a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content. You agree not to post content that:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-400">
                <li>Is illegal, harmful, or offensive</li>
                <li>Infringes on intellectual property rights</li>
                <li>Contains spam or misleading information</li>
                <li>Violates any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                5. Disclaimer
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                The information provided on AquaGuide is for general informational purposes only. While we strive for accuracy, we make no representations or warranties about the completeness, accuracy, reliability, suitability or availability of the information. Any reliance you place on such information is strictly at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                6. Limitation of Liability
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                AquaGuide shall not be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use, the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                7. Changes to Terms
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                8. Contact Us
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:support@aquaguide.com" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                  support@aquaguide.com
                </a>
              </p>
            </section>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Also see our{' '}
              <Link to="/privacy-policy" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
                Privacy Policy
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default TermsOfServicePage;
