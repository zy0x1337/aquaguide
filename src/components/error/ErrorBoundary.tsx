// src/components/error/ErrorBoundary.tsx

import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ error, errorInfo });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/20 flex items-center justify-center px-6">
          <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border-2 border-rose-200 p-8">
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mb-6">
                <AlertTriangle className="w-10 h-10 text-rose-600" />
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-slate-900 mb-4">
                Oops! Something went wrong
              </h1>

              {/* Description */}
              <p className="text-slate-600 mb-8 leading-relaxed">
                We encountered an unexpected error. Don't worry, your data is safe. 
                Try refreshing the page or return to the homepage.
              </p>

              {/* Error Details (Development Only) */}
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <div className="w-full bg-slate-50 rounded-xl p-4 mb-6 text-left">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Error Details (Dev Mode)
                  </p>
                  <pre className="text-xs text-rose-700 overflow-auto">
                    {this.state.error.toString()}
                  </pre>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="text-xs text-slate-600 cursor-pointer hover:text-slate-900">
                        Component Stack
                      </summary>
                      <pre className="text-xs text-slate-600 mt-2 overflow-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                  onClick={this.handleReset}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors"
                >
                  <RefreshCw className="w-5 h-5" />
                  Refresh Page
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold rounded-xl transition-colors"
                >
                  <Home className="w-5 h-5" />
                  Go Home
                </button>
              </div>

              {/* Support */}
              <p className="text-xs text-slate-500 mt-8">
                If this problem persists, please contact support or report the issue on GitHub.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
