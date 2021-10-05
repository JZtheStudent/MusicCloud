import React , {useState, useRef, useEffect} from 'react';
import {BiArrowToRight} from 'react-icons/bi'
import {BiArrowToLeft} from 'react-icons/bi'
import {ImPlay3} from 'react-icons/im'
import {ImPause2} from 'react-icons/im'

// useEffect is for fetching

const AudioPlayer = (props) => {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  //references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
  
  const calculateTime = (secs) => {
    const minutes = Math.floor( secs/60 ) 
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`; 
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}`: `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }
  
  const whilePlaying = () => {
    if (audioPlayer.current.currentTime === audioPlayer.current.duration) {
      handleSongEnded();
    }
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }
  
  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);   
  }
  
  const handleSongEnded = () => {
    togglePlayPause();
  }

  return (  
    <div className="audio-player-container">
      <audio ref={audioPlayer} src={props.currentTrackUrl}></audio>
      <button className="forward-backward"><BiArrowToLeft/></button>
      <button className="play-pause" onClick={togglePlayPause} >
        {isPlaying ? <ImPause2 /> : <ImPlay3 className="play"/>}
      </button>
      <button className="forward-backward"><BiArrowToRight/></button>
      

      {/* current time */}
      <div className="current-time">{calculateTime(currentTime)}</div>
      
      
      {/* progress bar */}
      <div>
        <input 
          className="progress-bar" 
          type="range" 
          defaultValue="0" 
          ref={progressBar} 
          onChange={changeRange}/>
      </div>
    
      {/* duration */}
      <div className="duration">{(duration && !isNaN(duration)) ? calculateTime(duration) : "00:00"}</div>

    </div>
  );
}
 
export { AudioPlayer };