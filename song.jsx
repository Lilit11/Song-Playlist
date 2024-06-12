export const Song = ({ title, artist, duration = 8, id, onDelete, onMove, inPlaylist = false , onSwap}) => {


    return <div className="song">
        <p>{title}</p>
        <strong>by {artist}</strong>
        <br></br>
        <small> {duration} mins</small>

        <button onClick={() => onDelete(id)} >x</button>

        {
            !inPlaylist && <button onClick={()=>onMove(id)}> add to fav</button>
        }
        
        {
            inPlaylist && <button onClick={()=>onSwap(id)}> move down</button>
        }
        

    </div>
}