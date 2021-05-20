import logo from './logo.svg';
import './App.css';
import AddSong from './AddSong'

function App() {

  const emptySong = { 
    title: "", 
    artist: "", 
    time: "", 
    favorite: false
  }

  return (
    <div className="App">
      <AddSong label="create" song={emptySong} />
    </div>
  );
}

export default App;
