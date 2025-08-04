import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import SponsoringPage from "./pages/SponsoringPage";
import JobsPage from "./pages/JobsPage";
import RenovierungPage from "./pages/RenovierungPage";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to="/sponsoring" replace />} />
        <Route path="/sponsoring" element={<SponsoringPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/renovierung" element={<RenovierungPage />} />
      </Routes>
    </Router>
  );
}
