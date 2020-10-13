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
  // BtnWrap,
  ImgWrap,
  Img,
} from "./ContactElements";

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
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const formInfo = {
    name: name,
    email: email,
    message: message,
  };
  const submit = (name, email, message) => {
    console.log(name, email);
    // console.log(email);
    console.log(message);
    console.log("submitted");
  };
  return (
    <>
      <ContactContainer lightBg={lightBg} id="contact">
        <ContactWrapper>
          <ContactRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>Contact</TopLine>
                <FormWrapper>
                  <FormName
                    placeholder="Name"
                    type="text"
                    name="name"
                    // value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FormEmail
                    placeholder="Email"
                    type="email"
                    name="email"
                    // value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormMessage
                    placeholder="Message"
                    name="message"
                    // value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  {/* <BtnWrap> */}
                  <Button
                    title={"Submit"}
                    formInfo={formInfo}
                    submit={submit}
                    lightBg={lightBg}
                    primary={primary}
                    dark={dark}
                  />
                  {/* </BtnWrap> */}
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
