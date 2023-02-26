import React from 'react'
import './Home.css'
import { Mic } from 'react-bootstrap-icons';
import Navbar from '../Navbar/Navbar'

export default function 
() {
  return (
    <div className='Home'>
        <Navbar />
        <div className="homeWrapper">
            <div className='homeElements'><Mic size={96}/></div>
            <button className='homeElements' type="submit" name='dictateAudio'><h5>DICTATE AUDIO</h5></button>
            <button className='homeElements' type="submit" name='uploadFile'><h5>Choose An Audio File</h5></button>
        </div>
    </div>
  )
}
