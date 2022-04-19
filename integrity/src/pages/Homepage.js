import React from 'react'
import Hero from '../components/Hero/Hero';
import Philosophy from '../components/philosophy/Philosophy';
import Team from '../components/Team/Team';
import styled from 'styled-components';
import backgroundImg from "../assets/images/background.jpg";

const StyledHomepage = styled.div`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-attachment: fixed;
`

const Homepage = () => {
  return (
    <StyledHomepage>
      <Hero />
      <Philosophy />
      <Team />
    </StyledHomepage>
  )
}

export default Homepage
