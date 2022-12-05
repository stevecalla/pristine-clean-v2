import Auth from "./auth";
import decode from "jwt-decode";

export const getManagerStatus = () => {
  const token = Auth.loggedIn() ? Auth.getToken() : null;
  const user = token && decode(token);
  const userId = token && user.data._id;
  const isManager = token && user.data.isManager;

  // console.log({token}, {userId}, {user})

  return isManager;
}