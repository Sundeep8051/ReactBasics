import "./AnimalShow.css";
import bird from "../../assets/svg/bird.svg";
import cat from "../../assets/svg/cat.svg";
import cow from "../../assets/svg/cow.svg";
import dog from "../../assets/svg/dog.svg";
import gator from "../../assets/svg/gator.svg";
import horse from "../../assets/svg/horse.svg";
import heart from "../../assets/svg/heart.svg";
import { useState } from "react";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

// eslint-disable-next-line react/prop-types
const AnimalShow = ({ name }) => {
  const [click, setClick] = useState(0);
  function handleClick() {
    setClick(click + 1);
  }
  return (
    <div className="animal-div" onClick={handleClick}>
      <img className="animal" alt={name} src={svgMap[name]} />
      <img
        height={10 + 10 * click + "px"}
        className="heart"
        alt="heart"
        src={heart}
      />
    </div>
  );
};

export default AnimalShow;
