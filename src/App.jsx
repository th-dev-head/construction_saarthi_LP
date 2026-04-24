import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import ScrollToTop from './components/common/ScrollToTop';
import usePageTracking from './usePageTracking';
import { captureUTMParameters } from './utils/utm';

const App = () => {
  usePageTracking();
  const { pathname, search } = useLocation();

  useEffect(() => {
    captureUTMParameters();
  }, [search]);

  useEffect(() => {
    if (!location.state?.scrollTo) {
      window.scrollTo(0, 0);
    }
  }, [pathname, location.state]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
    </>
  );
};

export default App;
