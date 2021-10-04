import React , {useState, useRef} from 'react';
import {BiArrowToRight} from 'react-icons/bi'
import {BiArrowToLeft} from 'react-icons/bi'
import {ImPlay3} from 'react-icons/im'
import {ImPause2} from 'react-icons/im'

const AudioPlayer = (props) => {
  //state
  const [isPlaying, setIsPlaying] = useState(false);
  
  //references
  const audioPlayer = useRef(); // reference our audio component


  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }

  return (  
    <div className="audio-player-container">
      <audio ref={audioPlayer} src={window.trackUrl}></audio>
      <button className="forward-backward"><BiArrowToLeft/></button>
      <button className="play-pause" onClick={togglePlayPause} >
        {isPlaying ? <ImPause2 /> : <ImPlay3 className="play"/>}
      </button>
      <button className="forward-backward"><BiArrowToRight/></button>
      
      <div className="current-time">0:00</div>
      
      <div>
        <input className="progress-bar" type="range" />
      </div>
    
      <div className="duration">2:49</div>

    </div>
  );
}
 
export { AudioPlayer };