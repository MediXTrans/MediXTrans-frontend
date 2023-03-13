import React from 'react'
import './Home.css'
import { Mic } from 'react-bootstrap-icons';
import Navbar from '../Navbar/Navbar';
import ChooseFile from '../Choose file/ChooseFile'
import { useNavigate } from 'react-router-dom';

export default function () {
  const navigate = useNavigate();
  const someEventHandler = () => {
    navigate('/transcript');
  }
  return (
    <div className='Home'>
        <div className="homeWrapper">
            <div className='homeElements'><Mic size={96}/></div>
            <div className="buttons">
              <div className="button_1">
                <button onClick={someEventHandler} className='button' type="submit" name='dictateAudio'><h5>DICTATE AUDIO</h5></button>
              </div>
              <div className="button_2">
                <ChooseFile />
                {/* <button className='button' type="submit" name='uploadFile'><h5>Choose An Audio File</h5></button> */}
              </div>
            </div>
        </div>
    </div>
  )
}
