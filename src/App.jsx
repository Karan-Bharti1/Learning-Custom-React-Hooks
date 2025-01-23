
import './App.css'
import { useLogger } from './useLogger'
import { useCounter } from './useCounter'
function App() {
const {counter,incrementCounter,decrementCounter}=useCounter(10)
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
