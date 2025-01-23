import { useState } from 'react'

import './App.css'
function useCustomLogger(counter){// to change this function to custom hook we need to use "use" convention,at the end of day it is nothing but a function
  console.log("from custom logger",counter)
}
function App() {
  const [counter, setCounter] = useState(0)

useCustomLogger(counter)
  return (
    <>
     <h1>Custom Hooks {counter}</h1>
     <button onClick={()=>setCounter(count=>count+1)}>+</button>
     <button onClick={()=>setCounter(count=>count-1)}>-</button>
    </>
  )
}

export default App
