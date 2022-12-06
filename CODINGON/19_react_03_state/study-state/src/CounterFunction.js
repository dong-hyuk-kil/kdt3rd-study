import { useState } from "react";

const CounterFunction = () => {
  const [number, setNumber] = useState(0);

  const plusOne = () => setNumber(number + 1);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={plusOne}>일 더하기</button>
    </>
  );
};

export default CounterFunction;
