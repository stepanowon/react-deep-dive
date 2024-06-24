import { useState } from "react"
import Child from "./Child"
import TestComponent from "./TestComponent"

const App = () => {
  const [ name ] = useState<string>("이몽룡");
  return (
    <div>
      <TestComponent name={name}>
        <Child></Child>
      </TestComponent>
    </div>
  )
}

export default App