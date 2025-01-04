import "./EventSystem.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

const animalList = ["bird", "cat", "cow", "dog", "gator", "horse"];

function getAnimal() {
  return animalList[Math.floor(Math.random() * animalList.length)];
}

const EventSystem = () => {
  const [animals, setAnimal] = useState([]);

  const handleClick = () => {
    setAnimal([...animals, getAnimal()]);
  };

  const renderedAnimals = animals.map((animals, index) => {
    return <AnimalShow name={animals} key={index} />;
  });

  return (
    <div className="container">
      <button
        onClick={handleClick}
        style={{ border: "2px solid black", backgroundColor: "lightblue" }}
      >
        Add Animal
      </button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
};

export default EventSystem;
