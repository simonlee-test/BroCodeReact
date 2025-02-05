import { ChangeEvent, useState } from 'react';

const MyComponent = () => {
  const [car, setCar] = useState({
    year: 0,
    make: 'Ford',
    model: 'Mustang',
  });

  const handleMakeChange = (event:ChangeEvent<HTMLInputElement>) =>{
    setCar((c) => ({...c, make: event.target.value}))
                  //need to include extra bracket to indicate that we are returning an object
  }

  return (
    <div>
      <p>
        Your favorite car is: {car.year} {car.make} {car.model}
      </p>
      <input
        type="number"
        value={car.year}
        onChange={(e) => setCar(prevCar => ({ ...prevCar, year: parseInt(e.target.value) }))}
      />
      <br />
      <input
        type="text"
        value={car.make}
        // onChange={handleMakeChange}
        onChange={(e)=>{setCar((c)=>({...c, make:e.target.value}))}}
      />
      <br />
      <input
        type="text"
        value={car.model}
        onChange={(e) => setCar({ ...car, model: e.target.value })}
      />
      <br />
    </div>
  );
};

export default MyComponent;
