import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import Gifgrid from "./components/Gifgrid";

const GifApp = () => {
  const [categories, setCategories] = useState([ "Dragon Ball"]);

  const onAddCategory = (item) => {

    if(categories.includes(item)) return

    setCategories([item, ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={value => onAddCategory(value)}/>


        {categories.map((category) => (
          
          <Gifgrid key={category} category={category}/>
          
        ))}

    
    </>
  );
};

export default GifApp;
