import React from 'react'

export default function Queue(song , setCurrentSongIndex) {
    console.log(song.title)
  return (
  
          <div
  
          >
            <p className="track-name">{song?.title}</p>
            <p>0:30</p>
          </div>
        //   <div className="queue-list">
        //   {song?.map((song, index) => (
        //     <div
        //       key={index + "key"}
        //       className="queue-item flex"
        //       onClick={() => setCurrentSongIndex(index)}
        //     >
        //       <p className="track-name">{song?.name}</p>
        //       <p>0:30</p>
        //     </div>
        //   ))}
        // </div>
        )
  
}
