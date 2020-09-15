import React, { Component } from 'react';
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import Item from '../constants/Item'
import Lead from '../constants/Lead'


class TopMenu extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu_class: '',
    }
  }

  setToggleTopMenuClass = () => {
    if (this.state.menu_class === '') {
      this.setState({
        menu_class: 'toggled',
      })
    } else {
      this.setState({
        menu_class: '',
      })
    }
  }


  render = () => {
    let top_menu_class = `top-menu ${this.state.menu_class}`
    return (
      <Wrapper>
        <div>
          <div className={top_menu_class} >
            <Lead text="This Is Your Title!" />
            <div className='left'>
              <Item text='Left1'/>
              <Item text='Left2'/>
            </div>
            <div className='right'>
              <Item text='Right1' />
              <Item text='Right2' />
            </div>
            <i icon={FaBars} className='top-menu-icon' onClick={this.setToggleTopMenuClass}/>
            <div className='clear-fix' />
          </div>
        </div>
        </Wrapper>
    )
  }
}

const Wrapper = styled.section`
.top-menu {
  background-color: grey;
  padding: 20px 50px 20px 50px;
  user-select: none;
}

.top-menu > .right {
  float: right;
}

.top-menu > .right > * {
  margin-left: 5px;
}

.top-menu > .left {
  float: left;
}

.top-menu > .left > * {
  margin-right: 5px;
}

.top-menu > .left > *, .top-menu > .right > * {
  padding: 11.4px;
  display: inline-block;
  text-align: center;
  min-width: 50px;
}

.top-menu *:hover{
  cursor: pointer;
}

.clear-fix {
  clear: both;
}

.top-menu .top-menu-icon {
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}

@media screen and (max-width: 600px) {
  .top-menu {
      padding: 40px 20px 20px 20px;
      max-height: 0;
      overflow: hidden;
  }

  .top-menu > .left, .top-menu > .right {
      display: none;
  }

  .top-menu-icon {
      display: block !important;
  }
}

@media screen and (max-width: 600px) {
  .top-menu.toggled {
      padding: 60px 0 0 0;
      max-height: 1500px;
      transition: max-height 1s;
  }

  .top-menu.toggled > .left {
      border-bottom: 1px solid black;
      margin: 15px 0 0 0 ;
  }

  .top-menu.toggled *:not(.top-menu-lead):not(.top-menu-icon) {
      float: none;
      display: block !important;
      text-align: left;
      margin: 0;
  }
}
`;

export default TopMenu;