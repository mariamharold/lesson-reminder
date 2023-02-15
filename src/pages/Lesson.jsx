import React from "react";
import LessonCard from "../components/LessonCard/LessonCard";
import { data } from "../helper/data";

const Lesson = () => {
  return (
    <div className="main">
      {data.map(({ image, name, age }) => (
        <LessonCard image={image} name={name} age={age} />
      ))}
    </div>
  );
};

export default Lesson;
