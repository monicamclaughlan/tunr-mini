import './App.css';
import React, {useState, useEffect} from "react"
import FavoriteSongs from "./FavoriteSongs"
import AddSong from './AddSong'
import SongList from './SongList'

function App() {
// const url = "https://songs-329-tunr-backend.herokuapp.com"

const url =  "https://opgbi0w9if.execute-api.us-east-2.amazonaws.com/dev"

  const emptySong = { 
    title: "", 
    artist: "", 
    time: "", 
    favorite: false
  }
  
  const [songs, setSongs] = useState([emptySong])
  const [favoriteSongs, setFavoriteSongs] = useState([])

  // getSongs function 
  const getSongs = () => { 
    fetch(url + '/songs/')
    .then((response) => response.json())
    .then((data) => {
      setSongs(data.body)
      console.log(data.body)
    })
  }

   // when screen loads, get list of all songs
   useEffect(() => { 
    getSongs()
  }, [])

  // handleCreate - function for when create is submitted
const handleCreate = (newSong) => { 
  fetch(url + '/songs', { 
    method: "POST", 
    headers: { 
      "Content-type": "application/json"
    }, 
    body: JSON.stringify(newSong)
  })
  .then(() => getSongs())
}

//deleteSong - function for deleting song
const deleteSong = (song) => { 
  fetch (url + "/songs/" + song.songId, { 
    method: "delete"
  })
  .then(() => getSongs())
}


const addToFavorites = (title) => { 
    setFavoriteSongs([...favoriteSongs, title])
}

const removeFromFavorites = (index) => setFavoriteSongs(favoriteSongs.filter((currentValue,currentIndex) => currentIndex !== index))

  return (
    <div className="App">
      <h1 className="title">TUNR.</h1>
      <h3 className="subtitle">For all your playlist needs</h3>
      <hr/>
      <SongList songs={songs} addToFavorites={addToFavorites} deleteSong={deleteSong}/>
      <FavoriteSongs favoriteSongs={favoriteSongs} removeFromFavorites={removeFromFavorites}/> 
      <AddSong song={emptySong} label="create" handleSubmit={handleCreate}/>

    </div>
  );
}

export default App;
