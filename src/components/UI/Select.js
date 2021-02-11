import React from "react";

import Classes from "../../container/Contact.module.css";

const Select = (props) => {
  return (
    <select name={props.industry} className={Classes.DropDown} ref={props.ref}>
      <option value="banking">Banking</option>
      <option value="automative">Automative</option>
      <option value="consulting">Consultin</option>
      <option value="finance">Finance</option>
      <option value="healthcare">Healthcare</option>
      <option value="meida/pr">Media/PR</option>
      <option value="retail">Retail</option>
      <option value="technology">Technology</option>
      <option value="telecomunication">Telecomunication</option>
    </select>
  );
};

export default Select;
