import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import Links from "../constants/Links";

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  console.log(isOpen);
  return (
    <Wrapper>
      <nav className="navBar">
        <div className="navCenter">
          <h3>
            ashley<span>May</span>
          </h3>
          <button className="logoBtn" onClick={() => setNav(!isOpen)}>
            <FaAlignRight className="logoIcon" />
          </button>
        </div>

        <div className={!isOpen ? "hideNav" : null}>
          <div className="navLinks">
          <a href="#projects">my work</a>
          <a href="#contact">lets talk</a>
          </div>
        </div>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.nav`
.navBar {
    display: flex;
    flex-direction: column;
    // border: 1px solid red;
    width: 100%;
    padding:  0 50px;
    background-color: var(--almostBlack);
    z-index: 10;
    
}
.navCenter{
    // border: 1px solid green;
    display:flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
}
  h3 {
    color: var(--white);
    font-weight: 300;
  }
  h3 span {
    color: var(--lightGreen);
    font-weight: 100;
  }

  
  .logoBtn {
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    margin:0;
  }
  .logoBtn:hover {
    cursor: pointer;
  }
  .logoBtn {
    color: var(--white);
    font-size: 1.5rem;
  }
  
  .hideNav {
    display: none;
  }
  .navLinks a {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    padding: 0 20px 0 0;
    text-decoration: none;
   color: var(--white);
    align-items: center;
    font-weight: 100;
    overflow: hidden;
    transition-timing-function: ease-in-out;
    transition-duration: 0.4s
    // border: 1px solid red;
  }
  .navLinks a:hover {
    color: var(--lightGreen);
  }

  

  @media screen and (min-width: 992px) {

    .logoBtn {
        display: none;
      }

      .navBar {
          flex-direction: row;
          justify-content: space-between;
          align-items:center;
      }
      .hideNav {
          display:flex;
      }
      .navLinks  {
        justify-content: flex-end;
        display: flex;
        font-size: 18px;
      }
      h3{
        font-size: 26px;
      }
     
`;
export default Navbar;
