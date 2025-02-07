import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState("green")

  useEffect(() => {
    document.title = `Count ${count} ${color}`;
  }, [count, color]);
  useEffect(() => {
    document.title = 'I am on mount from MyComponent';
  }, []);

  const addCount = () => {
    setCount((c) => c + 1);
  };
  const substractCount = () =>{
    setCount(c => c -1);
  }

  const changeColor = () =>{
    setColor(c => c==='green'? "red":"green")
  }

  return (
    <div>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add Count</button>
      <button onClick={substractCount}>Substract</button><br />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};

export { MyComponent };
