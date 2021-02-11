import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";

import Modal from "../UI/Modal";
import Select from "../UI/Select";
import Input from "../UI/Input";
import Classes from "../../container//Contact.module.css";

export default function App() {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
  });
  // success manage state
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

  // country State hooks
  const [selected, setSelected] = useState({ country: "" });

  // Sending contact information to "backend"
  const onSubmit = (data) => {
    axios
      .post(
        "https://vue-http-start-c3be4.firebaseio.com/costumerData.json",
        data
      )
      .then((result) => {
        console.log(result);
        setIsSuccessfullySubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Modal handler to reset the form and back to main page
  const backToContactUs = () => {
    setIsSuccessfullySubmitted(false);
    reset();
  };

  return (
    <div className={`${Classes.Columns} ${Classes.ThreeFifth}`}>
      <form onSubmit={handleSubmit(onSubmit)} method="POST">
        <div className={Classes.Columns}>
          <h1>Contact us </h1>
        </div>
        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="fisrtName">
              First Name*
            </label>
            <div className={Classes.Control}>
              <Input
                name="fisrtName"
                reference={register({ required: true })}
              />
              {errors.fisrtName && (
                <span className={Classes.Error}>
                  Please Insert Your First Name
                </span>
              )}
            </div>
          </div>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="lastName">
              Last Name
            </label>
            <div className={Classes.Control}>
              <Input name="lastName" reference={register} />
            </div>
          </div>
        </div>

        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="email">
              Email*
            </label>
            <div className={Classes.Control}>
              <Input
                name="email"
                reference={register({
                  required: "Email is Requeird",
                  pattern: {
                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                    message: "Invalid Email Address",
                  },
                })}
              />
              {errors.email && (
                <span className={Classes.Error}>{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="jobTitle">
              Job title
            </label>
            <div className={Classes.Control}>
              <Input name="jobTitle" reference={register} />
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
              <Input name="companey" reference={register({ required: true })} />

              {errors.companey && (
                <span className={Classes.Error}>
                  Please Insert Your Companey Name
                </span>
              )}
            </div>
          </div>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="industry">
              Industry
            </label>
            <div className={Classes.Control}>
              <Select name="industry" reference={register} />
            </div>
          </div>
        </div>
        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="country">
              Country
            </label>
            <div className={Classes.Control}>
              <ReactFlagsSelect
                selected={selected}
                onSelect={(code) => setSelected(code)}
                name="country"
                className={Classes.DropDown}
              />
            </div>
          </div>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="operationGeo">
              Operation Geography
            </label>
            <div className={Classes.Control}>
              <Select name="operationGeo" reference={register} />
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
                name="message"
                className={Classes.Textarea}
                ref={register}
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
                  ref={register({ required: true })}
                  name="termsAccepted"
                />
                <span>
                  By submitting this form I accept
                  <a href="https://www.modularbank.co/privacy-policy/">
                    privacy policy and cookie policy
                  </a>
                  .
                </span>
                {errors.termsAccepted && (
                  <span className={Classes.Error}>
                    Please Accespt The Terms
                  </span>
                )}
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
            <button type="submit" className={Classes.Button}>
              Submit
            </button>
          </div>
        </div>
        {/* Success mesage Modal */}
        {isSuccessfullySubmitted && <Modal clicked={backToContactUs} />}
      </form>
    </div>
  );
}
