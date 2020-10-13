import { motion } from "framer-motion";
import styled from "styled-components";

const lightRed = "#ffefef";
// const black = "#060101";
// const navy = "#322f4e";
// const lightBlack = "#181625";

export const ContactContainer = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
  background: ${({ lightBg }) => (lightBg ? lightRed : "#322f4e")};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ContactWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ContactRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled(motion.div)`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled(motion.div)`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #d23f3f;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const FormWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const FormName = styled(motion.input)`
  margin-bottom: 10px;
  padding: 10px 15px;
  background: #322f4e;
  border: 0;
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
  border: 0;
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
