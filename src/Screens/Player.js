import React from 'react'
import Audioplayer from "react-h5-audio-player"
import 'react-h5-audio-player/lib/styles.css';
import { useState , useEffect} from 'react';
import './player.css'
import { Link, useParams } from 'react-router-dom';
import { playlist } from '../config/data';

export default function Player() {

  const {id}= useParams();
  // console.log({id})
  const [play, setPlay] = useState(null)
  useEffect(() => {
    let play= playlist.find(play=>play.id===parseInt(id))
    if(play)
    {
      setPlay(play)
    }
  }, []);


return(

<>
<Link className='bplay-goBack' to='/playlist'>
  <span> &#8592;</span> <span>Go Back</span>
</Link>
{play ? (
  <div className='play-wrap'>
    <header>
     
      <h1>{play.title}</h1>
    
    </header>
    <img src={play.img_src} alt='cover' />
    <h3 className='bplay-name'>{play.artist}</h3>
    <p className='bplay-desc'>{play.desc}</p>
  <Audioplayer 
  autoPlay src={play.src}
  onPlay={(e) => console.log("onPlay")}
  
  />
  </div>

) : "" }
{/* <div>
<Audioplayer
style={{ width: "300px" }}
style={{ borderRadius: "1rem" }}
autoPlay
layout="horizontal"
src={play.src}
onPlay={(e) => console.log("onPlay")}
showSkipControls={true}
// showJumpControls={false}
header ={`Now playing:  ${play.title} by ${play.artist}  `} /></div> */}
</>
);
}


































{/* <ReactPlayer
  playing
  url={[
    {src: 'foo.webm', type: 'video/webm'},
    {src: 'foo.ogg', type: 'video/ogg'}
  ]}
/>
<track> elements for subtitles can be added using config.file:

<ReactPlayer
  playing
  url='foo.webm'
  config={{ file: {
    tracks: [
      {kind: 'subtitles', src: 'subs/subtitles.en.vtt', srcLang: 'en', default: true},
      {kind: 'subtitles', src: 'subs/subtitles.ja.vtt', srcLang: 'ja'},
      {kind: 'subtitles', src: 'subs/subtitles.de.vtt', srcLang: 'de'}
    ]
  }}}
/> */}