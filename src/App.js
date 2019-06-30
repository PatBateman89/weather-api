import React from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';
import Chart from './components/Chart';
import { Bar } from 'react-chartjs-2';

const API_KEY = '763eaf05eabc8741220146179a0fa35f';

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
      labels: ['aaa'],
      datasets: [
        {
          label: 'Temperature',
          data: [],
          backgroundColor:['rgba(255,99,132,0.6)']
        }
      ]
    }
  }



  getWeather = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.list[0].main.temp,
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
              data: [data.list[0].main.temp],
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
                <div className="col-xs-5 title-container">
                  <Title />
                </div>
                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    temperature={this.state.temperature}
                    city={this.state.city}
                    country={this.state.country}
                    humidity={this.state.humidity}
                    description={this.state.description}
                    error={this.state.error}
                  />
                  <Bar
                    height="400"
                    width="400"
                    options={{ maintainAspectRatio: false }}
                    data={this.state.chartData}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
