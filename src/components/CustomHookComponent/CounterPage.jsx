import React from "react";
import Button from "../ReusableComponents/Button/ButtonComponent.jsx";
import useCounter from "../../hooks/useCounter.jsx";

const CounterPage = ({ initialCount }) => {
  const { count, handleClick } = useCounter(initialCount);

  return (
    <div>
      Count value: {count}
      <Button onClick={handleClick} primary>
        Increase
      </Button>
    </div>
  );
};
export default CounterPage;
