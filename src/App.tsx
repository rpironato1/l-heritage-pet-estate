import React, { useState, Suspense, lazy } from 'react';
import { Navbar } from './features/layout/Navbar';
import { Hero } from './features/hero/Hero';
import { Services } from './features/services/Services';
import { ExclusiveAccess } from './features/membership/ExclusiveAccess';
import { Footer } from './features/layout/Footer';
import { SmoothScrollProvider } from './features/utils/AnimationContext';
import { SERVICE_DETAILS } from './features/services/serviceData';

// --- Lazy Load Components (Code Splitting) ---
// We import these dynamically so the browser only downloads them when needed.
const LoginPage = lazy(() => import('./features/auth/LoginPage').then(module => ({ default: module.LoginPage })));
const ContactPage = lazy(() => import('./features/contact/ContactPage').then(module => ({ default: module.ContactPage })));
const TermsOfService = lazy(() => import('./features/legal/LegalPages').then(module => ({ default: module.TermsOfService })));
const PrivacyPolicy = lazy(() => import('./features/legal/LegalPages').then(module => ({ default: module.PrivacyPolicy })));
const EthicsCode = lazy(() => import('./features/legal/LegalPages').then(module => ({ default: module.EthicsCode })));
const RequestInvitationPage = lazy(() => import('./features/invitation/RequestInvitationPage').then(module => ({ default: module.RequestInvitationPage })));
const ExploreEstatePage = lazy(() => import('./features/estate/ExploreEstatePage').then(module => ({ default: module.ExploreEstatePage })));
const ServiceDetailPage = lazy(() => import('./features/services/ServiceDetailPage').then(module => ({ default: module.ServiceDetailPage })));

// State-based router types
type Page = 
    | 'home' 
    | 'login' 
    | 'contact' 
    | 'terms' 
    | 'privacy' 
    | 'ethics'
    | 'service-spa'
    | 'service-gastronomy'
    | 'service-suites'
    | 'request-invitation'
    | 'explore-estate';

// --- Loading Fallback ---
const LuxuryLoader = () => (
    <div className="min-h-screen flex items-center justify-center bg-estate-50">
        <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-2 border-estate-200 border-t-gold-400 rounded-full animate-spin" />
            <span className="font-serif text-estate-400 text-sm tracking-[0.2em] uppercase animate-pulse">L'Héritage</span>
        </div>
    </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (page: string) => {
    if (page === currentPage) return;
    
    setIsTransitioning(true);
    
    // Smooth transition logic
    setTimeout(() => {
        setCurrentPage(page as Page);
        window.scrollTo(0, 0);
        
        setTimeout(() => {
            setIsTransitioning(false);
        }, 100); 
    }, 500);
  };

  const renderContent = () => {
      switch (currentPage) {
          case 'login':
              return <LoginPage onNavigate={navigate} />;
          case 'contact':
              return <ContactPage />;
          case 'terms':
              return <TermsOfService />;
          case 'privacy':
              return <PrivacyPolicy />;
          case 'ethics':
              return <EthicsCode />;
          
          case 'request-invitation':
              return <RequestInvitationPage onNavigate={navigate} />;
          case 'explore-estate':
              return <ExploreEstatePage onNavigate={navigate} />;

          case 'service-spa':
              return <ServiceDetailPage data={SERVICE_DETAILS['spa']} onNavigate={navigate} />;
          case 'service-gastronomy':
              return <ServiceDetailPage data={SERVICE_DETAILS['gastronomy']} onNavigate={navigate} />;
          case 'service-suites':
              return <ServiceDetailPage data={SERVICE_DETAILS['suites']} onNavigate={navigate} />;
          
          case 'home':
          default:
              // Home components are kept eager loaded for instant first paint impact
              return (
                  <>
                    <div id="estate"><Hero onNavigate={navigate} /></div>
                    <div id="services"><Services onNavigate={navigate} /></div>
                    <div id="membership"><ExclusiveAccess /></div>
                    <section className="py-24 text-center bg-estate-100">
                        <div className="max-w-4xl mx-auto px-6">
                            <h3 className="font-serif text-3xl md:text-5xl text-estate-900 mb-8 leading-tight">
                                "A grandeza de uma nação e seu progresso moral podem ser julgados pela forma como seus animais são tratados."
                            </h3>
                            <span className="font-sans text-sm tracking-[0.2em] uppercase text-gold-600">— Mahatma Gandhi</span>
                        </div>
                    </section>
                  </>
              );
      }
  };

  return (
    <SmoothScrollProvider>
        <div className="min-h-screen bg-estate-50 selection:bg-gold-200 flex flex-col">
        <Navbar onNavigate={navigate} activePage={currentPage} />
        
        <main 
            className={`flex-grow transition-opacity duration-500 ease-in-out ${
                isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
        >
            <Suspense fallback={<LuxuryLoader />}>
                {renderContent()}
            </Suspense>
        </main>

        {currentPage !== 'login' && <Footer onNavigate={navigate} />}
        </div>
    </SmoothScrollProvider>
  );
};

export default App;