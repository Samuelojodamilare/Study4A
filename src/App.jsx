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

function App() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] w-full overflow-hidden ">
      <Header />
      <Hero />
      <Management />
      <Prepcohort />
      <Communication />
      <Role />
      <School />
      <Operation />
      <Tracking />
      <CustomApp />
    </div>
  );
}

export default App;
