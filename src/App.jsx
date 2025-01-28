import { Outlet } from "react-router-dom"
import "./App.css"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"

function App() {

  return (
    <div className="bg-color text-color h-full w-full">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
