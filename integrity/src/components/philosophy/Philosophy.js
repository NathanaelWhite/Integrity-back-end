import React from "react";
import styled from "styled-components";
import logoImg from "../../assets/images/integrityLogo.png";
import liftImg from "../../assets/images/gymPic7.jpg";

const StyledPhilo = styled.div`
  margin: 0px;
  padding: 15px 0 15px 0;
  text-align: center;
  color: #ffff;
  background-color: rgba(4, 4, 4, 0.78);
  .underline {
    height: 0.25rem;
    background-color: #ffff;
    margin: 3%;
  }
  .intro {
    text-align: left;
    margin: 3%;
    width: 75%;
  }
  h1 {
    font-size: 3.5rem;
    color: #cd1c1d;
  }
  p {
    font-size: 1.5rem;
  }
  img {
    display: none;
  }
  .ourApproach {
    display: flex;
    justify-content: center;
    margin: 3%;
  }
  .inThisGym {
    margin: 5px;
    color: #cd1c1d;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg) scale(1, 1.25);
  }
  .we-list {
    list-style-type: none;
    text-align: left;
    font-size: 1.5rem;
    color: #ffff;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .we {
    color: #cd1c1d;
  }
  @media (min-width: 768px) {
    .philoText {
      display: flex;
      align-items: center;
    }
    img {
      display: block;
      width: 35%;
    }
  }
`;

const Philosophy = () => {
  return (
    <div>
      <StyledPhilo>
        <div className="intro">
          <h1>Our Philosophy</h1>
          <p>
            Any gym can claim they are a place for members to improve
            themselves, but not many can say they create an environment for true
            personal growth. From its inception, Integrity has always been much
            more than a gym, emphasizing both the physical and the mental
            aspects of individual progress.
          </p>
        </div>
        <div className="underline" />
        <div className="ourApproach">
          <img src={liftImg} alt="lifting weights" className="bandw-img" />
          <h1 className="inThisGym fw-bolder">||| In This Gym |||</h1>
          <ul className="we-list">
            <li><strong className="we">WE</strong> SHOW RESPECT FOR ALL.</li>
            <li><strong className="we">WE</strong> HAVE A POSITIVE ATTITUDE.</li>
            <li><strong className="we">WE</strong> INTRODUCE OURSELVES.</li>
            <li><strong className="we">WE</strong> HIGH FIVE EACH OTHER.</li>
            <li><strong className="we">WE</strong> MAKE NEW FRIENDS.</li>
            <li><strong className="we">WE</strong> CHEER FOR THE LAST PERSON.</li>
            <li><strong className="we">WE</strong> HAVE FUN.</li>
            <li><strong className="we">WE</strong> SMILE.</li>
            <li><strong className="we">WE</strong> SWEAT.</li>
            <li><strong className="we">WE</strong> COUNT ALL OF OUR REPS.</li>
            <li><strong className="we">WE</strong> DO MOVEMENTS TO STANDARD.</li>
            <li><strong className="we">WE</strong> ARE FREE OF COMPLAINTS.</li>
            <li><strong className="we">WE</strong> THANK OUR COACHES.</li>
            <li><strong className="we">WE</strong> RESPECT EQUIPMENT.</li>
            <li><strong className="we">WE</strong> CLEAN UP AFTER OURSELVES.</li>
            <li><strong className="we">WE</strong> LEARN, GROW, WE GET BETTER.</li>
          </ul>
        </div>
      </StyledPhilo>
    </div>
  );
};

export default Philosophy;
