import { useState } from "react";
import SearchBar from "./components/searchBar";
import ImageList from "./components/imageList";
import searchImages from "./api";

function App() {
    const [images,setImages]=useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
    // console.log(result);
    // console.log("Do a search with", term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
  );
}
export default App;
