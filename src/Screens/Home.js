import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Feed from './Feed'
import Player from './Player'
import Playlist from './Playlist'
import './home.css'
import Sidebar from '../MyComponents/sidebar'
import { useState } from 'react'
import { playlist } from '../config/data'
import SearchBar from '../MyComponents/SearchBar'


export default function Home() {
 const [trackIndex, settrackIndex] = useState(0)


  return (
    <BrowserRouter>
    <Sidebar/>
    {/* <SearchBar value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}/>
      */}
    <div className='main-body'>
     
    
     <Routes>
         <Route path="/playlist"  element= {<Playlist plays={playlist}  />} />
         <Route path="/feed"  element= {<Feed/>} />
         <Route path="/player/:id"  element= {<Player/>} />
     </Routes>
  
  </div>
  </BrowserRouter>
  )
}
