import { useState, useEffect } from "react";
import style from './MyPlayer.module.css'
import { useAudioPlayer } from "react-use-audio-player";

type exportTrack = {
    src: string,
    image: string,
}
export function MyPlayer ({src, image}: exportTrack) {
  const { isPlaying, togglePlayPause, setVolume, seek, getPosition, duration } = useAudioPlayer(src);
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    let interval: number;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime(getPosition());
      }, 100); // 100 миллисекунд
    }
    
    return () => clearInterval(interval); // очищаем при остановке
  }, [isPlaying, getPosition]);
  return (
    <div className={style.player}>
      <img className={style.startstop} src={isPlaying ? './src/pause.png': './src/play.png'} height={30} width={30} onClick={() => {
        togglePlayPause()
      }}/>
      <div className={style.album}>
        <img src={image} height={54} width={54}/>
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