import React from "react";
import useNavigation from "../../hooks/useNavigation.jsx";
import classNames from "classnames";

const LinkComponent = ({ children, to, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  const classes = classNames(
    "text-blue-500",
    currentPath === to && activeClassName,
  );

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};
export default LinkComponent;
