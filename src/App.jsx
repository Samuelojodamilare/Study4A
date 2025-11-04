import Header from "./components/Header";
import Hero from "./components/Hero";
import Management from "./components/Management";
import Operation from "./components/Operation";
import Prepcohort from "./components/Prepcohort";
import Role from "./components/Role";
import Tracking from "./components/Tracking";
import CustomApp from "./components/CustomApp";
import Revenue from "./components/Revenue";
import Result from "./components/Result";
import Assistant from "./components/Assistant";
import Contact from "./components/Contact";
import Reviews from "./components/Reviews";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";
import Customization from "./components/Customization";
import AddedValue from "./components/AddedValue";
// import Updates from "./components/Updates";

function App() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] w-full overflow-hidden ">
      <Header />
      <Hero />
      {/* <Updates /> */}
      <Management />
      <AddedValue />
      <Prepcohort />
      <Role />
      <Operation />
      <Tracking />
      <CustomApp />
      <Revenue />
      <Result />
      <Assistant />
      <Customization />
      <Contact />
      <Reviews />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
