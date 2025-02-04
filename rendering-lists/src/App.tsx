import List, {Item} from "./List"
function App() {
  const fruits: Item[] = [
    { id: 1, name: 'apple', calories: 95 },
    { id: 2, name: 'orange', calories: 45 },
    { id: 3, name: 'banana', calories: 105 },
    { id: 4, name: 'coconut', calories: 159 },
    { id: 5, name: 'pineapple', calories: 37 },
  ];

  const vegetables: Item[] = [
    { id: 1, name: 'potatoes', calories: 110 },
    { id: 2, name: 'celery', calories: 15 },
    { id: 3, name: 'carrots', calories: 25 },
    { id: 4, name: 'corn', calories: 63 },
    { id: 5, name: 'brocoli', calories: 50 },
  ];

  return (
    <>
      {fruits.length > 0 && <List category="Fruits" items={fruits}/>}
      {vegetables.length > 0 && <List category="Vegetables" items={vegetables}/>}
    </>
  );
}

export default App
