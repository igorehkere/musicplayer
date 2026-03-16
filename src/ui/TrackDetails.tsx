import style from "./TrackDetails.module.css"
import { useDetails } from "../bll/useDetails";

export function TrackDetails ({selectedTrackId}: {selectedTrackId: string | null}) {
    const {track, selectLike, setSelectLike} = useDetails(selectedTrackId);

    return (
        <>
            <div className={style.details} style={{borderColor: selectedTrackId ? 'white' : 'black'}}>
                {selectedTrackId && !track && <img src="./src/download3.gif" height={50} width={50}/>}
                {selectedTrackId && track && track.id !== selectedTrackId && <img src="./src/download3.gif" height={50} width={50}/>}
                {selectedTrackId && track && track.id === selectedTrackId && 
                <div className={style.det}>
                    <img className={style.icon} src={track.attributes.images.main[0] ? track.attributes.images.main[0].url : './src/notcover.png'} height={300} width={300}/>
                    <h1>{track.attributes.title}</h1>
                    <hr style={{width: '100%'}}/>
                    <h2>Текст</h2>
                    <span>{track.attributes.lyrics ?? 'Текст не найден'}</span>
                    <div className={style.likes}>
                        <img src={selectLike ? './src/likeimageselect.png' : './src/likeimage.png'} height={30} width={30} onClick={() => {
                            setSelectLike(!selectLike);
                        }}/>
                        <span>{track.attributes.likesCount}</span>
                    </div>
                </div>

                }
            </div>
        </>

    )
}