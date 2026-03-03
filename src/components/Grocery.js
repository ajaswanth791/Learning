import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Grocery = () => {
   const { userLoggedIn } = useContext(UserContext);

   return <>
      <h1>Grocery items are here...........</h1>
      <h1>{userLoggedIn}</h1>
   </>
};

export default Grocery;
