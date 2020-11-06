import React, { useState } from "react";
import Button from "../Button";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  FormWrapper,
  FormName,
  FormEmail,
  FormMessage,
  ImgWrap,
  Img,
} from "./ContactElements";
import { init, send } from "emailjs-com";
init("user_9dp5UoOqeUcTQvcaoAnGT");

const ContactSection = ({
  lightBg,
  imgStart,
  topline,
  lightText,
  heading,
  description,
  lightTextDesc,
  darkText,
  img,
  alt,
  dark,
  primary,
  buttonLabel,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const formInfo = {
    from_name: name,
    message: message,
    reply_to: email,
  };

  const submit = async (e) => {
    e.preventDefault();
    if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "") {
      send("service_p7znamw", "contact_form", formInfo)
        .then((res) => {
          alert(`name: ${name}, email: ${email}, message: ${message}`);
          setName("");
          setEmail("");
          setMessage("");
        })
        .catch((err) => console.log(err));
    } else {
      alert("Form invalid");
    }
  };
  return (
    <>
      <ContactContainer lightBg={lightBg} id="contact">
        <ContactWrapper>
          <ContactRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Contact</TopLine>
                <FormWrapper id="contact_form">
                  <FormName
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FormEmail
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormMessage
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <br />
                  <div
                    class="g-recaptcha"
                    data-sitekey="6LfvDuAZAAAAAHofENLOimCHMHOefdZ-5p4UPBOq"
                  ></div>
                  <Button
                    title={"Submit"}
                    // formInfo={formInfo}
                    submit={submit}
                    lightBg={lightBg}
                    primary={primary}
                    dark={dark}
                  />
                </FormWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default ContactSection;
