import React, { Component } from 'react';
import styled from 'styled-components';
import Hero from '../Layout/Hero';
import Navigation from '../Layout/Navigation';

class Board extends Component {
    render() {
        return (
			<Layout>
				<Hero />
				<Navigation />
                 <img
							width="30%"
							height="35%"
							src="https://postfiles.pstatic.net/MjAxOTExMDdfODQg/MDAxNTczMTI2NDM0NzY1.yJ7obGNj0BOXU2aoVNH78FkaRwVdm5cqZpxC-z4TSGwg.Ecypaw7Q1HTB9rJqzstU3HRM6K4Z9rRITSrIcTU7yZMg.JPEG.ldu0131/KakaoTalk_20191107_203204750.jpg?type=w580"
							alt="me"/> 
                <div>
            <h1/>
            <h1/>
            <h1/>
            <h1/>
            <h1/>
            <h1/>
            <h1/>
            <h1/>
            <h1/>
            <h1/>       
            <h1> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>There's nothing holding me back.</em> </h1>
                </div>
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
export default Board;