import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
function MyComponent() {
  // const [number, setNumber] = useState(0)
  // const ref = useRef(0)

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    console.log("Component rendered")
  })

  const handleClick = () =>{
    inputRef.current?.focus();
    inputRef.current!.style.backgroundColor="yellow";
  }
  

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
      <input ref={inputRef}/>
    </>
  );
}

export default MyComponent