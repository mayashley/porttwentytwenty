import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Links from "../constants/Links";

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };
  console.log(isOpen);
  return (
    <Wrapper>
      <nav className="navBar">
        <div className="navCenter">
          <h3>
            ashley<span>MAY</span>
          </h3>
          <Link type="button" className="logoBtn" onClick={toggleNav}>
            <FaAlignRight className="logoIcon" />
          </Link>
        </div>

        <div className={!isOpen && "hideNav"}>
          {Links.map((item, index) => {
            return (
              <Link key={index} className="navLinks" to={item.path}>
                {item.text}
              </Link>
            );
          })}
        </div>
      </nav>
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

  
  .logoBtn {
    background: transparent;
    border: none;
    outline: none;
  }
  .logoBtn:hover {
    cursor: pointer;
  }
  .logoIcon {
    color: var(--white);
    font-size: 1.5rem;
  }
  
  .hideNav {
    display: none;
  }
  .navLinks  {
    display: block;
    padding: 1rem 1.25rem;
    text-decoration: none;
    color: var(--white);
    font-weight: 100;
    overflow: hidden;
  }
  .navLinks:hover {
    color: var(--lightGreen);
  }
 
  

  @media screen and (min-width: 992px) {

    .logoBtn {
        display: none;
      }
     
`;
export default Navbar;
