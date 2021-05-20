import './App.css';
import React from "react"
import FavoriteSongs from "./FavoriteSongs"

function App() {
  return (
    <div className="App">
      
      <FavoriteSongs songs={[{title:"Purple Rain"}, {artist:"Prince"}, {time:"6:66"}]}/>
       
    </div>
  );
}

export default App;
