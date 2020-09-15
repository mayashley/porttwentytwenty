import React, { Component } from 'react';
import styled from "styled-components";

class Lead extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <Wrapper>
            <div className='top-menu-lead'>
                {this.text}
            </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
.top-menu-lead {
    padding: 10px;
    background-color: #000000;
    color: white;
    display: inline-block;
    float: left;
    font-size: 18px;
}

@media screen and (max-width: 600px) {
    .top-menu-lead {
        position: absolute;
        top: 10px;
        left: 10px;
        float: none;
    }
}
`

export default Lead;