import { motion } from "framer-motion";
import styled from "styled-components";

const lightRed = "#ffefef";
// const black = "#060101";
// const navy = "#322f4e";
// const lightBlack = "#181625";

export const ContactContainer = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
  background: ${({ lightBg }) => (lightBg ? "white" : "#322f4e")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactWrapper = styled.div`
  /* display: grid; */
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (min-width: 769px) {
    display: grid;
  }
`;

export const ContactRow = styled.div`
  align-items: center;

  @media screen and (min-width: 769px) {
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col2 col1'` : `'col1 col2'`};
  }
`;

export const Column1 = styled(motion.div)`
  margin-bottom: 15px;
  padding: 0 15px;

  @media screen and (min-width: 769px) {
    grid-area: col1;
  }
`;
export const Column2 = styled(motion.div)`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
  }
`;

export const TopLine = styled.p`
  color: #d23f3f;
  font-size: 24px;
  line-height: 24px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  /* margin-bottom: 16px; */
  text-align: center;
`;

export const ContactOption = styled.p`
  color: black;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  /* letter-spacing: 1.4px; */
  text-transform: uppercase;
  /* margin-bottom: 16px; */
  text-align: center;
`;

export const ContactDivider = styled(motion.div)`
  /* max-width: 70px; */
  /* height: 23px; */
  margin: 20px auto 20px auto;
  box-sizing: content-box;
  border-color: #d23f3f transparent transparent transparent;
  border-width: 1px 0 0 0;
  border-style: solid;
  content: "";
  width: 100%;
  /* height: 1px; */
`;

export const ContactDividerInternal = styled(motion.div)`
  display: inline-block;
  /* width: 100%; */
`;

export const FormWrapper = styled(motion.form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

export const FormName = styled(motion.input)`
  margin-bottom: 10px;
  padding: 10px 15px;
  background: #322f4e;
  border: ${({ isValid, touched }) => {
    if (!isValid && touched) {
      return `${"2px solid red"}`;
    } else {
      return `${"2px solid transparent"}`;
    }
  }};
  transition: border 200ms ease;
  border-radius: 10px;
  outline: none;
  color: white;
  font-size: 12pt;

  ::placeholder {
    color: #cbc0c0;
  }
`;

export const FormEmail = styled(motion.input)`
  margin-bottom: 10px;
  padding: 10px 15px;
  background: #322f4e;
  border: ${({ isValid, touched, emailRegex }) => {
    if (!emailRegex && touched) {
      return `${"2px solid red"}`;
    } else {
      return `${"2px solid transparent"}`;
    }
  }};
  transition: border 200ms ease;
  border-radius: 10px;
  outline: none;
  color: white;
  font-size: 12pt;

  ::placeholder {
    color: #cbc0c0;
  }
`;

export const FormMessage = styled(motion.textarea)`
  margin-bottom: 10px;
  padding: 10px 16px;
  background: #322f4e;
  border: 0;
  border-radius: 10px;
  outline: none;
  color: white;
  font-size: 12pt;
  min-height: 200px;
  resize: none;

  ::placeholder {
    color: #cbc0c0;
  }
`;

export const BtnWrap = styled.div`
  /* display: flex; */
  /* justify-content: flex-end; */
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
