import './App.css'
import Axious from './Components/Axious/Axious'
import Navbar from './Components/Navbar/Navbar'
import LineChart from './Components/PriceOption/Chart/LineChart'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {


  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-2xl font-semibold text-center'>Price option project</h1>
    <PriceOptions></PriceOptions>

     
     <LineChart ></LineChart>
     <Axious></Axious>
     
    </>
  )
}

export default App
