import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import RenovierungPage from "./pages/RenovierungPage";
import SponsoringV2Page from "./pages/SponsoringV2Page";
import SponsoringHandoffPage from "./pages/SponsoringHandoffPage";
import MockupGeneratorPage from "./pages/MockupGeneratorPage";
import Club500Page from "./pages/Club500Page";
import SpielerPartnerPage from "./pages/SpielerPartnerPage";
import WidgetPage from "./pages/WidgetPage";
import "./App.css";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // Ziel-Element kann wegen nachladender Bilder verzögert erscheinen -
    // kurz nachfassen, bis es da ist, dann dorthin scrollen.
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let retryTimer = 0;
    let correctionTimer = 0;
    const scrollToTarget = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ block: "start" });
        // Falls Bilder oberhalb noch nachladen, einmal nachkorrigieren.
        correctionTimer = window.setTimeout(
          () => el.scrollIntoView({ block: "start" }),
          400,
        );
      } else if (tries++ < 20) {
        retryTimer = window.setTimeout(scrollToTarget, 100);
      }
    };
    scrollToTarget();
    return () => {
      window.clearTimeout(retryTimer);
      window.clearTimeout(correctionTimer);
    };
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navigation />
              <Navigate to="/sponsoring" replace />
            </>
          }
        />
        <Route
          path="/sponsoring"
          element={
            <>
              <Navigation />
              <SponsoringV2Page />
            </>
          }
        />

        <Route path="/sponsoring-handoff" element={<SponsoringHandoffPage />} />

        <Route path="/widget" element={<WidgetPage />} />

        <Route
          path="/sponsoring/club-500"
          element={
            <>
              <Navigation />
              <Club500Page />
            </>
          }
        />
        <Route
          path="/sponsoring/pakete"
          element={<Navigate to="/sponsoring#angebot" replace />}
        />
        <Route
          path="/sponsoring/spielerpatenschaft"
          element={
            <>
              <Navigation />
              <SpielerPartnerPage />
            </>
          }
        />

        <Route
          path="/mockup-generator"
          element={
            <>
              <Navigation />
              <MockupGeneratorPage />
            </>
          }
        />

        <Route
          path="/renovierung"
          element={
            <>
              <Navigation />
              <RenovierungPage />
            </>
          }
        />

        <Route path="*" element={<Navigate to="/sponsoring" replace />} />
      </Routes>
    </Router>
  );
}
