import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Wrapper>
      <div className="heroWrapper">
        <div className="secondaryWrapper">
          <h1>
            Hi, I'm Ashley, <strong>Web Designer</strong> and
            <strong>Front-End Developer</strong>.
          </h1>
          <h3>
            I design and build beautiful websites for businesses. If you need a modern and powerful website, send me an
            email. If we are a good fit, I will give you a time and cost
            estimate.
          </h3>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
              // need to add the location for the link
            }}> see my work</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .heroWrapper {
    border: 1px solid blue;
    background-color: var(--almostBlack);
    width: 100%;
    height: 100%;
    max-height: 1024px;
    min-height: 640px;
    display: flex;
  }
  .secondaryWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 0 0 50px;
  }
  h1 {
    color: var(--white);
    font-family: Roboto;
    font-weight: 200;
    font-size: 66px;
    // border: 2px solid red;
    margin: 0 0 20px 0;
    max-width: 900px;
  }
  h3 {
    color: var(--white);
    font-family: Roboto;
    font-weight: 300;
    font-size: 20px;
    max-width: 700px;
  }
  button{
    width:120px;
    height: 34px;
    margin: 20px 0;
    color: var(--almostBlack);
    background-image: linear-gradient(to right, rgba(143, 215, 87, 1), rgba(58, 128, 4, 1));
    border-radius:4px;
    border: none;

  }

  //   @media (max-width: 768px) {
  //     flex-direction: column;
  //   }
`;

export default Hero;
