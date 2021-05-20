import './App.css';
import React, {useState} from "react"
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
  const [songs, setSongs] = useState([emptySong])
  const [favoriteSongs, setFavoriteSongs] = useState([])
  return (
    <div className="App">
      <SongList songs={songs}/>
      <FavoriteSongs songs={songs} favoriteSongs={favoriteSongs}/> 
      {/* <FavoriteSongs songs={[{title:"Purple Rain"}, {artist:"Prince"}, {time:"6:66"}]}/> */}

      <AddSong songs={songs} favoriteSongs={favoriteSongs} label="create"/>
    </div>
  );
}

export default App;
