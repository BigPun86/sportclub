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
import PaketePage from "./pages/PaketePage";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<><Navigation /><Navigate to="/sponsoring" replace /></>} />
        <Route path="/sponsoring" element={<><Navigation /><SponsoringV2Page /></>} />

        <Route path="/sponsoring-handoff" element={<SponsoringHandoffPage />} />

        <Route path="/sponsoring/club-500" element={<><Navigation /><Club500Page /></>} />
        <Route path="/sponsoring/pakete" element={<><Navigation /><PaketePage /></>} />

        <Route path="/mockup-generator" element={<><Navigation /><MockupGeneratorPage /></>} />

        <Route path="/renovierung" element={<><Navigation /><RenovierungPage /></>} />

        <Route path="*" element={<Navigate to="/sponsoring" replace />} />
      </Routes>
    </Router>
  );
}
