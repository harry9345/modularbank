import React, { useState } from "react";
import axios from "axios";

import ReactFlagsSelect from "react-flags-select";
import Textinput from "../UI/TextInput";
import Classes from "../../container//Contact.module.css";

const Form = () => {
  const [firstNameState, setFirstName] = useState({ firstName: "" });
  const [lastNameState, setLastName] = useState({ lastName: "" });
  const [emailState, setEmail] = useState({ email: "" });
  const [jobTitleState, setJobTitle] = useState({ jobTitle: "" });
  const [companeyState, setCompaney] = useState({ companey: "" });
  const [selected, setSelected] = useState({ country: "" });
  const [industryState, setIndustry] = useState({ industry: "" });
  const [operationGeoState, setOperationGeo] = useState({ operationGeo: "" });
  const [messageState, setMessage] = useState({ message: "" });
  const [statusState, setStatus] = useState({ status: "Send" });
  const [agree, setAgree] = useState(false);
  const costumerData = {
    firstNameState,
    lastNameState,
    emailState,
    jobTitleState,
    companeyState,
    selected,
    industryState,
    operationGeoState,
    messageState,
    agree,
  };
  // const checkboxHandler = (event) => {
  //   setAgree(!agree);
  //   console.log("agree : " + event.target.id);
  // };
  const handleChange = (event) => {
    const field = event.target.id;
    if (field === "firstName") {
      setFirstName({ firstName: event.target.value });
    } else if (field === "email") {
      setEmail({ email: event.target.value });
    } else if (field === "lastName") {
      setLastName({ lastName: event.target.value });
    } else if (field === "jobTitle") {
      setJobTitle({ jobTitle: event.target.value });
    } else if (field === "companey") {
      setCompaney({ companey: event.target.value });
    } else if (field === "country") {
      setSelected({ country: event.target.value });
    } else if (field === "industry") {
      setIndustry({ industry: event.target.value });
    } else if (field === "operationGeo") {
      setOperationGeo({ operationGeo: event.target.value });
    } else if (field === "message") {
      setMessage({ message: event.target.value });
    } else if (field === "agree") {
      setAgree(!agree);
      console.log(agree);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setStatus({ status: "Sending" });
    axios
      .post(
        "https://vue-http-start-c3be4.firebaseio.com/costumerData.json",
        costumerData
      )
      .then((response) => {
        console.log(response);

        if (response.statusText === "OK") {
          alert("Message Sent");
          setFirstName({ firstName: "" });
          setLastName({ lastName: "" });
          setEmail({ email: "" });
          setJobTitle({ jobTitle: "" });
          setCompaney({ companey: "" });
          setSelected({ country: "" });
          setIndustry({ industry: "" });
          setOperationGeo({ operationGeo: "" });
          setMessage({ message: "" });
          setStatus({ status: "Submited" });
        } else if (response.statusText === "FAILD") {
          alert("Message Failed");
          setStatus({ status: "failed" });
        }
      });
  };

  const canBeSubmitted = () => {
    return (
      // costumerData.firstNameState !== "" &&
      // costumerData.emailState !== "" &&
      // costumerData.companeyState > 0 &&
      costumerData.selected.length > 0 && costumerData.agree === true
    );
  };
  let isEnabled = canBeSubmitted();
  console.log("is enable :" + isEnabled);

  let buttonText = statusState.status;
  return (
    <div className={`${Classes.Columns} ${Classes.ThreeFifth}`}>
      <form onSubmit={onSubmitHandler} method="POST">
        <div className={Classes.Columns}>
          <h1>Contact us </h1>
        </div>
        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="fisrtName">
              First Name*
            </label>
            <div className={Classes.Control}>
              <Textinput
                type="text"
                id="firstName"
                value={firstNameState.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="lastName">
              Last Name
            </label>
            <div className={Classes.Control}>
              <Textinput
                type="text"
                id="lastName"
                value={lastNameState.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="email">
              Email*
            </label>
            <div className={Classes.Control}>
              <Textinput
                type="email"
                id="email"
                value={emailState.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="jobTitle">
              Job title
            </label>
            <div className={Classes.Control}>
              <Textinput
                type="text"
                id="jobTitle"
                value={jobTitleState.jobTitle}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <br />
        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="companey">
              Companey*
            </label>
            <div className={Classes.Control}>
              <Textinput
                type="text"
                id="companey"
                value={companeyState.companey}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="industry">
              Industry
            </label>
            <div className={Classes.Control}>
              <select
                name="industry"
                id="industry"
                value={industryState.industry}
                onChange={handleChange}
                className={Classes.DropDown}
              >
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
            </div>
          </div>
        </div>
        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="country">
              Country*
            </label>
            <div className={Classes.Control}>
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                id="country"
                className={Classes.DropDown}
                required
              />
            </div>
          </div>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="operationGeo">
              Operation Geography
            </label>
            <div className={Classes.Control}>
              <select
                name="operationGeo"
                id="operationGeo"
                value={operationGeoState.operationGeo}
                onChange={handleChange}
                className={Classes.DropDown}
              >
                <option value="n/a">N/A</option>
                <option value="national">National</option>
                <option value="regional">Regional</option>
                <option value="global">Global</option>
              </select>
            </div>
          </div>
        </div>

        <br />
        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="message">
              What would you like to talk about?
            </label>
            <div className={Classes.Control}>
              <textarea
                id="message"
                className={Classes.Textarea}
                value={messageState.message}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <div className={Classes.Checkbox}>
              <label>
                <input
                  type="checkbox"
                  id="agree"
                  onChange={handleChange}
                  name="termsAccepted"
                />
                <span>
                  By submitting this form I accept
                  <a href="https://www.modularbank.co/privacy-policy/">
                    privacy policy and cookie policy
                  </a>
                  .
                </span>
              </label>
            </div>
            <div className={Classes.Checkbox}>
              <label>
                <input type="checkbox" name="newsletter" />
                <span>I would like to receive your newsletter.</span>
              </label>
            </div>
          </div>
          <div className={Classes.Column}>
            <button
              className={Classes.Button}
              disabled={!isEnabled}
              type="submit"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
