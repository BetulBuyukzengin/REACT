
import Avatar from "./components/Avatar";
import SkillList from "./components/SkillList";
import Intro from "./components/Intro";


import "./style.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <h1>Betül Büyükzengin</h1>
      <div className="data">
        <Intro info="Hello "/>
        <SkillList />
      </div>
    </div>
  );
}
export default App;