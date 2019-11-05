import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import styled from "styled-components";


const Cate = styled.div`
   margin: 1em;
   display: inline-block;
   float: left;
`

export default function MenuExampleVerticalSecondary() {
    const [activeItem, setState] = useState('전체보기');

    const handleItemClick = (e, {name}) => {
        setState(name);
    };

    return (
        <Cate>
            <Menu pointing secondary vertical>
                <a
                    class='active item'
                    name='전체보기'
                    active={activeItem === 'home'}
                    onClick={handleItemClick}>
                    <b>전체보기</b>
                </a>
                <a
                    class='item'
                    name='react'
                    active={activeItem === 'messages'}
                    onClick={handleItemClick}>
                    react
                </a>
                <a
                    class='item'
                    name='react-hooks'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}>
                    react-hooks
                </a>
                <a
                    className='item'
                    name='java'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}>
                    java
                </a>
                <a
                    className='item'
                    name='python'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}>
                    python
                </a>
                <a
                    className='item'
                    name='C++'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}>
                    C++
                </a>
                <a
                    className='item'
                    name='etc'
                    active={activeItem === 'friends'}
                    onClick={handleItemClick}>
                    etc
                </a>
            </Menu>
        </Cate>
    )
}