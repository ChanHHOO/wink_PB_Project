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
			name: json.weather[0].main,
			icon: json.weather[0].icon,
		});
	});
}

componentDidMount() {
	this.getWeather()
}

render() {
    const { temperature, name, icon } = this.state;
    const img_url= "https://data.ac-illust.com/data/thumbnails/ea/ea31856d1e65d3763e11530541288ad4_t.jpeg";
	
    return (
		<div style={{textAlign:"center", minWidth:"100%", minHeight:"100%"}}>	 
            <h1/>
            <h1/>
			<h1> <em>Today Weather</em> </h1>
            <h1/>
            <h1/>
			<img alt="weather_icon" src={img_url}/>
            <h1/>
            <h1/>
			<h1> <em>temperature : {temperature} Celsius Degree</em></h1>
            <h1/>
            <h1/>
			<h1> <em>weather : {name}</em></h1>
		</div>
	);
            }}

export default Home;