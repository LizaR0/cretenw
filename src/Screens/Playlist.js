import React from 'react'
import Adioplayer from './audioplayer'
// import SearchBar from '../MyComponents/SearchBar'
import Playitem from './playitem'


const Playlist = ({plays  }) => {
  return (
  
    <div className='playlist-wrap'>
      
     {plays.map(play=><Playitem play={play} key={play.id} />)}
     <Adioplayer />
    </div>
  )
}

export default Playlist