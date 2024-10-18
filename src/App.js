import { LandingPage } from "./views/landingPage";
import { Videos } from "./views/videos";
import { Studies } from "./views/studies";
import { Testimonials } from "./views/testimonials";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound } from "./views/notFound";
import "./App.css";
import { AboutUs } from "./views/aboutUs";
import { BeforeAfter } from "./views/beforeAfter";
import { ContactPage } from "./views/contactPage";


function App() {
  return (
    <div className="overflow-hidden">
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Studies" element={<Studies />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/About-Us" element={<AboutUs />} />
        <Route path="/before-and-after" element={<BeforeAfter />} />
        <Route path="/contact-form" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
