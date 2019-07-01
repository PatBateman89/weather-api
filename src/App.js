import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import { Bar } from 'react-chartjs-2';
require('dotenv').config()

class App extends React.Component {


  state = {
    poop: 'Pooop oopppoooooyyy ooop',
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    chartData: {
      labels: ['Temperature'],
      datasets: [
        {
          label: 'Temperature',
          data: [],
          backgroundColor:['rgba(255,99,132,0.6)'],
          barPercentage: 0.1,
          barThickness: 0.2,
          maxBarThickness: 2
        }
      ]
    },
    options: {
      scales: {
        xAxes: [{
          barPercentage: 1,
          barThickness: 200,
          maxBarThickness: 200,
          minBarLength: 20,
          categoryPercentage: 1,
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  }



  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_key = process.env.REACT_APP_API_KEY
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city},${country}&appid=${api_key}`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: Math.round(data.list[0].main.temp - 273.15),
        city: data.list[0].name,
        country: data.list[0].sys.country,
        humidity: data.list[0].main.humidity,
        description: data.list[0].weather[0].description,
        error: "",
        chartData: {
          labels: [data.list[0].name],
          datasets: [
            {
              label: 'Temperature',
              data: [data.list[0].main.temp - 273.15],
              backgroundColor:['rgba(255,99,132,0.6)']
            }
          ]
        }
      })
    } else {
      this.setState({
        error: "Please enter the values"
      })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xl-12 title-container text-center">
                  <Title />
                </div>
              </div>
              <div className="col-xs-6 form-container text-center">
                <Form getWeather={this.getWeather}/>
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country={this.state.country}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>
              <Bar
                options={this.state.options}
                data={this.state.chartData}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
