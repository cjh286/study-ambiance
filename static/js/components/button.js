import React from "react";

const Button = () => {

  const onClick = () => {
    fetch("/getTasks", {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log("data: ", data))
    .catch((error) => console.log("error: ", error));
  }

  return (<button onClick={onClick}>Button</button>);
};

export default Button;
