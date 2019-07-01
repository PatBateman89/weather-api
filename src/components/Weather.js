import React from 'react';

const Weather = (props) => (
  <div>
    { props.error && <p>{ props.error }</p> }
    { props.description && <p>Conditions: { props.description }</p> }

  { props.temperature && <div className="card-deck mb-3 text-center">
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Temperature</h4>
        </div>
        <div className="card-body">
          { props.city && props.country && <h2 className="card-title pricing-card-title"> { props.temperature }°C</h2> }
        </div>
      </div>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Location</h4>
        </div>
        <div className="card-body">
          { props.city && props.country && <h2 className="card-title pricing-card-title"> { props.city }, { props.country }</h2> }
          <h1 className="card-title pricing-card-title"></h1>
        </div>
      </div>
      <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">Humidity</h4>
        </div>
        <div className="card-body">
            { props.humidity && <h2 className="card-title pricing-card-title"> { props.humidity }%</h2> }
        </div>
      </div>
    </div> }

  </div>



)

export default Weather;
