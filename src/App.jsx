import { useState } from 'react'

import './App.css'
function useLogger(counter){// to change this function to custom hook we need to use "use" convention,at the end of day it is nothing but a function
  console.log("from custom logger",counter)
}
function App() {
  
function useCounter(){
  const [counter, setCounter] = useState(0)
  const incrementCounter=()=>setCounter(count=>count+1)
  const decrementCounter=()=>setCounter(count=>count-1)
return {counter,incrementCounter,decrementCounter}
}
const {counter,incrementCounter,decrementCounter}=useCounter()
useLogger(counter)
  return (
    <>
     <h1>Custom Hooks {counter}</h1>
     <button onClick={incrementCounter}>+</button>
     <button onClick={decrementCounter}>-</button>
    </>
  )
}

export default App
