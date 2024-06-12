import { Song } from "./song"

export const SongList = ({items, onDelete, onMove}) => {
    return <div>
        <h3>SongList</h3>
        {
            items.map(elm => <Song key = {elm.id} {...elm} onDelete={onDelete} onMove ={onMove}/>)
        }
    </div>
}