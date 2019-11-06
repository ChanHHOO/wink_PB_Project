import React, { Component } from 'react';

const API_KEY = 'e02f1a5051c11b2443e58ab5294c0780';

class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			temperature: 0,
			name: '',
			icon: '',
		}
	}

getWeather = () => {
	fetch(`http://api.openweathermap.org/data/2.5/weather?q=Seoul&APPID=${API_KEY}`)
	.then(response => response.json())
	.then(json => {
		this.setState({
			temperature: Math.floor(json.main.temp - 273.15),
			name: json.weather[0].name,
			icon: json.weather[0].icon,
		});
	});
}

componentDidMount() {
	this.getWeather()
}

render() {
	const { temperature, name, icon } = this.state;
	const img_url = 'http://openweathermap.org/img/w/${icon}.png';
	
	return (
		<>	 
			<h1> <em>Today Weather</em> </h1>
			<img alt="weater_icon" src={img_url}/>
			<h3> temperature : {temperature} ¢ªC</h3>
			<h3> weather : {name}</h3>
		</>
	);
}}

export default Home;