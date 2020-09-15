import React, { Component } from 'react';
import styled from "styled-components";



class Item extends Component {

    constructor(props) {
        super(props)
        this.text = props.text
    }

    render() {
        return (
            <Wrapper>
            <div className='top-menu-item'>
                {this.text}
            </div>
            </Wrapper>
        )
    }
}

const Wrapper = styled.section`
.top-menu-item:hover {
    background-color: white;
}
`

export default Item;