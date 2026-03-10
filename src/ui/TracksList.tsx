import style from "./TrackList.module.css"
import { useState, useEffect } from "react"

export function TracksList () {
    const [tracks, getTracks] = useState(null);

    useEffect(() => {
        fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
            headers: {
                'api-key': 'cf0ddaf7-318e-4876-b6f5-44884cf22e49',
            },
        }).then(res => res.json()).then(js => getTracks(js.data))
    }, []);
    if (tracks === null) {
        return (
            <span>Loading...</span>
        )
    }
    return (
        <div className={style.tracks}>
            <div className={style.btns}>
                <button>&lt;</button>
                <span>1</span>
                <button>&gt;</button>
            </div>
            <div>
                {tracks.map(track => {
                    return (
                        <div key={track.id}>
                            <img src={track.attributes.images.main[2] ? track.attributes.images.main[2].url : './src/logo.png'} height={56} width={56}/>
                            <audio controls src={track.attributes.attachments[0].url}></audio>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}