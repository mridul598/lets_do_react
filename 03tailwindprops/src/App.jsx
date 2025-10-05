import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './components/Card'


function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Mridul",
    age: 22,
    country: "India"
  }
 
  let newArr = [1,2,2,2,3,4,5,5,6,7,8,9]
  return (
    <>
    <h1 className='bg-green-500 text-white p-6 italic text-3xl border-4 border-red-500 rounded'>tailwind test</h1>

    <Card username="chaiaurcode" btnText="Click Me" />
    <Card username="The Cool Guy Mridul"  />
    </>
  )
}

export default App
