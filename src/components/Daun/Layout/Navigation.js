import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Navigation extends Component {
    render() {
        return (
			<Nav>
				<NavList>
					<NavItem style={{marginLeft:"70px"}}><Link to='/Daun/About'><font color="black" size="5"><em>About</em></font></Link></NavItem>
					<NavItem style={{marginLeft:"200px"}}><Link to='/Daun/Board'><font color="black" size="5"><em>Board</em></font></Link></NavItem>
					<NavItem style={{marginLeft:"200px"}}><Link to='/Daun/MyBoard'><font color="black" size="5"><em>MyBoard</em></font></Link></NavItem>
					<NavItem style={{marginLeft:"200px"}}><Link to='/Daun/MyPage'><font color="black" size="5"><em>MyPage</em></font></Link></NavItem>
				</NavList>
			</Nav>
		);
					}
}

export default Navigation;

const Nav = styled.div`
	width: 100%;
	height: 30px;
	border-bottom: 1px solid #d1d8e4;
`;

const NavList = styled.ul`
	width: 1080px;
	display: flex;
	margin: 0 auto;
`;

const NavItem = styled.li`
	width: 60px;
	margin-left: 18px;
	margin-top: 5px;
display: flex;
`;