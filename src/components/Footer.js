import React from 'react';
import styled from 'styled-components';
import SocialIcons from '../constants/SocialIcons';

const Footer = () => {
    return (
        <Wrapper>
      <div className="secondaryWrapper">
          <div className="wrap">
          <h3>
            ashley<span>May</span>
          </h3>
          </div>
        {SocialIcons.map((item, index) => {
          return <div key={index} className='iconWrapper'>
              <h4>{item.icon}</h4>
          </div>;
        })}
      </div>
      </Wrapper>
    );
  };

const Wrapper = styled.nav`
h3 {
    color: var(--white);
    font-weight: 300;
    margin: 0 0 0 30px;
  }
  h3 span {
    color: var(--lightGreen);
    font-weight: 100;
  }
  .h4{
      color: var(--almostBlack);
  }
  .secondaryWrapper{
    border: 1px solid red;
    display flex;
    justify-content: center;
    background-color: var(--grey);
    padding: 20px 0;
  }
  .wrap{
    display:flex;
    border: 1px solid blue;
    width: 95%;
    align-items:center;
  }
  .iconWrapper{
    display:flex;
    width: 2%;
    border: 1px solid green;
    align-items: center;
  }
`

  export default Footer;

