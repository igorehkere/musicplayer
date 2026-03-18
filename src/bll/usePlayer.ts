import { useState, useEffect } from "react";
import { useAudioPlayer } from "react-use-audio-player";

export function usePlayer(src: string) {
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
    return {isPlaying, togglePlayPause, setVolume, seek, duration, currentTime} 
}
