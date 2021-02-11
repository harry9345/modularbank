import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";

import Classes from "../../container//Contact.module.css";

export default function App() {
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onBlur",
  });
  const [selected, setSelected] = useState({ country: "" });
  const [isSuccessfullySubmitted, setIsSuccessfullySubmitted] = useState(false);

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
              <input
                className={Classes.Input}
                name="fisrtName"
                ref={register({ required: true })}
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
              <input className={Classes.Input} name="lastName" ref={register} />
            </div>
          </div>
        </div>

        <div className={Classes.Columns}>
          <div className={Classes.Column}>
            <label className={Classes.Label} htmlFor="email">
              Email*
            </label>
            <div className={Classes.Control}>
              <input
                className={Classes.Input}
                name="email"
                ref={register({
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
              <input className={Classes.Input} name="jobTitle" ref={register} />
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
              <input
                className={Classes.Input}
                name="companey"
                ref={register({ required: true })}
              />
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
              <select
                name="industry"
                className={Classes.DropDown}
                ref={register}
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
              <select
                name="operationGeo"
                className={Classes.DropDown}
                ref={register}
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
        {isSuccessfullySubmitted && (
          <div
            id="success"
            className={Classes.Success}
            onClick={backToContactUs}
          >
            <span>Thank you for your intrest, We will contact you shortly</span>
          </div>
        )}
      </form>
    </div>
  );
}
