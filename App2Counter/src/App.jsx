import './App.css'
import { useState } from 'react';
  
function App() {

//INITIAL VALUE
  let [ivalue,changecount] = useState(0);

//TO ADD TO THE VALUE
  const addValue = () => {
    if(ivalue <20){
      changecount(++ivalue);

    }
  }

// TO SUBSTRACT FROM THE VALUE
  const removevalue =() => {
    if(ivalue >0){
      changecount(--ivalue);
    }
  }
  

  return (
    <>
    <h1>New Counter Project</h1>
    <h2>Counter Value : {ivalue}</h2>
    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removevalue}>Remove Value</button>

    </>
     
  )


}

export default App
