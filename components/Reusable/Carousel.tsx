"use client";
import { ReactNode, useEffect, useState } from "react";
import Card from "./Card";

type Props = {};

const carouselData = [
  {
    label: "Headline 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium velit nemo nulla amet in molestiae, necessitatibus sequi assumenda. Ea aliquam, tenetur commodi reprehenderit animi iste quasi enim nihil ad?",
  },
  {
    label: "Another Exciting Update",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium velit nemo nulla amet in molestiae, necessitatibus sequi assumenda. Ea aliquam, tenetur commodi reprehenderit animi iste quasi enim nihil ad?",
  },
  {
    label: "Important Announcement",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium velit nemo nulla amet in molestiae, necessitatibus sequi assumenda. Ea aliquam, tenetur commodi reprehenderit animi iste quasi enim nihil ad?",
  },
  {
    label: "Final Call to Action",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex praesentium velit nemo nulla amet in molestiae, necessitatibus sequi assumenda. Ea aliquam, tenetur commodi reprehenderit animi iste quasi enim nihil ad?",
  },
];

const Carousel = (props: Props) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((current + 1) % carouselData.length);
    }, 4000);

    return () => clearInterval(interval);
  });

  const createSlider = () => {
    const elements: ReactNode[] = [];
    for (let index = 0; index < carouselData.length; index++) {
      elements.push(<button key={index} onClick={() => setCurrent(index)} className={`h-1 flex-1 ${current === index ? "bg-violet-400" : "bg-gray-200"}`}></button>);
    }

    return elements;
  };

  return (
    <div className="carousel">
      <h2 className="mb-6 text-lg font-semibold">Tips</h2>
      <Card label={carouselData[current].label} description={carouselData[current].description} />
      <div className="flex gap-2">{createSlider()}</div>
    </div>
  );
};

export default Carousel;
