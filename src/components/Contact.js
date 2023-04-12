import React, { useRef, useState } from "react";

import email from "../assets/undraw_mail_sent_re_0ofv.svg";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setName("");
    setUserEmail("");
    setMessage("");
    emailjs
      .sendForm("service_ljql5r8", "template_zkrhii4", form.current, "XLS4AhdHMRsqg0QSS")
      .then(() => {
        toast.success('Successfully toasted!');
        
      })
      .catch(() => {
        toast.error("Le mail n'est envoyé", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <div className="container-fluid p-5">
      <div className="d-sm-flex align-items-center justify-content-evenly">
        <div>
          <form ref={form} onSubmit={sendEmail}>
            <ul style={{ listStyle: "none" }} className="p-1">
              <li className="m-3 shadow-sm" style={{width:"400px"}}>
                <input
                  className="form-control form-class"
                  placeholder="Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <input
                  className="form-control form-class"
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </li>
              <li className="m-3 shadow-sm">
                <textarea
                  placeholder="Message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="form-control form-class"
                ></textarea>
              </li>
              <li className="ms-3">
                <input type="submit" className="btn btn-primary custom-btn fw-bold  px-5" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
        <div>
          <img src={email} style={{ width: "400px" }} alt="email" />
        </div>
      </div>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </div>
  );
};

export default Contact;
