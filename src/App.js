import './App.css';
import React from "react"
import FavoriteSongs from "./FavoriteSongs"
import AddSong from './AddSong'
import SongList from './SongList'


function App() {



  const emptySong = { 
    title: "", 
    artist: "", 
    time: "", 
    favorite: false
  }

  return (
    <div className="App">
   
      <SongList songs={[{title:"Purple Rain"}, {artist:"Prince"}, {time:"6:66"}]}/>
      <FavoriteSongs songs={[{title:"Purple Rain"}, {artist:"Prince"}, {time:"6:66"}]}/>
      <AddSong label="create" song={emptySong} />

    </div>
  );
}

export default App;
