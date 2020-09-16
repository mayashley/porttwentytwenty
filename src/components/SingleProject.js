import React from "react";
import styled from "styled-components";

const SingleProject = ({ title, subtitle, paragraph, imageLeft, image1, image2 }) => {
  return (
    <Container normal={imageLeft}>
      <LeftContainer>
        <h5>{subtitle}</h5>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </LeftContainer>
      <RightContainer>
        <img src={image1} />
        <p>IMG HERE</p>
      </RightContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: ${props => props.normal ? 'row' : 'row-reverse'}
`;

const LeftContainer = styled.div`
  border: 1px solid blue;
  width: 50%;
`;
const RightContainer = styled.div`
  border: 1px solid red;
  width: 50%;
`;

export default SingleProject;
