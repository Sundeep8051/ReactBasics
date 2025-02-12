import classNames from "classnames";

const PanelComponent = ({ children, className, ...rest }) => {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className,
  );
  return (
    <div className={finalClassNames} {...rest}>
      {children}
    </div>
  );
};
export default PanelComponent;
