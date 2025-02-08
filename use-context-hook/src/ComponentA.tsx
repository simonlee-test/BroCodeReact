import { createContext} from "react";
import ComponentB from "./ComponentB"

export const UserContext = createContext<string| null>(null);
const ComponentA = () => {
  let user = "Simone"
  
  return (
    <div className="box">ComponentA
    <h2>{`Hello ${user}`}</h2>
    <UserContext.Provider value = {user}>
      <ComponentB />
    </UserContext.Provider>
    </div>
  )
}

export default ComponentA