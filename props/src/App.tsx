import Student from "./Student"
function App() {
  return (
    <>
      <Student name={'Alice'} age={18} isStudent={true} />
      <Student name={'Singh'} age={19} isStudent={true} />
      <Student name={'Jack'} age={32} isStudent={false}/>
    </>
  );
}

export default App
