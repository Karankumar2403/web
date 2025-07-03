"use client";
import React, { useState } from "react";
import styles from "./Form.module.css";
import Loader from "./Loader";

const Form = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comments, setcomments] = useState("");
  const [isLoading,setIsLoading] =useState(false)

  const apikey=process.env.ACCESS_KEY

  const handleSubmit = (event) => {
    // event.preventDefault();
    setIsLoading(true);
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Phone:", phone);
    // console.log("Comments:", comments);

    // setname("");
    // setEmail("");
    // setPhone("");
    // setcomments("");
  };
  return (
    <div className="relative">
      {isLoading && <Loader/>}
      <form
      className={`${styles.formBody}`}
      action="https://api.web3forms.com/submit"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input
        type="hidden"
        className=""
        name="access_key"
        value={apikey}
      />
      
      <input type="hidden" name="redirect" value="https://ecesociety.bitsindri.ac.in/formSuccess"></input>
      {/* <input type="hidden" name="redirect" value="http://localhost:3000/formSuccess"></input> */}
      <div className={`${styles.nameBox}`}>
        <label className={`${styles.labels}`} htmlFor="name">
          Name
        </label>
        <input
          className={`${styles.inputs}`}
          type="text"
          id="name"
          name="name"
          value={name}
          required
          placeholder="Enter your name"
          onChange={(e) => {
            setname(e.target.value);
          }}
        />
      </div>
      <div className={`${styles.details}`}>
        <div className="detail-email flex flex-col">
          <label className={`${styles.labels}`} htmlFor="email">
            Email
          </label>
          <input
            className={`${styles.inputs}`}
            type="email"
            id="email"
            name="email"
            value={email}
            required
            placeholder="Enter your E-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="detail-phone flex flex-col ">
          <label className={`${styles.labels}`} htmlFor="email">
            Phone Number
          </label>
          <input
            className={`${styles.inputs}`}
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            required
            placeholder="Enter your phone number"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className={`${styles.labels}`} htmlFor="message">
          Message
        </label>
        <textarea
          className={`${styles.text}`}
          id="message"
          type="text"
          name="message"
          value={comments}
          required
          placeholder="Write a message here"
          onChange={(e) => {
            setcomments(e.target.value);
          }}
        ></textarea>
      </div>
      <button className={`${styles.PostComments}`} type="submit">
        Send Mail
      </button>
    </form>
    </div>
  );
};

export default Form;
