import React from "react";
import Props from "./ex/Props_ex1";

const App = () => {
  const my_func = () => {
    console.log("콘솔 띄우기 성공!");
  };

  return (
    <div>
      <Props text="App 컴포넌트에서 넘겨준 text props입니다." valid={my_func} />
    </div>
  );
};

export default App;
