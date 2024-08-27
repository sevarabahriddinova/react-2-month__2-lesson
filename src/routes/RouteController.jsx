import Register  from "./register/Register"
import Home from "./home/Home"
import { Routes,Route } from "react-router-dom"

const RouteController = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="register" element={<Register/>}/>
      
    </Routes>
  )
}

export default RouteController
