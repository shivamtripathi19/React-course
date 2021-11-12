import React from "react";

function GetNamed(props) {
  //   return React.createElement("div", null, "mmmmmmmm");
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <button onClick={props.handleClick}>Click</button>
    </div>
  );
}

export default GetNamed;
