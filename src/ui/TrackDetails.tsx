import { useEffect, useState } from "react"
import style from "./TrackDetails.module.css"
import { getTrack } from "../dal/api";


export function TrackDetails ({selectedTrackId}: {selectedTrackId: string}) {
    const [track, setTrack] = useState(null);
    useEffect(() => {
        if (!selectedTrackId) return
        getTrack(selectedTrackId).then(js => setTrack(js.data))
    }, [selectedTrackId])
    return (
        <>
            <div className={style.details} style={{borderColor: selectedTrackId ? 'white' : 'black'}}>
                {selectedTrackId && !track && <img src="./src/download3.gif" height={50} width={50}/>}
                {selectedTrackId && track && track.id !== selectedTrackId && <img src="./src/download3.gif" height={50} width={50}/>}
                {selectedTrackId && track && track.id === selectedTrackId && 
                <div className={style.det}>
                    <img src={track.attributes.images.main[0] ? track.attributes.images.main[0].url : './src/logo.png'} height={300} width={300}/>
                    <h1>{track.attributes.title}</h1>
                    <hr style={{width: '100%'}}/>
                    <h2>Текст</h2>
                    <span>{track.attributes.lyrics ?? 'Текст не найден'}</span>
                </div>

                }
            </div>
        </>

    )
}