import React, { useEffect, useState } from "react";
import axios from "axios";
import Home from "../components/Home.js";

function RecipeData() {
  const [items, setData] = useState([]);

  useEffect(() => {
    axios
      .get("./recipes.json")
      .then(res => {
        console.log(res.data);
        setData(res.data.recipes);
      })
      .catch(e => console.log("Error:", e.message));
    //return () => {};
  }, [items]);
  return (
    <div>
      {/* <Home data={items} /> */}
      {/* {items.map(data => console.log(data))} */}
    </div>
  );
}

export default RecipeData;
