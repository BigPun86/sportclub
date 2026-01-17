import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import SponsoringPage from "./pages/SponsoringPage";
import SponsoringV2Page from "./pages/SponsoringV2Page";
import JobsPage from "./pages/JobsPage";
import RenovierungPage from "./pages/RenovierungPage";
import "./App.css";

// Feature Flags
const ENABLE_RENOVIERUNG = false;

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        {/* Canonical Sponsoring (V2) */}
        <Route path="/" element={<Navigate to="/sponsoring" replace />} />
        <Route path="/sponsoring" element={<SponsoringV2Page />} />

        {/* Backwards compatibility */}
        <Route
          path="/sponsoring-v2"
          element={<Navigate to="/sponsoring" replace />}
        />

        {/* Legacy / Archiv (V1) */}
        <Route path="/sponsoring-v1" element={<SponsoringPage />} />

        <Route path="/jobs" element={<JobsPage />} />
        {ENABLE_RENOVIERUNG && (
          <Route path="/renovierung" element={<RenovierungPage />} />
        )}
      </Routes>
    </Router>
  );
}
