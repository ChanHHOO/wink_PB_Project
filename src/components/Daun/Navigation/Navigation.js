import React, { Component } from 'react';
import styled from 'styled-components';

class Navigation extends Component {
	render() {
		return (
			<Nav>
				<NavList>
					<NavItem>1</NavItem>
					<NavItem>2</NavItem>
					<NavItem>3</NavItem>
					<NavItem>4</NavItem>
					<NavItem>5</NavItem>
					<NavItem>6</NavItem>
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