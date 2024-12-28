import React, { useRef } from 'react'
import './videoplayer.css'
import video_play from '../../assets/video.mp4'

const Videoplayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false); 
        }
    }

  return (
    <div className={`video-player ${playState?'':'hide'}`} ref={player}
    onClick={closePlayer}>
        <video src={video_play} autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer