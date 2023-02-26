import React, { useState } from 'react';
import './Transcript.css'
import Navbar from './Navbar/Navbar'

export default function Transcript() {

    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
  
    let recognition = null;
  
    const handleStart = () => {
      console.log('start button clicked');
      setIsListening(true);
      window.SpeechRecognition = window.SpeechRecognition
                          || window.webkitSpeechRecognition;
      recognition = new window.SpeechRecognition();
      recognition.interimResults = true;
      recognition.addEventListener('result', handleResult);
      recognition.start();
    };
  
    const handleStop = () => {
      console.log('Stop button clicked');
    setIsListening(false);
    recognition.removeEventListener('result', handleResult);
    recognition.stop();
    recognition = null; // clear the object to ensure proper cleanup
    };
  
    const handleResult = (e) => {
      const interimTranscript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      setTranscript(interimTranscript);
    };

    
  return (
    // <div className='Transcript'>
    //     <Navbar />
    //     <div className="TranscriptWrapper">
            <div>
              <header className="App-header">
                <h1>Speech-to-Text Example</h1>
              </header>
              <main>
                <p>{transcript}</p>
                <div >{transcript}</div>
                {!isListening ? (
                    <button onClick={handleStart}>Start</button>
                ) : (
                    <button onClick={handleStop}>Stop</button>
                )}
              </main>
                
            </div>
    //     </div>
    // </div>
  )
}




