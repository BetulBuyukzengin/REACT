import './App.css';
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}
function App() {
  const [animals, setAnimals] = useState([]);
  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };
  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });
  return (
    <div className='app'>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

//Yöntem-1:
// function App() {
//   const [count, setCount] = useState(0);
//   const handleClick = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div>
//       <button onClick={handleClick}> Add Animal </button>
//       <div>Number of animals: {count}</div>
//     </div>
//   );
//   //onClick={handleClick()} şeklinde kullanmamalıyız referans vermek istiyoruz. Çünkü ilk renderlandığında handleClick çağırılacak ,tıklandığında çağırılmasını
//   //istediğimiz için refereans vermeliyiz.
// }

//Yöntem-2: Çok küçük call back veya event handler aktarmaya çalışıyorsak ayrı fonksiyon yazmak yerine doğrudan satıra yazabiliriz.
// function App() {
//     return (
//       <button onClick={()=> console.log("Button was clicked!")}> Add Animal </button>
//     )
// }
export default App;
