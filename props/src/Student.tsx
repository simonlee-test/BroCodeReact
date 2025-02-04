interface Props {
  name: string;
  age: number;
  isStudent?: boolean;
}

const Student = ({ name, age, isStudent = false }: Props) => {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent == false? "No":"Yes"}</p>
    </div>
  );
};

export default Student;
