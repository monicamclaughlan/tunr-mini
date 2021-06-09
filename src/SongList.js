import React, {useState} from "react"; 
import { AiFillHeart } from "react-icons/ai";


const SongList = ({songs, addToFavorites, deleteSong})=>{

    // const [color,setColor] = useState("")

  

    // useEffect(() => {
    //     setColor("")
    // })
 
    //destructure the songs from props
    // const { songs } = props
    // console.log(songs)

// loading sends back a div containing articles that show song info if songs have been added
    const loaded = ()=>(
        <div>
            <h1>Playlist</h1>
            {songs.map((song)=>(
                <article className ="song" key={song.songId}>
                    <h3>{song.title}</h3>
                    <br/>
                    <h3>{song.time}</h3>
                    <h3>{song.artist}</h3>
                    <h3>{song.favorite}</h3>
                    <button
                    // style={{"color":color}}
                    onClick={() => {
                    // setColor("red")
                    addToFavorites(song)
                    song.favorite = true
                    }}>
                    <AiFillHeart color={song.favorite ? "red":"black"} /></button>
                    <h3 onClick={() => {deleteSong(song)}}>X</h3>
                </article>
            ))}
        </div>
       
    )
// loading() sends back a blank song template if no songs have been added
    const loading = ()=>(
        <div>
            <article>
                <h2>Song Title</h2>
                <h3>Song PlayTime</h3>
                <h3>Artist</h3>
            </article>
        </div>
    )
   
    return songs.length > 0 ? loaded() : loading()


}
export default SongList

// style={{backgroundColor:color}}