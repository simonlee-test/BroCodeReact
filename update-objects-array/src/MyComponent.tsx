import React, { useState } from 'react';

interface Car{
  carYear: number;
  carMake: string;
  carModel: string;
}

const MyComponent = () => {
  const[cars, setCars] = useState<Car[]>([])
  const[carYear, setCarYear] = useState(new Date().getFullYear())
  const[carMake, setCarMake] = useState("")
  const[carModel,setCarModel]= useState("")

  const handleAddCar = () =>{
    const newCar = { carYear, carMake, carModel };
    setCars(c => [...c, newCar])
    setCarMake("")
    setCarModel("")
    setCarYear(new Date().getFullYear())
  }

  const handleRemoveCar = (index: number) =>{
    setCars(cars.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>List of Car Objects</h1>
      <ol>{cars.map((car, index)=> <li key={index} onClick={() => handleRemoveCar(index)} >{car.carYear} {car.carMake} {car.carModel}</li> )}</ol>
      <input type="text" value={carYear} onChange={e=>setCarYear(parseInt(e.target.value))}/><br />
      <input type="text" value={carMake} onChange={e=>setCarMake(e.target.value)}/><br />
      <input type="text" value={carModel} onChange={e=>setCarModel(e.target.value)}/><br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
};

export default MyComponent;
