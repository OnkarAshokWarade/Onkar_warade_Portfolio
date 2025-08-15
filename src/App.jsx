import { useEffect, useState } from 'react'
import './App.css'
import NET from 'vanta/src/vanta.net'
function App() {
useEffect(()=>{
   VANTA.NET({
  el: "#vanta",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 180.00,
  minWidth: 180.00,
  scale: 1.00,
  scaleMobile: 1.00
})
},[])
  return (
    <>
  <div className="app">
    <div className="bg" id="vanta">

    </div>
  </div>
  
    </>
  )
}

export default App
