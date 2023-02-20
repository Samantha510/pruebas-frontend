
import { Navigate, Route, Routes } from "react-router-dom"
import { Informacion, Menu, Register } from "../modules"
import { Catalogo } from "../modules/users/Catalogo"
import { Users } from "../modules/users/Users"

import { PrivateRouter } from "./PrivateRouter"


export const PrivateRouterContainer = () => {
  return (
    
   <Routes>
  
    <Route element = {<PrivateRouter rols = {[1,2]}/>}>
   
      <Route path="/users" element={<Users/>}/>
      <Route path="/catalogo" element={<Catalogo/>}/>
    </Route>

    <Route element = {<PrivateRouter rols = {[3]}/>}>
      <Route path="/informacion" element={<Informacion/>}/>
    </Route>

    <Route element = {<PrivateRouter rols = {[1,2,3]}/>}>
      <Route path="/" element={<Menu/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/*" element={<Navigate to = '/'/>}/>
    </Route>
   </Routes>
  )
}
