import React from "react";

import Classes from "../../container//Contact.module.css";

const Modal = (props) => {
  return (
    <div id={props.id} className={Classes.Success} onClick={props.clicked}>
      <span>Thank you for your intrest, We will contact you shortly</span>
    </div>
  );
};

export default Modal;
