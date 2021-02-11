import React from "react";

import Classes from "../../container/Contact.module.css";

const Input = (props) => {
  return (
    <input className={Classes.Input} name={props.name} ref={props.reference} />
  );
};

export default Input;
