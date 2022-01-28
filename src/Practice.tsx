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

interface TeacherProps {
  teacher: Teacher;
}

interface ClassroomProps {
  classroom: Classroom;
}

interface SchoolProps {
  school: School;
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

const Teacher: VFC<TeacherProps> = ({ teacher }) => {
  const { name, subject } = teacher;
  return (
    <ul>
      <li>name:{name}</li>
      <li>subject:{subject}</li>
    </ul>
  );
};

const Classroom: VFC<ClassroomProps> = ({ classroom }) => {
  const { id, teacher, students } = classroom;
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

const School: VFC<SchoolProps> = ({ school }) => {
  const { name, classes } = school;
  return (
    <div>
      <h1>name:{name}</h1>
      <ul>
        {classes.map((c, i) => (
          <Classroom classroom={c} key={i} />
        ))}
      </ul>
    </div>
  );
};

type Player = {
  name: "string";
  age: number;
  position: "batter" | "pitcher";
};

type Coach = {
  name: string;
  speciality: string;
};

type Team = {
  players: Player[];
  coach: Coach;
  ballpark: string;
  ranking: number;
};

type Reague = {
  name: string;
  teams: Team[];
};

interface PlayerProps {
  player: Player;
}

interface CoachProps {
  coach: Coach;
}

interface TeamProps {
  team: Team;
}

interface ReagueProps {
  reague: Reague;
}

const Player: VFC<PlayerProps> = ({ player }) => {
  const { name, age, position } = player;
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{position}</li>
      </ul>
    </div>
  );
};

const Coach: VFC<CoachProps> = ({ coach }) => {
  const { name, speciality } = coach;
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{speciality}</li>
      </ul>
    </div>
  );
};

const Team: VFC<TeamProps> = ({ team }) => {
  const { players, ballpark, ranking, coach } = team;
  return (
    <div>
      <ul>
        <li>{ballpark}</li>
        <li>{ranking}</li>
        <li>{coach}</li>
        {players.map((player, i) => {
          return <Player player={player} key={i} />;
        })}
      </ul>
    </div>
  );
};

const Reague: VFC<ReagueProps> = ({ reague }) => {
  const { name, teams } = reague;
  return (
    <div>
      <ul>
        <li>{name}</li>
        {teams.map((team, i) => (
          <Team team={team} key={i} />
        ))}
      </ul>
    </div>
  );
};
