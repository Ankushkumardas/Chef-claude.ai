import React from 'react'

function Ingridents({ingredients,getrecipe}) {
  return (
    <div>
     <div className="flex flex-col mt-6 ml-32">
          <h2 className="mb-2 text-xl font-bold">Ingredients in Hand:</h2>
          <ul className="px-3 list-disc">
            {ingredients.map((data, index) => (
              <li key={index} className="">
                {data}
              </li>
            ))}
          </ul>
        </div>
       <div className="flex justify-center mt-10 transition-all delay-75">
          <section className="p-4 bg-slate-100 max-w-[700px] flex justify-between rounded-md gap-10 items-center">
            <div className="">
              <h2 className="text-xl font-bold">Ready for a Recipe?</h2>
              <p className="text-slate-500">
                Generate a recipe from the above list of ingredients.
              </p>
            </div>
            <div>
              <button
                className="px-2 py-1 text-white transition-all delay-75 bg-orange-400 rounded-md hover:shadow-md hover:scale-110"
                onClick={getrecipe}
              >
                {" "}
                Get a Recipe
              </button>
            </div>
          </section>
        </div>
    </div>
  )
}

export default Ingridents
