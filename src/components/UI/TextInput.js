import React from "react";

import Classes from "../../container//Contact.module.css";

const textInput = (props) => {
  return (
    <input
      className={Classes.Input}
      type={props.type}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default textInput;
