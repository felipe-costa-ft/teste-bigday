import styled from "styled-components";

const Button = styled.button`
  background-color: #b543e6;
  border: none;
  padding: 1em 2em;
  border-radius: 10px;
  cursor: pointer;
  font-size: 12pt;
  font-weight: bolder;
  color: white;

  @media (max-width: 580px) {
    font-size: 10pt;
    padding: 0.8em 1.6em;
  }
`;

export default Button;
