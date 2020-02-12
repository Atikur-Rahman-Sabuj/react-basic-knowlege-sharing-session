import React from 'react';
import { Link } from 'react-router-dom';



function FunctionalComponent(props) {

  
  return (
    <div className="App">
      Hello World from functional component {props.name}
      <Link to="/">Go to home</Link>
    </div>
  );


}

export default FunctionalComponent;
