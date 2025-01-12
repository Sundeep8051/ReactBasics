import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

/* eslint-disable react/prop-types */
const AccordionComponent = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleShow = (index) => {
    const idx = (currentIdx) => (currentIdx === index ? -1 : index);
    setExpandedIndex(idx);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}{" "}
      </span>
    );
    return (
      <div key={item.id}>
        <h2
          onClick={() => handleShow(index)}
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
        >
          {item.label} {icon}
        </h2>
        {isExpanded && <p className="p-5 border-b">{item.content}</p>}
      </div>
    );
  });

  return (
    <>
      <div>AccordionComponent</div>
      <div>{renderedItems}</div>
    </>
  );
};

export default AccordionComponent;
