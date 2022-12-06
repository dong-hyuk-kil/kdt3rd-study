import React from "react";

class ClassComponet extends React.Component {
  render() {
    const teacher = "sean";

    return (
      <>
        <h1>Hello, {teacher}</h1>
        <p>여기는 Class Component!</p>
      </>
    );
  }
}

export default ClassComponet;
