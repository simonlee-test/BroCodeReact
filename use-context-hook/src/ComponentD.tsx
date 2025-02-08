import { useContext } from "react";
import { UserContext } from "./ComponentA";
const ComponentD = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      ComponentD
      <h2>{`Bye ${user}`}</h2>
    </div>
  );
}

export default ComponentD