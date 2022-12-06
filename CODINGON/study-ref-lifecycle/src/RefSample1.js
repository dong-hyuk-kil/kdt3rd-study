import { useRef } from "react";
const RefSample1 = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    console.log(inputRef.current);
  };

  return (
    <>
      <p>함수형 컴포넌트에서 버튼 클랙시 input focus 기능 구현</p>
      <input ref={inputRef} type="text" placeholder="Enter something" />
      <button>FOCUS</button>
    </>
  );
};

export default RefSample1;
