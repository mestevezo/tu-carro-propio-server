
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input
          placeholder="Escribe tu nombre"
          type="text"
          name="user_name" />
        <label>Email</label>
        <input
          placeholder="ejemplo@gmail.com"
          type="email"
          name="user_email" />
        <label>Mensaje</label>
        <textarea name="message" />
        <input
          placeholder="Escribe tu mensaje"
          type="submit"
          value="Enviar" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 50%;
  align-self: center;
  margin: auto;
  padding: 5%;
  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #f7df1e;
      color: #202020;
      border: none;
    }
  }
`;

