import "./App.css";

import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import OverviewSection from "./components/OverviewSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <OverviewSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
