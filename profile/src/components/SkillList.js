import { useEffect, useReducer, useState } from "react";
import Intro from "./Intro";

const skills = [
  {
    skill: "HTML+CSS",
    level: "💪",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "💪",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "💪",
    color: "#C3DCAF",
  },
  {
    skill: "Git and Github",
    level: "👌",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "💪",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "👶",
    color: "#FF3B00",
  },
];
// const initialState = {
//   yagiyor:true,
//   count:0,

// };
// function reducer(state, action) {
//   switch (action.type) {
//     case "yagmur":
//       return {
//         ...state, yagiyor:!state.yagiyor,count:state.count++
//       }
//   }
// }

function SkillList() {

//   const [{yagiyor,count}, dispatch] = useReducer(reducer, initialState);
// console.log(yagiyor);
  // const [count, setCount] = useState(0);

  // useEffect(function () {
  //   setCount(skills.length);
  // }, []);

  // function handlerClick(){
  //   dispatch({type:"yagmur"})
  // }

  return (
    <div>
      <ul className="skill-list">
        {skills.map((s) => (
          <SkillItem color={s.color} skillItem={s}>
            {s.skill}
            {s.level}
          </SkillItem>
        ))}
      </ul>
      {/* {count} */}
      {/* <button onClick={handlerClick}>Yağmur Dursun !</button> */}
    </div>
  );
}

function SkillItem({ children, color }) {
  return (
    <li style={{ backgroundColor: color }} className="skill">
      {children}
    </li>
  );
}
export default SkillList;

// function SkillList() {
//   return (
//     <div>
//       <ul className="skill-list">
//         {skills.map((s) => (
//           <SkillItem skillItem={s} />
//         ))}
//       </ul>
//     </div>
//   );
// }
// function SkillItem({ skillItem }) {
//   const { color, skill, level } = skillItem;
//   return (
//     <li className="skill" style={{ backgroundColor:color }}>
//       {skill}
//       {level}
//     </li>
//   );
// }
