import React from 'react';
import useSpeechToText from 'react-hook-speech-to-text';
import Button from '../Button/Button';
import './Transcript.css';

export default function AnyComponent() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div className='transcript'>
      {/* <div className="recording">
        <div className="buttonWrap" style={{margin:"0px 30px"}}>
          <button className='button' role="button" onClick={isRecording ? stopSpeechToText : startSpeechToText}>
            {isRecording ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>  
        <h1>Recording: {isRecording.toString()}</h1>
      </div> */}
      <div className="boxes">
        <div className="box_1">
          <div className="buttonWrap">
            <button className='button' role="button" onClick={isRecording ? stopSpeechToText : startSpeechToText}>
              {isRecording ? 'Stop Recording' : 'Start Recording'}
            </button>
          </div>
          <p className='contentWrap'>
            {results.map((result) => (
              <text key={result.timestamp}>{result.transcript}</text>
            ))}
            {interimResult && <p>{interimResult}</p>}
          </p>
        </div>
        <div className="box_2">
              <h3>Output will be shown here</h3>
        </div>
      </div>
    </div>
  );
}