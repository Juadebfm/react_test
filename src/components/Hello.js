import React from "react";

const Hello = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <p>
        Your father is called {props.surName} and his wife is {props.heroName}
      </p>
      <h2>{props.children}</h2>
    </div>
  );
  //   return React.createElement(
  //     "div",
  //     { id: "hello", className: "dummyclass" },
  //     React.createElement("h1", null, "Hello Hi Howayou")
  //   );
};

export default Hello;
