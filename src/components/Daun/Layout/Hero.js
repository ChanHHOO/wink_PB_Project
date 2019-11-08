import React, { Component } from 'react';
import styled from 'styled-components';

class Header extends Component {
	render() {
		return (
		    <Container>
				<Element>
					<ShortCut><font color = "white"> <em> LIM DAUN </em></font> </ShortCut>
					<Logo>
						<img
							width="100%"
							height="100%"
							src="https://postfiles.pstatic.net/MjAxOTExMDZfMjc2/MDAxNTczMDM1MzM0NjA2.j8t0pFiQ9Oa1t67XkoYn9AtYwI4geUZ7oTPs3iiQCTMg.pV-JCnUm1n4xYMwMlEb5jLOjjs9CCGuGlHaDvByH7esg.JPEG.ldu0131/KakaoTalk_20191106_190537008_(2).jpg?type=w580"
							alt="logo"/>
					</Logo>
					<Search><br/><font size="7" color="white">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>POWER WINK</em></font></Search>
				</Element>
			</Container>
		);
	}
}

export default Header;

const Container = styled.div`
	width: 100%;
	border-bottom: 1px solid #did8e4;
`
const Element = styled.div`
	margin: 0 auto;
	width: 1080px;
	height: 100px;
	display: flex;
	flex-flow: row wrap;
`

const ShortCut = styled.div`
	order: 1;
	width: 100%;
	height: 20px;
	text-align: right;
	background-color:BLACK;
`

const Logo = styled.div`
	order: 2;
	width: 200px;
	height: 80px;
`

const Search = styled.div`
	order: 3;
    width: 880px;
	background-color:BLACK;
	text-align: left;
`