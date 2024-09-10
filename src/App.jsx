import Communication from "./components/Communication";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Management from "./components/Management";
import Operation from "./components/Operation";
import Prepcohort from "./components/Prepcohort";
import Role from "./components/Role";
import School from "./components/School";
import Tracking from "./components/Tracking";
import CustomApp from "./components/CustomApp";
import Revenue from "./components/Revenue";
import Result from "./components/Result";
import Assistant from "./components/Assistant";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import { reviews } from "./constant";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";
import { useState } from "react";
import Demo from "./components/Demo";

function App() {
  const [isDemoPageOpen, setIsDemoPageOpen] = useState(false);
  const handleOpenDemo = () => {
    setIsDemoPageOpen(true);
  };
  const handleCloseDemo = () => {
    setIsDemoPageOpen(false);
  };
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] w-full overflow-hidden ">
      <Header onBookDemoClick={handleOpenDemo} />
      <Hero onBookDemoClick={handleOpenDemo} />
      {isDemoPageOpen && <Demo onClose={handleCloseDemo} />}
      <Management />
      <Prepcohort />
      <Communication />
      <Role />
      <School />
      <Operation />
      <Tracking />
      <CustomApp />
      <Revenue />
      <Result />
      <Assistant />
      <Contact />
      <Reviews />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
