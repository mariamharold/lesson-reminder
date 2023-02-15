import React from "react";
import LessonStyles from "./Lesson.module.css";

const LessonCard = ({ image, name, age }) => {
  return (
    <div className={LessonStyles.container}>
      <img className={LessonStyles.img} src={image} alt="" />
      <div className={LessonStyles.text}>
        <p>
          <span className={LessonStyles.span}>Lesson Name: </span>
          {name}
        </p>
        <p>
          <span className={LessonStyles.span}>Lesson Hour:</span> {age}
        </p>
      </div>
    </div>
  );
};

export default LessonCard;
