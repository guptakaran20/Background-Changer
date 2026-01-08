import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div className = "w-full h-screen duration-200 "
    style = {{backgroundColor: color}}>
      <div className='absolute inset-x-0 bottom-0 h-16 flex justify-center items-center gap-4 pb-8'>
      <div className = "flex flex-wrap justify-center gap-3 px-2 py-2"> 
        <button className = "px-4 py-2 rounded-full hover:bg-red-600 duration-200"
        style = {{backgroundColor:"red"}} onClick = {() => setColor('red')}>Red</button>
        <button className = "px-4 py-2 rounded-full hover:bg-red-600 duration-200"
        style = {{backgroundColor:"green"}} onClick = {() => setColor('green')}>Green</button>
        <button className = "px-4 py-2 rounded-full text-amber-50 hover:bg-red-600 duration-200"
        style = {{backgroundColor:"black"}} onClick = {() => setColor('black')}>Black</button>
        <button className = "px-4 py-2 rounded-full hover:bg-red-600 duration-200"
        style = {{backgroundColor:"yellow"}} onClick = {() => setColor('yellow')}>Yellow</button>
        <button className = "px-4 py-2 rounded-full text-black hover:bg-red-600 duration-200"
        style = {{backgroundColor:"white"}} onClick = {() => setColor('white')}>White</button>
        <button className = "px-4 py-2 rounded-full hover:bg-red-600 duration-200"
        style = {{backgroundColor:"blue"}} onClick = {() => setColor('blue')}>Blue</button>
      </div>
      </div>
    </div>
  )
}

export default App
