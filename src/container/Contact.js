import React, { Component } from "react";
import Info from "../components/info/Info";
import Form from "../components/form/Form";

import Classes from "./Contact.module.css";

class Contact extends Component {
  render() {
    return (
      <div className={Classes.Contact}>
        <div className={Classes.Columns}>
          <Info />
          <Form />
        </div>
      </div>
    );
  }
}

export default Contact;
