import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FcOk } from "react-icons/fc";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  borderRadius: 3,
  textAlign: 'center',
  p: 4,
};

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mq4cmsw",
        "template_fy3deud",
        form.current,
        "qexN7XQCL3162RQhi"
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <StyledContactForm>
        <form ref={form} onSubmit={sendEmail}>
          <label>Nombre</label>
          <input
            placeholder="Escribe tu nombre"
            type="text"
            name="from_name" />
          <label>Email</label>
          <input
            placeholder="ejemplo@gmail.com"
            type="email"
            name="user_email" />
          <label>Mensaje</label>
          <textarea name="message" placeholder="Escribe tu mensaje (No olvides mencionar el auto de tu interés)" />
          <input
            onSubmit={sendEmail}{...handleOpen}
            type="submit"
            value="Enviar" />
        </form>
      </StyledContactForm>
      <div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ¡Tu mensaje ha sido enviado con éxito!
            </Typography>
            <CheckSvg><FcOk /></CheckSvg>
          </Box>
        </Modal>
      </div>
    </>
  );

};

export default Contact;

const StyledContactForm = styled.div`
  width: 70%;
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

      &:hover {
        transition: all 0.3s ease-out;
        background: #f7e76a; 

        &:active {
          transition: all 0.3s ease-out;
          transform: scale(0.98);
        }
      }
    }
  }
`;

const CheckSvg = styled.div`
  margin-top: 5%;
  font-size: 28px;
`