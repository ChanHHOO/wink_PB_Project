import React from 'react';
import styled from "styled-components";
import Categori from "./Categori";
import Navbar from "../commons/NavbarComponent/Navbar";
import PostItem from "./PostItem";

const Title = styled.div`
    font-size:4em;
    display:block;
    text-align:center;
    padding:0px;
    margin:0px;
    line-height:3em;
`

export default function H0zzaeBlogComponent(){
    return(
        <div>
                <Title>H0zzaeBlog</Title>
                <Navbar/>
                <Categori></Categori>
                <PostItem/>
        </div>
    )
}