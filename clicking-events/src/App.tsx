import Button from "./Button"
import { MouseEvent } from "react";
function App() {
  let count: number = 0;
  const handleClick = (name:string) =>{
    count++;
    if (count < 3){
      console.log(`${name} clicked ${count} times!`)
    }
    else{
      console.log('Ouch! Stop Clicking me');
    }
  }

  const handleDoubleClick = (e:MouseEvent) => {
    console.log("Double Clicked!")
    e.currentTarget.textContent="Woi Stopped!"
    if (count > 5){
      const target = e.target as HTMLButtonElement;
      Object.assign(target.style, {
        display: "None"
      });
    }
  }

  return (
    <>
      <Button
        onClick={() => handleClick("Simon")}
        onDoubleClick={handleDoubleClick}
      />
    </>
  );
}

export default App
