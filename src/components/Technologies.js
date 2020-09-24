import React from "react";
import Icons from "../constants/Icons";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const Technologies = () => {
  console.log('Technologies rendered');

  return (
    // <Slide triggerOnce>
    <Wrapper>
      <div className="wrapperSecondary">
        {Icons.map((item, index) => {
          return (
            <div key={index} className="iconWrapper">
              <Fade delay={500}>
                <h3>{item.icon}</h3>
                {/* <p>{item.title}</p> */}
              </Fade>
            </div>
          );
        })}
      </div>
    </Wrapper>
    // </Slide>
  );
};
export default Technologies;

const Wrapper = styled.div`
.wrapperSecondary{
  // border: 1px solid red;
  display:flex;
  flex-direction: row;
  justify-content:center;
  margin: 0;
  background-color: var(--white);
  color: var(--almostBlack);
}
.iconWrapper{
  margin: 20px 10px;
  font-size: 18px;
}
@media screen and (min-width: 768px) {
  .iconWrapper{
    margin: 20px 30px;
    font-size: 30px;
  }
  @media screen and (min-width: 1280px) {
    .iconWrapper{
      margin: 20px 50px;
      font-size: 30px;
    }
}
`;
