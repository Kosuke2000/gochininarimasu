import { VFC } from "react";

type Sex = "man" | "woman" | "none";
type Subject = "japanese" | "math" | "english";

type Student = {
  id: number;
  name: string;
  sex: Sex;
};

type Teacher = {
  name: string;
  subject: Subject;
};

type Classroom = {
  id: number;
  teacher: Teacher;
  students: Student[];
};

type School = {
  name: string;
  classes: Classroom[];
};

interface StudentProps {
  student: Student;
}

// const Student: VFC<Student> = ({ id, name, sex }) => {
//     return (
//       <ul>
//         <li>id:{id}</li>
//         <li>name:{name}</li>
//         <li>sex:{sex}</li>
//       </ul>
//     );
//   };

const Student: VFC<StudentProps> = ({ student }) => {
  const { id, name, sex } = student;
  return (
    <ul>
      <li>id:{id}</li>
      <li>name:{name}</li>
      <li>sex:{sex}</li>
    </ul>
  );
};

const Teacher: VFC<Teacher> = ({ name, subject }) => {
  return (
    <ul>
      <li>name:{name}</li>
      <li>subject:{subject}</li>
    </ul>
  );
};

const Classroom: VFC<Classroom> = ({ id, teacher, students }) => {
  return (
    <div>
      <h1>classroom id:{id}</h1>
      <p>teacher:{teacher.name}</p>
      <p>students</p>
      <div>
        {students.map((student) => (
          <Student student={student} key={student.id} />
        ))}
      </div>
    </div>
  );
};

const School: VFC<School> = ({ name, classes }) => {
  return (
    <div>
      <h1>name:{name}</h1>
      <ul>
        {classes.map((c) => (
          <Classroom
            id={c.id}
            teacher={c.teacher}
            students={c.students}
            key={c.id}
          />
        ))}
      </ul>
    </div>
  );
};
