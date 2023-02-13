import { Route, Routes } from "react-router-dom"
import { Login, Register } from "../modules"
import { PrivateRouterContainer } from "./PrivateRouterContainer"
import { PublicRouter } from "./PublicRouter"


export const AppRouter = () => {
  return (
   <>
   <Routes>
    <Route path="login" element={
    <PublicRouter>
      <Login/>
    </PublicRouter>}/>
    <Route path="register" element={
    <PublicRouter>
      <Register/>
    </PublicRouter>}/>
    <Route path="/*" element={<PrivateRouterContainer/>}/>
   </Routes>      
   </>
  )

}
