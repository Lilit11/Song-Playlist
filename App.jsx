import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Song } from './song'
import { Albom } from './Albom'
import { SongList } from './SongList'
import { Playlist } from './Playlist'
function App() {

  // const x= <Song/>
  // console.log(x);

  const [songs, setSongs]= useState([
    {id:101, title:"Door", artist:"Teddy Swims"},
    {id:102, title:"Way down we go", artist:"Kaleo"},
    {id:103, title:"My fathers son", artist:"Joe Coker"},
    {id:104, title:"The thrill is gone", artist:"BBKing"},
    {id:105, title:"Lose Control", artist:"Teddy Swims"},

  ])

  const [playlist, setPlaylist] = useState([])

  const removeSong = id =>{
    setSongs(songs.filter(x => x.id != id))
  }

  const moveSong = id =>{
    let newSong = songs.find(x=> x.id ===id)
    if(!playlist.find(x=> x.id === newSong.id)){
      playlist.push(newSong)
    
    }
    setPlaylist([...playlist])
  }
  const swapSong = id =>{
    let index = null
    playlist.map((elm,i)=>{
      if(elm.id ===id){
        index = i
      }
    })
   ;[playlist[index], playlist[index+1]] =[playlist[index+1], playlist[index]]
    
   setPlaylist([...playlist])
  }

  const removeFav = id =>  {
    setPlaylist(playlist.filter(elm=> elm.id !== id))
  }

  return (
    <>
    <SongList
    items={songs}
    onDelete = {removeSong}
    onMove ={moveSong}
    
    />
    <Playlist
    items ={playlist}
    onDelete = {removeFav}
    onSwap ={swapSong}
    inPlaylist={true}
   
    />
      {/* <h1>hello Props</h1>
      <Albom name ="arabian music" year={2014}>
        <Song
          title="hips don't line"
          artist="Shakira"
          duration={5}

        />
        <Song
          title="hips don't line"
          artist="Shakira"
          duration={5}

        />
        <Song
          title="hips don't line"
          artist="Shakira"
          duration={5}

        />

      </Albom> */}
    </>
  )
}

export default App
