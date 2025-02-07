import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log("Event Listener Added");
    
    //cleanup function, would run everytime:
    //1. before this component re-render, with old value
    //2. after the component is removed from dom (unmount)
    return()=>{
      window.removeEventListener("resize", handleResize);
      console.log("Event listener removed")
    }
  });

  useEffect(()=>{document.title=`${width}px x ${height}px`}, [width, height])

  const handleResize = () => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  };

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
};

export { MyComponent };
