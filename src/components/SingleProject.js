import React from "react";
import styled from "styled-components";
import { Fade, Slide } from "react-awesome-reveal";

const SingleProject = ({
  design,
  live,
  code,
  title,
  subtitle,
  paragraph,
  imageLeft,
  image1,
  image2,
}) => {
  return (
    <Fade delay={300}>
    <Container normal={imageLeft}>
      <LeftContainer>
        {/* <Slide triggerOnce direction="right"> */}
        <h5>{subtitle}</h5>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <div className="linkRow">
          {design && (
            <a href={design} target="_blank" rel="noopener noreferrer">
              see the design
            </a>
          )}
          {code && (
            <a href={code} target="_blank" rel="noopener noreferrer">
              see the code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer">
              see it live
            </a>
          )}
        </div>
        {/* </Slide> */}
      </LeftContainer>

      <RightContainer>
        <img alt="desktop design" className="desktopImg" src={image1} />
        <img alt="mobile design" className="mobileImg" src={image2} />
      </RightContainer>
    </Container>
    </Fade>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;

  @media screen and (min-width: 992px) {
    flex-direction: ${(props) => (props.normal ? "row" : "row-reverse")};
  }
`;

const LeftContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
  // border: 1px solid blue;
  width: 100%;
  margin: 0;
  h5{
      font-family: Roboto;
      font-weight: 300;
      color: var(--grey);
      font-size: 12px;
      margin: 0 0 10px;
      text-transform:uppercase;
    }
    h2{
      font-family: Roboto;
      font-weight: 800;
      color: var(--almostBlack);
      font-size: 38px;
      margin: 0 0 10px;
      text-transform:capitalize;
    }
    p{
      font-family: Roboto;
      font-weight: 300;
      color: var(--almostBlack);
      font-size: 14px; 
      text-transform:capitalize;
      width: 60%;
      text-align:center;
    }
    a{
      width:110px;
      height: 30px;
      font-size: 12px;
      text-decoration: none;
        margin: 10px 0;
        color: var(--almostBlack);
        background-image: linear-gradient(to right, rgba(143, 215, 87, 1), rgba(58, 128, 4, 1));
        border-radius:4px;
        border: none;
        display:flex;
        align-items:center;
        justify-content:center;
        font-weight: 400;
      }
    }
  }

  @media screen and (min-width: 600px) {
    h5{
      font-family: Roboto;
      font-weight: 300;
      color: var(--grey);
      font-size: 14px;
      margin: 0 0 10px;
      text-transform:uppercase;
    }
    h2{
      font-family: Roboto;
      font-weight: 800;
      color: var(--almostBlack);
      font-size: 48px;
      margin: 0 0 10px;
      text-transform:capitalize;
    }
    p{
      font-family: Roboto;
      font-weight: 300;
      color: var(--almostBlack);
      font-size: 14px; 
      text-transform:capitalize;
      width: 60%;
      text-align:center;
    }
   .linkRow{
    //  border: 1px solid red;
     display:flex;
   }
a{
  margin: 20px 10px;
}
  }
      }


  @media screen and (min-width: 992px) {
    // border: 1px solid blue;
    width: 50%;
    margin: 0 50px;
    display:flex;
  align-items: flex-start;
    h5{
        font-size: 18px;
      }
      h2{
        font-size: 48px; 
      }
      p{
        font-size: 22px; 
        text-align:left;
      }
      a{
        width:110px;
        height: 30px;
         font-size: 12px;
      text-decoration: none;
      }
    }
      }
      @media screen and (min-width: 1100px) {
        // border: 1px solid blue;
        width: 50%;
        margin: 0 50px;
        display:flex;
      align-items: flex-start;
        h5{
            font-size: 18px;
          }
          h2{
            font-size: 56px; 
          }
          p{
            font-size: 22px; 
          }
        }
          }
`;
const RightContainer = styled.div`
  // border: 1px solid red;
  width: 100%;
  margin: 0;

  .desktopImg{
    max-width:75%;
   
  }
  .mobileImg{
    position: relative;
    max-width: 25%;
    margin: 60px -60px; 
  z-index:-100;
  }
  @media screen and (min-width: 400px){
    .mobileImg{
      margin: 90px -90px; 
    }
    @media screen and (min-width: 636px){
      .mobileImg{
        margin: 110px -120px; 
      }
    }
    @media screen and (min-width: 839px){
      .mobileImg{
        margin: 110px -140px; 
      }
    }
  @media screen and (min-width: 992px){
    // border: 1px solid red;
    width: 50%;
    margin: 0 50px;
  
    .desktopImg{
      max-width:75%;
    }
    .mobileImg{
      position: relative;
      max-width: 25%;
      margin: 90px -100px; 
    z-index:-100;
    }
  }
  @media screen and (min-width: 1606px){
    // border: 1px solid red;
    width: 50%;
    margin: 0 50px;
  
    .desktopImg{
      max-width:75%;
    }
    .mobileImg{
      position: relative;
      max-width: 25%;
      margin: 100px -120px; 
    z-index:-100;
    }
  }
 
`;

export default SingleProject;
