import React from "react"



const FavoriteSongs = ({favoriteSongs, removeFromFavorites}) => {
const favSongs = favoriteSongs.map((song, index) => { 
  return ( 
    <div className="favorite-list">
      <p>{song.title}</p>
      <p>{song.artist}</p>
      <p>{song.time}</p>
      <p>{song.favorite}</p>
      <button onClick={() => {
        removeFromFavorites(index) 
        song.favorite=false}
        }>Remove from List</button>
      </div>
  )
})
 

  return (
    <div className="favorites">
    <h1>Favorite Songs List</h1>
        {favSongs}
    </div>
  )
  
  //deconstruct songs from props
  // const { songs, } = props;

    

  // const loaded = () => (
  //   <div style={{ textAlign: "center" }}>
  //     <h1>Favorite Songs</h1>
  //     {songs.map((song) => (
  //       <article key={song._id}>
  //         <p>{song.title}</p>
  //         <p>{song.artist}</p>
  //         <p>{song.time}</p>
  //       </article>
  //     ))}
  //   </div>
  // );

  // const loading = () => <h1>Loading...</h1>;

  // return loaded() 

  
};


export default FavoriteSongs;