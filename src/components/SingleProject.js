import React from "react";
import styled from "styled-components";

const SingleProject = ({ title, subtitle, paragraph, imageLeft, image1, image2 }) => {
  return (
    
    <Container normal={imageLeft}>
      <LeftContainer>
        <h5>{subtitle}</h5>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <button
          alt="see my work"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
              // need to add the location for the link
            }}> view this project</button>
      </LeftContainer>
      <RightContainer>
        <img alt="desktop design" className="desktopImg" src={image1} />
        <img alt="mobile design" className="mobileImg"  src={image2} />
      </RightContainer>
    </Container>
    
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top:100px;
  flex-direction: column;

  @media screen and (min-width: 992px) {
  flex-direction: ${props => props.normal ? 'row' : 'row-reverse'}
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
    button{
      width:110px;
      height: 30px;
        margin: 20px 0;
        color: var(--almostBlack);
        background-image: linear-gradient(to right, rgba(143, 215, 87, 1), rgba(58, 128, 4, 1));
        border-radius:4px;
        border: none;
    
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
      button{
        width:110px;
        height: 30px;
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
