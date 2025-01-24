import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

/* eslint-disable react/prop-types */
const DropdownComponent = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="w-48 relative">
      <div
        onClick={handleClick}
        className="flex justify-center cursor-pointer items-center border rounded p-3 shadow bg-white w-full"
      >
        {value || "Select..."}
        {isOpen ? (
          <GoChevronDown className="mx-2" />
        ) : (
          <GoChevronRight className="mx-2" />
        )}
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedOptions}
        </div>
      )}
    </div>
  );
};

export default DropdownComponent;
