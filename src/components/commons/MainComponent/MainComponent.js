import React from 'react';
import mainImage from '../../../images/main_image.jpg';
import styled from "styled-components";
import {Motion, spring} from "react-motion";
import jQuery from "jquery";

window.$ = window.jQuery = jQuery;
const LoginBotton = styled.div`
    width:100%;
    height:33%;
    background-color:rgb(0,0,0,0.1);
    color:white;
    border-bottom:1px solid rgb(255, 255, 255, 0.5);
    // border-top:1px solid rgb(255, 255, 255, 0.5);
    text-align:center;
`;
const LoginBotton2 = styled.div`
    width:100%;
    height:33%;
    background-color:rgb(0,0,0,0.1);
    color:white;
    border-bottom:1px solid rgb(255, 255, 255, 0.5);
    text-align:center;
`;
const LoginBotton3 = styled.div`
    width:100%;
    height:33%;
    background-color:rgb(0,0,0,0.1);
    color:white;
    border-bottom:1px solid rgb(255, 255, 255, 0.5);
    text-align:center;
`;
export default function MainComponent(){
    const handleMouseOver = (x)=>{
        //{transform:`translateX(${style.x}px)`,width:"100%", height:"100%"}
        console.log(11);
        window.$('.button1').css('transform',`translateX(${x}px)`)
    }
    return (
        <div className="background" style={{position:"absolute", width:"100%", height:"100%",left:"0px", top:"0px"}}>
            <div style={{position:"absolute",backgroundColor:"rgb(0,0,0,0.5)", zIndex:"2", width:"100%", height:"100%"}}></div>
            <div style={{position:"absolute",zIndex:"1", height:"100%", width:"100%", textAlign:"right"}}>
                <img src={mainImage} style={{position:"relative",weight:"100%", height:"100%"}}/>
            </div>
            <div style={{display:"flex",flexDirection:"column",position:"absolute", width:"30%", height:"70%", top:"100px", zIndex:3}}>
                <Motion
                    defaultStyle={{x:-200, opacity:0}}
                    style={{x:spring(0), opacity:spring(1)}}
                >
                    {
                        style =>(
                            <div>
                                <LoginBotton className="button1" onMouseOver={()=>handleMouseOver(200)}><h1 style={{position:"relative",top:"40%"}}>LOGIN</h1></LoginBotton>
                                <LoginBotton2 ><h1 style={{position:"relative",top:"40%"}}>LOGIN</h1></LoginBotton2>
                                <LoginBotton3 ><h1 style={{position:"relative",top:"40%"}}>LOGIN</h1></LoginBotton3>
                            </div>
                            )
                    }
                </Motion>

            </div>

        </div>
    )
}