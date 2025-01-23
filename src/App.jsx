import { useState } from 'react'

import './App.css'
function customLogger(counter){
  console.log("from custom logger",counter)
}
function App() {
  const [counter, setCounter] = useState(0)

customLogger(counter)
  return (
    <>
     <h1>Custom Hooks {counter}</h1>
     <button onClick={()=>setCounter(count=>count+1)}>+</button>
     <button onClick={()=>setCounter(count=>count-1)}>-</button>
    </>
  )
}

export default App
