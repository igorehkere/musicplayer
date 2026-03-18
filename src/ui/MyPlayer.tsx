import style from './MyPlayer.module.css'
import { usePlayer } from "../bll/usePlayer";

type exportTrack = {
    src: string,
    image: string,
    handleClick: () => void
}
export function MyPlayer ({src, image, handleClick}: exportTrack) {
  const {isPlaying, togglePlayPause, setVolume, seek, duration, currentTime} = usePlayer(src)
  return (
    <div className={style.player}>
      <img className={style.startstop} src={isPlaying ? './src/pause.png': './src/play.png'} height={30} width={30} onClick={() => {
        togglePlayPause()
      }}/>
      <div className={style.album}>
        <img src={image} height={54} width={54} onClick={() => {
            handleClick();
        }}/>
        <input 
        type='range'
        min={0}
        max={duration}
        value={currentTime}
        onChange={(event) => seek(parseFloat(event.target.value))}
        />
      </div>
      <div className={style.volume}>
        <img src='./src/lupa.png' height={24} width={24}/>
        <input 
        type='range' 
        min={0}
        max={1}
        step={0.1}
        onChange={(event) => setVolume(parseFloat(event.target.value))}
        />        
      </div>
      <img src='./src/likeimage.png' height={24} width={24}/>
    </div>
  )
}