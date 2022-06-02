import React from 'react'

export default function Card(song) {
    console.log(song.img_src)
    // const artists=[];
    // song.title.forEach(element => {
    //     artists.push(element.name)
    // });
  return (
    <div>
        <div className='songCard-body flex'>
        <div className="details-img">
                {/* <img src={song.img_src} alt="hereb" /> */}
                {/* <p>{song.artists}</p> */}
            </div>
       
        
    </div>
    </div>
  )
}
