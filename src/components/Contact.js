import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
      <Wrapper>
      <section>
        <h2>Let's Talk</h2>
        <div id="contact">
          <form 
           action="https://formspree.io/mvorwnwo"
           method="POST">
              <div className='info'>
              <p>Email<span> *</span></p>
              <input
                type="email"
                name="email"
                id="email"
                // placeholder="yourEmail@email.com"
                required
              />
            </div>
            <div className='info'>
              <p>Company Name</p>
              <input
                type="text"
                name="company name"
                id="email"
                // placeholder="Company Name"
                required
              />
            </div>
            <div className='info'>
              <p>First Name</p>
              <input
                type="text"
                name="name"
                id="name"
                // placeholder="First Name"
                required
              />
            </div>
            <div className='info'>
              <p>Last Name</p>
              <input
                type="text"
                name="name"
                id="name"
                // placeholder="Last Name"
                required
              />
            </div>
            <div className='info'>
              <p>Message</p>
              <textarea
                name="message"
                id="message"
                rows="8"
                // placeholder="Please leave us a message here."
                required
              />
            </div>
            <div className='info'>
              <input
              className='button'
                type="submit"
                value="submit here"
              />
            </div>
          </form>
        </div>
      </section>
      </Wrapper>
    )
  }

const Wrapper = styled.section`
section{
  display:flex;
  flex-direction: column;
  align-items: center;
  margin: 200px 0 0;
  // border: 1px solid red;
  background-color: var(--almostBlack);
  h2{
    color: var(--white);
    font-size: 58px;
    font-weight: 800;
    font-family: roboto;
    margin: 50px 0;
  }
  p{
    font-size: 12px;
    margin:0;
  }
  .info, input, textarea{
    margin:10px 0;
   width: 200px;
   border-radius:4px;
   color: var(--white);
   background-color: transparent;
   padding: 8px;
  }
  input, textarea{
    border: 1px solid var(--white);
  }
  span{
    color: red;
  }
.button{
    width:110px;
    height: 30px;
    color: var(--almostBlack);
    background-image: linear-gradient(to right, rgba(143, 215, 87, 1), rgba(58, 128, 4, 1));
    border-radius:4px;
    border: none;
    margin: 50px 0;
}
@media (min-width: 768px){
  .button {
  width:120px;
  height: 34px;
 }
 h2{
   font-size: 68px;
 }
 .info, input, textarea{
   width: 500px;
 }
}
}
`

  export default Contact;