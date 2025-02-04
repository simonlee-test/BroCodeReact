interface Props {
  name?: string;
  age?: number;
  isStudent?: boolean;
}

                  //defualt values for props
const Student = ({ name="Guest", age=0, isStudent = false }: Props) => {
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent == false? "No":"Yes"}</p>
    </div>
  );
};

export default Student;
