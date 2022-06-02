import React from 'react'
import { playlist } from '../config/data';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from 'react';

export default function Adioplayer() {
    

    const [trackIndex, setTrackIndex] = useState(0);

  const handleClickPrevious = () => {
    setTrackIndex((currentTrack) =>
      currentTrack === 0 ? playlist.length - 1 : currentTrack - 1
    );
  };

  const handleClickNext = () => {
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );
  };
  return (
    <div className= "screen-container">
    

<AudioPlayer
  style={{ width: "300px" }}
  style={{ borderRadius: "1rem" }}
  autoPlay
  layout="horizontal"
  src={playlist[trackIndex].src}
  onPlay={(e) => console.log("onPlay")}
  showSkipControls={true}
  // showJumpControls={false}
  header ={`Now playing:  ${playlist[trackIndex].title} by ${playlist[trackIndex].artist}  `}
  onClickPrevious={handleClickPrevious}
  onClickNext={handleClickNext}
  onEnded={handleClickNext}
  
/>
</div>

 

  )
}
