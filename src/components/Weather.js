import React from 'react';

const Weather = (props) => (
  <div>
    { props.error && <p>{ props.error }</p> }
    { props.description && <p>Conditions: { props.description }</p> }

  { props.temperature && <div class="card-deck mb-3 text-center">
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Temperature</h4>
        </div>
        <div class="card-body">
          { props.city && props.country && <h2 class="card-title pricing-card-title"> { props.temperature }°C</h2> }
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Location</h4>
        </div>
        <div class="card-body">
          { props.city && props.country && <h2 class="card-title pricing-card-title"> { props.city }, { props.country }</h2> }
          <h1 class="card-title pricing-card-title"></h1>
        </div>
      </div>
      <div class="card mb-4 box-shadow">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Humidity</h4>
        </div>
        <div class="card-body">
            { props.humidity && <h2 class="card-title pricing-card-title"> { props.humidity }%</h2> }
        </div>
      </div>
    </div> }

  </div>



)

export default Weather;
