import SignUp from "../pages/auth/SignUp";
import Home from "../pages/users/Home";

export const AllRoutesObj = {
  //  KEY     VALUE
  home: { name: "Home", path: "/", ex: true, icon: "", comp: <Home /> },
  signUp: { name: "Sign Up", path: "/signUp", ex: true, icon: "", comp: <SignUp /> }
};

export const AllRoutesArray = Object.values(AllRoutesObj);
// same as saying:
// let arr  = []
// arr.push(AllRoutesObj.home)
