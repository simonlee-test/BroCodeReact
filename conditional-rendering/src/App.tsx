import UserGreeting from "./UserGreeting"

function App() {
  
  return (
    <>
      <UserGreeting isLoggedIn={true} username="Simone" />
      <UserGreeting isLoggedIn={true} />
    </>
  );
}

export default App
