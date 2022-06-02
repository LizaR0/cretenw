import React from 'react'
import { Link } from 'react-router-dom'
import './playitem.css'
// import { IconContext } from "react-icons";
// import { AiFillPlayCircle } from "react-icons/ai";
import { FaBeer } from 'react-icons/fa';
import Adioplayer from './audioplayer';


const Playitem = ({play:{id, title, src, artist, img_src}}) => {
    return(
  
    <div className='playitem-wrap' onClick={()=><Adioplayer/>}>
        
        <img src={img_src} alt='cover' className='playItem-cover'/>
        <h3>{title} </h3>
        {/* <h3>{artist}</h3> */}
   <div>
   
   <Link className='playitem-link' to={`/player/${id}`}>
          {/* play➝ */}
           <FaBeer />
        </Link>
   </div>
    </div>
    );
}

export default Playitem