import styled from "styled-components";
import navImg from "../assets/images/background.jpg";

const GlobalStyles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap");
  font-family: "Montserrat", sans-serif;
  .nav-img {
    background-image: url(${navImg});
    background-size: cover;
    background-attachment: fixed;
  }
`;

export default GlobalStyles;
