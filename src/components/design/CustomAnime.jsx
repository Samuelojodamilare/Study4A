import { useState } from "react";
import { custom } from "../../constant";

const getRandomIndices = (arrLength, count) => {
  const indices = new Set();
  while (indices.size < count) {
    const randomIndex = Math.floor(Math.random() * arrLength);
    indices.add(randomIndex);
  }
  return Array.from(indices);
};

const CustomAnime = () => {
  const totalButtons = custom.length;
  const randomIndices = getRandomIndices(totalButtons, 4);

  const initialToggles = Array(totalButtons).fill(false);
  randomIndices.forEach((index) => {
    initialToggles[index] = true;
  });

  const [selectButtons, setSelectButtons] = useState(initialToggles);
  const handleToggle = (index) => {
    const updatedToggles = [...selectButtons];
    updatedToggles[index] = !updatedToggles[index];
    setSelectButtons(updatedToggles);
  };

  const items = [...custom];
  const reverseItems = [...items].reverse();
  return (
    <div className="relative w-full p-4 mb-6 overflow-hidden group">
      <div className="flex lg:space-x-8 space-x-6 ">
        <div className="flex lg:space-x-8 space-x-6  animate-moveLeft group-hover:pause">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 min-w-max">
              <input
                type="checkbox"
                id={item.id}
                checked={selectButtons[index]}
                onChange={() => handleToggle(index)}
                className="appearance-none lg:border-4 border-2 border-primary rounded-full lg:h-6 h-4 lg:w-6 w-4 cursor-pointer checked:bg-primary checked:border-white/80 transition-all duration-200"
              />
              <span className="whitespace-nowrap lg:text-[18px] sm:text-[14px] text-[12px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="flex lg:space-x-8 space-x-6 animate-moveLeft group-hover:pause">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 min-w-max">
              <input
                type="checkbox"
                id={item.id}
                checked={selectButtons[index]}
                onChange={() => handleToggle(index)}
                className="appearance-none lg:border-4 border-2 border-primary rounded-full lg:h-6 h-4 lg:w-6 w-4 cursor-pointer checked:bg-primary checked:border-white/80 transition-all duration-200"
              />
              <span className="whitespace-nowrap lg:text-[18px] sm:text-[14px] text-[12px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex lg:space-x-8 space-x-6 sm:mt-5 mt-3 ">
        <div className="flex lg:space-x-8 space-x-6 animate-moveRight group-hover:pause">
          {reverseItems.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 min-w-max">
              <input
                type="checkbox"
                id={item.id}
                checked={selectButtons[index]}
                onChange={() => handleToggle(index)}
                className="appearance-none lg:border-4 border-2 border-primary rounded-full lg:h-6 h-4 lg:w-6 w-4 cursor-pointer checked:bg-primary checked:border-white/80 transition-all duration-200"
              />
              <span className="whitespace-nowrap lg:text-[18px] sm:text-[14px] text-[12px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
        <div className="flex lg:space-x-8 space-x-6  animate-moveRight group-hover:pause">
          {reverseItems.map((item, index) => (
            <div
              key={item.id}
              className="flex items-center space-x-2 min-w-max">
              <input
                type="checkbox"
                id={item.id}
                checked={selectButtons[index]}
                onChange={() => handleToggle(index)}
                className="appearance-none lg:border-4 border-2 border-primary rounded-full lg:h-6 h-4 lg:w-6 w-4 cursor-pointer checked:bg-primary checked:border-white/80 transition-all duration-200"
              />
              <span className="whitespace-nowrap lg:text-[18px] sm:text-[14px] text-[12px]">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomAnime;
