import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from './Hero';
import Navigation from './Navigation';
import Home from './Home';

class Daun extends Component {
	render() {
		return (
			<Layout>
				<Hero />
				<Navigation />
				<Home/>
			</Layout>
		);
	}
}

const Layout = styled.div`
	margin: 0 auto;
	display: flex;
	width: 100%;
	flex-flow: row wrap;
`;
export default Daun;