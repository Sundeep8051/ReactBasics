/* eslint-disable react/prop-types */

import classNames from "classnames";

function Button({
  children,
  primary,
  secondary,
  warning,
  success,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const calculatedClassName = classNames(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-slate-400 bg-slate-400 text-white": secondary,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-green-500 bg-green-500 text-white": success,
      "border-red-400 bg-red-400 text-white": danger,
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-slate-400": outline && secondary,
      "text-yellow-400": outline && warning,
      "text-green-500": outline && success,
      "text-red-400": outline && danger,
    }
  );
  return (
    <div>
      <button {...rest} className={calculatedClassName}>
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  validateBtnValue: ({ primary, secondary, warning, success, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error("Button can accept only one variation value");
    }
  },
};

export default Button;
