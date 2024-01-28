import { useState } from "react";


const myList = [
  {
    id: 1,
    description: "React öğren.",
  },
  {
    id: 2,
    description: "Weather app yap.",
  },
  {
    id: 3,
    description: "Bankist app yap.",
  },
];

export default function App() {
  return (
    <div>
      

      <ToDoList />
      <ListAdd />
    </div>
  );
}
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}
function ToDoList() {
  return (
    <ul>

      <List />
      <Button>ADD</Button>
    </ul>
  );
}
function List() {
  return myList.map((item) => (
    <li key={item.id}>
      {item.description}
      <Button>❌</Button>
      <Button>✔</Button>
    </li>
  ));
}
function ListAdd() {
  const [newList, setNewList] = useState("");

  function handleSubmit(e, newList) {
    e.preventDefault();
    setNewList((item) => [...item, newList]);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newList}
        onChange={(e) => setNewList(e.target.value)}
      />
    </form>
  );
}
