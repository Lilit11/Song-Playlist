import { Song } from "./song"


export const Playlist = ({items, onDelete, inPlaylist, onSwap})=>{
    return <div>
    <h1>  Favorite songs {items.length}</h1>
    {
        items.map(elm => <Song key = {elm.id} {...elm} onDelete={onDelete} inPlaylist={inPlaylist} onSwap ={onSwap}/>)
    }
    </div>
}


