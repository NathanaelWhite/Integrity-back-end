import React from 'react'
import styled from "styled-components";


const StyledHero = styled.div`
    background-color: red;
`

const Hero = () => {
  return (
    <div>
        <StyledHero>
            <h1 className='hero-title'>INTEGRITY</h1>
            <h3 className='hero-sub-title'>Strength & Conditioning</h3>
            <button>Get Started Today</button>
        </StyledHero>
    </div>
  )
}

export default Hero