import { useEffect, useRef, useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";
import PanelComponent from "../Panel/PanelComponent.jsx";

/* eslint-disable react/prop-types */
const DropdownComponent = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        onClick={() => handleOptionClick(option)}
        key={option.value}
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
      >
        {option.label}
      </div>
    );
  });
  return (
    <div ref={divEl} className="w-48 relative">
      <PanelComponent
        onClick={handleClick}
        className="flex justify-center cursor-pointer items-center"
      >
        {value || "Select..."}
        {isOpen ? (
          <GoChevronDown className="mx-2" />
        ) : (
          <GoChevronRight className="mx-2" />
        )}
      </PanelComponent>
      {isOpen && (
        <PanelComponent className="absolute top-full">
          {renderedOptions}
        </PanelComponent>
      )}
    </div>
  );
};

export default DropdownComponent;
