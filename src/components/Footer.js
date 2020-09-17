import React from 'react';
import styled from 'styled-components';
import SocialIcons from '../constants/SocialIcons';

const Footer = () => {
    return (
        <Wrapper>
      <div>
          <div>
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
  }
  h3 span {
    color: var(--lightGreen);
    font-weight: 100;
  }
  .h4{
      color: var(--almostBlack);
  }
`

  export default Footer;

