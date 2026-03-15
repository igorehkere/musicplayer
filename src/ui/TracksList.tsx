import style from "./TrackList.module.css"
import { useState, useEffect } from "react"
import { getTracks } from "../dal/api";

type page = {
    numPage: number,
    getTrackDetail: (id: string) => void,
}
type TrackListItemResource = {
    id: string,
    attributes: TrackListItemAttributes,
}
type TrackListItemAttributes = {
    title: string,
    attachments: Array<{
        url: string,
    }>,
    images: TrackImages
}

type TrackImages = {
    main: Array<{
        url: string,
    }>
}

export function TracksList ({numPage, getTrackDetail}: page) {
    const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);
    const [selectedTrackId, setSelectedTrackId] = useState<string | null>(null);



    useEffect(() => {
        getTracks(numPage).then(js => setTracks(js.data))
    }, [numPage]);
    if (tracks === null) {
        return (
            <img src="./src/download3.gif" height={50} width={50}/>
        )
    }
    return (
        <div className={style.trackList}>
            {tracks.map(track => {
                    return (
                        <div className={style.track} style={{borderColor: selectedTrackId === track.id ? 'green' : 'white'}} key={track.id} onClick={() => {
                            setSelectedTrackId(track.id);
                            getTrackDetail(track.id)
                        }}>
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