import React from 'react';

const Form = (props) => (
  <div className="form-group justify-content-center">
    <form className="col-5 mx-auto" onSubmit={props.getWeather}>
      <input className="form-control" type="text" name="city" placeholder="city"/>
      <input className="form-control" type="text" name="country" placeholder="country"/>
      <button className="btn btn-success">Get Weather</button>
    </form>
  </div>
)

export default Form;
