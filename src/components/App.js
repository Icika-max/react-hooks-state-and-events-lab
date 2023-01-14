import React, { useEffect } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {
const [isDarkmode, setIsDarkMode]= useState(false)

const handleDarkMode=(e)=>{
  setIsDarkMode(isDarkmode=> !isDarkmode)
}

  const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDarkmode ? "Light mode" : "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
