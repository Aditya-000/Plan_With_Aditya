import React from 'react';
import data from './data';
import { useState } from 'react';
import "./index.css"
import Tours from "./components/Tours";



const App=()=>{

  const[tours,setTours] = useState(data);

  function removetour(id){
      const newTours = tours.filter(tour => tour.id !==id);
      setTours(newTours)
  }

  if(tours.length===0){
    return(
      <div className="refresh">
            <h2>No Tours Left</h2>
            <button className="btn-white" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    );
  }


  return(
    <div className="app">
        <Tours tours={tours} removetour={removetour}></Tours>
    </div>
  )
}


export default App;

