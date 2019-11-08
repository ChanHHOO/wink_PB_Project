import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from './Layout/Hero';
import Navigation from './Layout/Navigation';
import Router from './Routes/Router';

class Daun extends Component {
	render() {
		return (
			<Layout>
				<Hero />
				<Navigation />
                    <Router />
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