import { useState } from "react";

const Awesome = ({ initialvalue }) => {
  const [count, setCount] = useState(initialvalue ?? 0);
  const add = () => {
    setCount((prevcount) => prevcount + 1);
  };
  const remove = () => {
    setCount((prevcount) => {
      const result = prevcount - 1;
      if (result < 0) {
        return 0;
      }
      return result;
    });
  };
  return (
    <div>
      <h2>awesome</h2>
      <div>{count}</div>
      <button onClick={add}>add</button>
      <button onClick={remove}>remove</button>
    </div>
  );
};
export default Awesome;
