import styled from "styled-components";
import Card from "./Card";

const IntroCard = styled(Card)`
  width: 40em;

  @media (max-width: 756px) {
    width: 30em;
  }

  @media (max-width: 580px) {
    width: 20em;
  }
`;

export default IntroCard;
