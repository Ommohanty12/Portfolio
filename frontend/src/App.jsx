import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import Messages from "./pages/Messages";
const Home = lazy(() => import('./pages/Home'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/message" element={<Messages />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative bg-darker text-white font-sans selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-grow z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <Suspense fallback={<LoadingScreen />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
