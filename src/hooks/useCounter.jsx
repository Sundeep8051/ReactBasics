import { useEffect, useState } from "react";

const UseCounter = (initialCount) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return { count, handleClick };
};
export default UseCounter;
