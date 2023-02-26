// import React, { Component } from "react"
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// //------------------------SPEECH RECOGNITION-----------------------------


// const Speech = SpeechRecognition ;
// const recognition = useSpeechRecognition();

// recognition.continous = true
// recognition.interimResults = true
// recognition.lang = 'en-US'

// //------------------------COMPONENT-----------------------------

// class Transcript extends Component {
  

//   constructor() {
//     super()
//     this.state = {
//       listening: false
//     }
//     this.toggleListen = this.toggleListen.bind(this)
//     this.handleListen = this.handleListen.bind(this)
//   }

//   toggleListen() {
//     this.setState({
//       listening: !this.state.listening
//     }, this.handleListen)
//   }

//   handleListen() {

//     console.log('listening?', this.state.listening)

//     if (this.state.listening) {
//       recognition.start()
//       recognition.onend = () => {
//         console.log("...continue listening...")
//         recognition.start()
//       }

//     } else {
//       recognition.stop()
//       recognition.onend = () => {
//         console.log("Stopped listening per click")
//       }
//     }

//     recognition.onstart = () => {
//       console.log("Listening!")
//     }

//     let finalTranscript = ''
//     recognition.onresult = event => {
//       let interimTranscript = ''

//       for (let i = event.resultIndex; i < event.results.length; i++) {
//         const transcript = event.results[i][0].transcript;
//         if (event.results[i].isFinal) finalTranscript += transcript + ' ';
//         else interimTranscript += transcript;
//       }
//       document.getElementById('interim').innerHTML = interimTranscript
//       document.getElementById('final').innerHTML = finalTranscript

//     //-------------------------COMMANDS------------------------------------

//       const transcriptArr = finalTranscript.split(' ')
//       const stopCmd = transcriptArr.slice(-3, -1)
//       console.log('stopCmd', stopCmd)

//       if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening'){
//         recognition.stop()
//         recognition.onend = () => {
//           console.log('Stopped listening per command')
//           const finalText = transcriptArr.slice(0, -3).join(' ')
//           document.getElementById('final').innerHTML = finalText
//         }
//       }
//     }
    
//   //-----------------------------------------------------------------------
    
//     recognition.onerror = event => {
//       console.log("Error occurred in recognition: " + event.error)
//     }

//   }

//   render() {
//     return (
//       <div style={container}>
//         <button id='microphone-btn' style={button} onClick={this.toggleListen} />
//         <div id='interim' style={interim}></div>
//         <div id='final' style={final}></div>
//       </div>
//     )
//   }
// }

// export default Transcript


// //-------------------------CSS------------------------------------

// const styles = {
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center'
//   },
//   button: {
//     width: '60px',
//     height: '60px',
//     background: 'lightblue',
//     borderRadius: '50%',
//     margin: '6em 0 2em 0'
//   },
//   interim: {
//     color: 'gray',
//     border: '#ccc 1px solid',
//     padding: '1em',
//     margin: '1em',
//     width: '300px'
//   },
//   final: {
//     color: 'black',
//     border: '#ccc 1px solid',
//     padding: '1em',
//     margin: '1em',
//     width: '300px'
//   }
// }

// const { container, button, interim, final } = styles

import React from 'react';
import useSpeechToText from 'react-hook-speech-to-text';

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
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <ul>
        {results.map((result) => (
          <li key={result.timestamp}>{result.transcript}</li>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>
    </div>
  );
}