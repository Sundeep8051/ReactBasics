import React from "react";
import LinkComponent from "./LinkComponent.jsx";

const Links = [
  { label: "Accordion", path: "/accordion" },
  { label: "Button", path: "/button" },
  { label: "Dropdown", path: "/dropdown" },
  { label: "Modal", path: "/modal" },
  { label: "Table", path: "/table" },
  { label: "Counter", path: "/counter" },
  { label: "CounterReduce", path: "/counter-reduce" },
];

const SidebarComponent = () => {
  const renderedLinks = Links.map((link) => {
    return (
      <LinkComponent
        key={link.label}
        to={link.path}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {link.label}
      </LinkComponent>
    );
  });
  return (
    <div className="sticky top-0 flex flex-col overflow-y-scroll items-start">
      {renderedLinks}
    </div>
  );
};
export default SidebarComponent;
