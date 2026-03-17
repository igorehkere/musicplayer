import style from "./TrackList.module.css"
import { useTracks } from "../bll/useTracks";
import { MyPlayer } from "./MyPlayer";

type page = {
    numPage: number,
    getTrackDetail: (id: string) => void,
}


export function TracksList ({numPage, getTrackDetail}: page) {
    const { tracks, selectedTrackId, setSelectedTrackId} = useTracks(numPage);
    if (tracks === null) {
        return (
            <img src="./src/download3.gif" height={50} width={50}/>
        )
    }
    return (
        <div className={style.trackList}>
            {tracks.map(track => {
                    return (
                        <div onClick={() => {
                            setSelectedTrackId(track.id)
                            getTrackDetail(track.id)
                        }}>
                            <MyPlayer src={track.attributes.attachments[0].url} image={track.attributes.images.main[2] ? track.attributes.images.main[2].url : './src/notcover.png'}/>    
                        </div>
                        // <div className={style.track} style={{borderColor: selectedTrackId === track.id ? 'green' : 'white'}} key={track.id} onClick={() => {
                        //     setSelectedTrackId(track.id);
                        //     getTrackDetail(track.id)
                        // }}>
                        //     <img src={track.attributes.images.main[2] ? track.attributes.images.main[2].url : './src/notcover.png'} height={56} width={56}/>
                        //     <div className={style.trackElem}>
                        //         <span>{track.attributes.title}</span>
                        //         <audio controls src={track.attributes.attachments[0].url}></audio>
                        //     </div>
                        // </div>
                    )
            })}
        </div>
    )
}