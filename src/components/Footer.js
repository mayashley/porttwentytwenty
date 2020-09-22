import React from "react";
import styled from "styled-components";
import SocialIcons from "../constants/SocialIcons";

const Footer = () => {
  return (
    <Wrapper>
      <div className="secondaryWrapper">
        <div className="wrap">
          <h3>
            ashley<span>May</span>
          </h3>
          <p>©2020 All Rights Reserved.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
h3 {
    color: var(--white);
    font-weight: 300;
  }
  h3 span {
    color: var(--lightGreen);
    font-weight: 100;
  }
  
  p{
    color: var(--white);
    font-weight:100;
    font-family: roboto;
    font-size: 10px;
  }
  .secondaryWrapper{
    // border: 1px solid red;
    display flex;
    justify-content: center;
    background-color: var(--almostBlack);
    padding: 20px 0;
  }
  .wrap{
    display:flex;
    flex-direction: column;
    // border: 1px solid blue;
    width: 94%;
    // align-items:center;
    margin: 0 0 0 30px;
  }
 

  @media (min-width: 768px){
    .wrap{
      width:96%;
    }
    .iconWrapper{
      font-size: 18px;
      width:4%;
    }
    h3 {
      font-size: 26px;
    }
  }
`;

export default Footer;
