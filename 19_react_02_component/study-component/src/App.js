import "./App.css";
import ClassComponet from "./ClassComponent";
import FuncComponent from "./FuncComponent";
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <ClassComponet />;
      <hr />
      <FuncComponent name="KDT3기" num={3} students={25}></FuncComponent>
      <FuncComponent></FuncComponent>
      <hr />
      <Button></Button>
    </div>
  );
}

export default App;
