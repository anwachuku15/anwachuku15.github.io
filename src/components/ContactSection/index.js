import React, { useState, useReducer } from "react";
import Button from "../Button";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  ContactDivider,
  ContactDividerInternal,
  FormWrapper,
  FormName,
  FormEmail,
  FormMessage,
  ImgWrap,
  Img,
  ContactOption,
} from "./ContactElements";
import TextField from "@material-ui/core/TextField";
import { init, send } from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

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
  const [isNameValid, setIsNameValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [message, setMessage] = useState("");
  const [captchaVal, setCaptchaVal] = useState(null);

  const formInfo = {
    from_name: name,
    message: message,
    reply_to: email,
  };

  const onCaptcha = (value) => {
    setCaptchaVal(value);
  };

  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const submit = async (e) => {
    e.preventDefault();
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      emailRegex.test(email.toLowerCase()) &&
      message.trim() !== "" &&
      captchaVal
    ) {
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
                {/* <ContactOption>You can reach me through LinkedIn</ContactOption> */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    title="LinkedIn"
                    contactLinkedIn={true}
                    lightBg={true}
                  />
                  {/* <Button title="Gmail" contactGmail={true} lightBg={true} /> */}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <ContactDivider />
                  <span
                    style={{ marginLeft: 5, marginRight: 5, color: "gray" }}
                  >
                    OR
                  </span>
                  <ContactDivider />
                </div>
                <FormWrapper id="contact_form">
                  {/* <ContactOption>Send me an email.</ContactOption> */}
                  {/* <TextField
                    variant="outlined"
                    label="Name"
                    type="text"
                    // required
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameTouched && name.trim() === "") {
                        setIsNameValid(false);
                      } else if (nameTouched && name.trim() !== "") {
                        setIsNameValid(true);
                      }
                    }}
                    onBlur={() => {
                      setNameTouched(true);
                      if (name.trim() !== "") {
                        setIsNameValid(true);
                      } else {
                        setIsNameValid(false);
                      }
                    }}
                    error={!isNameValid}
                  /> */}
                  <FormName
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (nameTouched && name.trim() === "") {
                        setIsNameValid(false);
                      } else if (nameTouched && name.trim() !== "") {
                        setIsNameValid(true);
                      }
                    }}
                    onBlur={() => {
                      setNameTouched(true);
                      if (name.trim() !== "") {
                        setIsNameValid(true);
                      } else {
                        setIsNameValid(false);
                      }
                    }}
                    isValid={name.trim() !== ""}
                    touched={nameTouched}
                  />
                  <FormEmail
                    placeholder="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (emailRegex.test(email.toLowerCase())) {
                        setIsEmailValid(true);
                      } else if (
                        !emailRegex.test(email.toLowerCase()) &&
                        emailTouched
                      ) {
                        setIsEmailValid(false);
                      }
                    }}
                    onBlur={(e) => {
                      setEmailTouched(true);
                      if (emailRegex.test(email.toLowerCase())) {
                        setIsEmailValid(true);
                      } else {
                        setIsEmailValid(false);
                      }
                    }}
                    isValid={isEmailValid}
                    touched={emailTouched}
                    emailRegex={emailRegex.test(email)}
                  />
                  <FormMessage
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <br />
                  {/* <div
                    class="g-recaptcha"
                    data-sitekey="6LfvDuAZAAAAAHofENLOimCHMHOefdZ-5p4UPBOq"
                  ></div> */}
                  <ReCAPTCHA
                    sitekey="6LfvDuAZAAAAAHofENLOimCHMHOefdZ-5p4UPBOq"
                    onChange={onCaptcha}
                  />
                  <Button
                    title={"Submit"}
                    submit={submit}
                    isDisabled={
                      !captchaVal ||
                      name.trim() === "" ||
                      email.trim() === "" ||
                      !emailRegex.test(email.toLowerCase()) ||
                      message.trim() === ""
                    }
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
