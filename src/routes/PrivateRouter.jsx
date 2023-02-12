import { Navigate, Outlet } from "react-router-dom";
import { NotFound } from "../UI";
import { getRol, getToken } from "../utils/manajer";

export const PrivateRouter = ({ rols }) => {
  let count = 0;
  const token = getToken();
  const rol = getRol();

  if (token) {
    for (let i = 0; i < rols.length; i++) {
      if (rol === rols[i].toString()) {
        count++;
        break;
      }
    }
  }

  return (
    token ? 
      count > 0 ?
      <Outlet/> 
      : <NotFound/>
    : <Navigate to = '/login'/>
  )
};
