import styled from "styled-components";

export const ProjectContainer = styled.div`
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
  background: navy;
  margin-top: 80px;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProjectWrapper = styled.div`
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
