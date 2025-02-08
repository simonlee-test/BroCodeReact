import ComponentD from "./ComponentD"
import { useContext } from 'react';
import { UserContext } from './ComponentA';

const ComponentC = () => {
  const user = useContext(UserContext);

  return (
    <div className='box'>ComponentC
    <h2>{`Hello again ${user}`}</h2>
    <ComponentD />
    </div>
  )
}

export default ComponentC