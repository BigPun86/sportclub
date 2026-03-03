import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import SponsoringPage from "./pages/SponsoringPage";
import SponsoringV2Page from "./pages/SponsoringV2Page";
import SponsoringHandoffPage from "./pages/SponsoringHandoffPage";
import JobsPage from "./pages/JobsPage";
import RenovierungPage from "./pages/RenovierungPage";
import "./App.css";

// Feature Flags
const ENABLE_RENOVIERUNG = false;

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Canonical Sponsoring (V2) */}
        <Route path="/" element={<><Navigation /><Navigate to="/sponsoring" replace /></>} />
        <Route path="/sponsoring" element={<><Navigation /><SponsoringV2Page /></>} />

        {/* Backwards compatibility */}
        <Route
          path="/sponsoring-v2"
          element={<Navigate to="/sponsoring" replace />}
        />

        {/* Legacy / Archiv (V1) */}
        <Route path="/sponsoring-v1" element={<><Navigation /><SponsoringPage /></>} />

        {/* Handoff - versteckte Route ohne Navigation */}
        <Route path="/sponsoring-handoff" element={<SponsoringHandoffPage />} />

        <Route path="/jobs" element={<><Navigation /><JobsPage /></>} />
        {ENABLE_RENOVIERUNG && (
          <Route path="/renovierung" element={<><Navigation /><RenovierungPage /></>} />
        )}

        {/* Catch-all: unbekannte Routen zur Startseite */}
        <Route path="*" element={<Navigate to="/sponsoring" replace />} />
      </Routes>
    </Router>
  );
}
