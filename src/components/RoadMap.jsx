import { roadMap } from "../assets";

const RoadMap = () => {
  return (
    <section className="relative w-full">
      <img
        src={roadMap}
        alt="roadmap"
        width={1510}
        height={789}
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default RoadMap;
