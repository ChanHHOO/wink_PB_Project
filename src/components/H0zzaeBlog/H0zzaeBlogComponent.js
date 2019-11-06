import React from 'react';
import Title from "./Title";
import Navbar from "../commons/NavbarComponent/Navbar";
import Categori from "./CategoriUi";
import PostItem from "./Post/PostItemBlogMain";

export default function H0zzaeBlogComponent(){
    return(
        <div>
                <Title/>
                <Navbar/>
                <Categori></Categori>
                <PostItem/>
        </div>
    )
}