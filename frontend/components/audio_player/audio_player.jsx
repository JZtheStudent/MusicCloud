import React , {useState, useRef, useEffect} from 'react';
import {BiSkipPrevious} from 'react-icons/bi';
import {BiSkipNext} from 'react-icons/bi';
import {BiPlay} from 'react-icons/bi';
import {BiPause} from 'react-icons/bi';

// useEffect is for fetching

const AudioPlayer = (props) => {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [trackTitle, setTrackTitle] = useState('');
  
  //references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation
  const songTitleRef = useRef();
  
  useEffect(() => {
    
    setTrackTitle(props.currentTrack ? props.currentTrack.title : "No song playing");
    setIsPlaying(props.currentTrack ? (audioPlayer.current.paused ? false : true) : false);
    animationRef.current = requestAnimationFrame(whilePlaying);
    const seconds = getDuration();
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
    const seconds = getDuration();
    setDuration(seconds);

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
  
  const getDuration = () => {
    return Math.floor(audioPlayer.current.duration);
  }

  const handleSongEnded = () => {
    togglePlayPause();
  }
  
  
  return (  
    <div className="audio-player-main-container">
      <div className="audio-player-container">
        <audio autoPlay ref={audioPlayer} src={props.currentTrack ? props.currentTrack.musicFile : ""}></audio>
        
        
        <button className="forward-backward"><BiSkipPrevious/></button>
        <button className="play-pause" onClick={togglePlayPause} >
          {isPlaying ? <BiPause /> : <BiPlay />}
        </button>
        <button className="forward-backward"><BiSkipNext/></button>
        

        {/* current time */}
        <div className="current-time">{calculateTime(currentTime)}</div>
        
        
        {/* progress bar */}
        <div className="progress-bar-container">
          <input 
            className="progress-bar" 
            type="range" 
            defaultValue="0" 
            ref={progressBar} 
            onChange={changeRange}/>
        </div>
      
        {/* duration */}
        <div className="duration">{(duration && !isNaN(duration)) ? calculateTime(duration) : "00:00"}</div>
        <h1 ref={songTitleRef}>{trackTitle}</h1>
      </div>
    </div>
    
  );
}
 
export { AudioPlayer };