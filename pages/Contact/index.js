import React, { useState } from 'react';
import { Modal, Box, Typography } from "@mui/material"

const Contact = () => {

  const style = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
  };

  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("")
  const [emaill, setEmail] = useState("");
  const [textarea, setTextarea] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [error, setError] = useState({
    firstnameError: "",
    lastnameError: "",
    emailError: "",
    textError: ""

  })
  const [formValid, setFormValid] = useState(false)

  const validateFirstname = (firstname) => {
    let fError = error.firstnameError;
    let isValid = formValid;

    if (firstname.trim() === "") {
      fError = "This is required!";
      isValid = false
    } else if (firstname.trim().length < 3) {
      fError = "Enter atleast 3 character!";
      isValid = false
    } else {
      isValid = true;
      fError = ""
    }
    setFirstName(firstname)
    setFormValid(isValid);
    setError({ ...error, firstnameError: fError })
    return isValid;
  }

  const validateLastname = (lastname) => {
    let lError = error.lastnameError;
    let isValid = formValid;

    setlastName(lastname)
    setFormValid(isValid);
    setError({ ...error, lastnameError: lError })
    return isValid;
  }

  const validateEmail = (emaill) => {
    let eError = error.emailError;
    let isValid = formValid;

    if (!(/[A-Za-z0-9%+-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}/).test(emaill)) {
      eError = "This is invalid";
      isValid = false;
    } else {
      isValid = true;
      eError = "";
    }

    setEmail(emaill);
    setFormValid(isValid);
    setError({ ...error, emailError: eError });

    return isValid;
  };

  const validatetext = (textarea) => {
    let tError = error.textError;
    let isValid = formValid;

    if (textarea.trim() === "") {
      tError = "This is required";
      isValid = false;
    } else if (textarea.trim().length < 10) {
      tError = "Enter something!";
      isValid = false
    } else {
      isValid = true;
      tError = ""
    }
    setTextarea(textarea)
    setFormValid(isValid);
    setError({ ...error, textError: tError })
    return isValid;
  }

  const handleChange = (e) => {

    if (e.target.id === "firstname") {
      validateFirstname(e.target.value)
    } else if (e.target.id === "lastname") {
      validateLastname(e.target.value)
    } else if (e.target.id === "emaill") {
      validateEmail(e.target.value)
    } else if (e.target.id === "textarea") {
      validatetext(e.target.value)
    }
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateFirstname(firstname) && validateLastname(lastname) && validateEmail(emaill) && validatetext(textarea)
    ) {
      setFirstName("")
      setlastName("")
      setEmail("")
      setTextarea("")
      setOpenModal(true);
      setTimeout(() => setOpenModal(false), 2000);

    }

  }

  return (
    <div className='flex flex-col'>
      <section className=" pt-10 text-center">
        <h1 className="text-2xl font-bold">Get in Touch with Us</h1>
      </section>

      {/* Contact & Form Section */}
      <div className="md:flex p-4 sm:p-10 md:space-x-6 rounded">
        {/* Contact Details */}
        <div className="relative bg-gray-100 p-10 flex-1 flex flex-col text-lg md:text-xl items-center justify-center text-center mb-4 md:mb-0 ">

          <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

          <div
            className="absolute inset-0 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: "url('https://ipsworks.waamh.org.au/assets/contact-us.jpg')",
              filter: "brightness(30%)",
            }}
          ></div>

          <div className="relative z-10 ">
            <p className="font-bold text-xl md:text-2xl border-b-2 border-black mb-6 text-white">
              Contact Us
            </p>
            <p className="text-white">
              Address: Gurugram, Haryana <br />
              Email: contact@ecommerce.org <br />
              Phone: +123 456 7890
            </p>
          </div>
        </div>


        {/* Form Section */}
        <div className=" bg-gray-900 text-white p-10 flex-1 border rounded-xl shadow-xl">
          <form className="space-y-4" onSubmit={handleSubmit} >
            <p className="font-bold text-lg md:text-2xl text-center mb-6">Ask Anything</p>
            <div className="sm:flex sm:space-x-2 space-y-2 sm:space-y-0">
              <input type="text"
                id="firstname"
                name="firstname"
                onChange={handleChange}
                value={firstname}
                placeholder="First name*"
                className="border p-2 w-full sm:w-1/2 rounded-xl" /> <br />
              <p style={{ color: "yellow" }}>{error.firstnameError}</p>

              <input type="text"
                id="lastname"
                name="lastname"
                onChange={handleChange}
                value={lastname}
                placeholder="Last name"
                className="border p-2 w-full sm:w-1/2 rounded-xl" />
              <p style={{ color: "yellow" }}>{error.lastnameError}</p>
            </div>
            <input
              type="email"
              id="emaill"
              name="emaill"
              onChange={handleChange}
              value={emaill}
              placeholder="Email*"
              className="border p-2 w-full rounded-xl" />
            <p style={{ color: "yellow" }}>{error.emailError}</p>
            <input
              type="text"
              id="textarea"
              name="textarea"
              onChange={handleChange}
              value={textarea}
              placeholder="What can we help you with?"
              className="border p-2 w-full h-[100px] rounded-xl"
              rows="4"
              required />
            <p style={{ color: "yellow" }}>{error.textError}</p>
            <button className="bg-blue-700 text-white px-4 py-2 rounded">Submit</button>
          </form>
        </div>
      </div>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='flex flex-row gap-2 text-sm'>
              We will contact you soon!</div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Contact


