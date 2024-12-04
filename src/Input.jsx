import React, { useState } from "react";
import Recipe from "./Recipe";
import Ingridents from "./Ingridents";
import {getRecipeFromMistral} from './ai'
function Input() {
  const [ingredients, setIngredients] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [recipeshown, setrecipeshown] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue("");
    }
  };
  async function getrecipe() {
    // setrecipeshown((prev) => !prev);
   const aiRecipe= await getRecipeFromMistral(ingredients)
   console.log(aiRecipe);
   setrecipeshown(aiRecipe)
  };
  return (
    <>
      <div className="">
        <form
          className="flex justify-center gap-4 mx-20 mt-20 mb-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="px-3 py-2 rounded-md shadow-md outline-none bg-slate-100 w-[300px] border"
            placeholder="e.g. add ingredients "
            name="ingredient"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="px-2 py-1 text-sm text-white transition-all delay-75 bg-black rounded-md hover:scale-110"
          >
            + Add Ingredients
          </button>
        </form>
        {/* <div className="flex flex-col justify-center">
                    <h2 className="mb-2 ml-20 text-xl font-bold">Ingredients in Hand:</h2>
                    <ul className="px-3 ml-20">
                        {ingredients.map((data, index) => (
                            <li key={index} className="list-disc ">
                                {data}
                            </li>
                        ))}
                    </ul>
                </div> */}

       
      </div>
      {ingredients.length >= 1 && (
       <Ingridents ingredients={ingredients} getrecipe={getrecipe}/>
      )}

      {recipeshown && <Recipe recipeshown={recipeshown}/>}
    </>
  );
}

export default Input;
