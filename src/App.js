import React from 'react';
import './App.css';
import FunctionalComp from './FunctionalComponent'
import ClassComp from './ClassComponent'



export function App() {

  const click=()=>{

  }

  return (
  <div className="App">
    {/* <FunctionalComp click={click} name="Something"/> */}
    <ClassComp name="name 2"/>
  </div>

);


}

export const texp = "test"
const dexp = "dexp"
export default dexp;





























