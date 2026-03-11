import style from "./TrackList.module.css"
import { useState, useEffect } from "react"
import { getTracks } from "../dal/api";

export function TracksList () {
    const [tracks, setTracks] = useState(null);

    useEffect(() => {
        getTracks().then(js => setTracks(js.data))
    }, []);
    if (tracks === null) {
        return (
            <img src="./src/download3.gif" height={50} width={50}/>
        )
    }
    return (
        <div className={style.trackList}>
            {tracks.map(track => {
                    return (
                        <div className={style.track} key={track.id}>
                            <img src={track.attributes.images.main[2] ? track.attributes.images.main[2].url : './src/logo.png'} height={56} width={56}/>
                            <div className={style.trackElem}>
                                <span>{track.attributes.title}</span>
                                <audio controls src={track.attributes.attachments[0].url}></audio>
                            </div>
                        </div>
                    )
            })}
        </div>
    )
}