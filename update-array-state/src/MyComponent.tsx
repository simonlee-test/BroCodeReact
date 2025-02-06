import { useState } from 'react';

const MyComponent = () => {
  const [foods, setFoods] = useState<string[]>(['Apple', 'Orange', 'Banana']);

  const handleAddFood = () => {
    let foodInput = document.getElementById('foodInput') as HTMLInputElement;
    const newFood = foodInput.value;
    setFoods((f) => [...f, newFood]);
    foodInput.value = '';
  };

  const handRemoveFood = (index: number) => {
    //use filter to create a new array where it satisfies i !== index
    //default pass in element and its respective index as in array.map()
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index} onClick={() => handRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="Enter food name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default MyComponent;
