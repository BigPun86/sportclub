import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SponsoringPage from "./pages/SponsoringPage";
import JobsPage from "./pages/JobsPage";
import RenovierungPage from "./pages/RenovierungPage";
import "./App.css";

export default function App() {
  return (
    <Router basename="/sportclub/">
      <Navigation />
      <Routes>
        <Route path="/" element={<SponsoringPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/renovierung" element={<RenovierungPage />} />
      </Routes>
    </Router>
  );
}
