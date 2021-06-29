import "./App.css";
import Navbar from "./Components/Navbar";
import SectionBanner from "./Components/SectionBanner";
import MyJob from "./Components/MyJob";
import CTA from "./Components/CTA";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ProjectList from "./Components/ProjectsList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SectionBanner />
      <MyJob />
      <CTA />
      <ProjectList />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
