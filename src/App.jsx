import Communication from "./components/Communication";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Management from "./components/Management";
import Prepcohort from "./components/Prepcohort";

function App() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] w-full overflow-hidden ">
      <Header />
      <Hero />
      <Management />
      <Prepcohort />
      <Communication />
    </div>
  );
}

export default App;
