import { Navigate } from "react-router-dom";
import { getToken } from "../utils/manajer";

export const PublicRouter = ({children}) => {

  

  

  return getToken()
  ? <Navigate to = '/'/>
  : children

};
