import './App.css';
import React, { useState } from 'react';
import { SHA256, enc } from 'crypto-js';
import BinaryMatrix from './BinaryMatrix.js'
import BinaryColorMatrix from './BinaryColorMatrix.js'

function App() {
  const [input, setInput] = useState('');

  const hex2bin = (data) => data.split('').map(i => parseInt(i, 16).toString(2).padStart(4, '0')).join('');

  const inputChangeHandler = (event) => {
    setInput(event.target.value);
  };

  const hash = input.length !== 0 ? SHA256(input).toString(enc.Hex)
                                  : '0000000000000000000000000000000000000000000000000000000000000000';
  const hash2bin = hex2bin(hash);

  return (
    <div className="App">
      <header className="App-header">
        <p style={{'fontFamily': 'monospace'}}>
          SHA256 VISUALIZATION
        </p>
        <input onChange={inputChangeHandler}></input>
        <p style={{fontSize: 10}}>
          {hash}
        </p>
        <div>&nbsp;</div>
        <BinaryMatrix data={hash2bin}/>
        <div>&nbsp;</div>
        <BinaryColorMatrix data={hash2bin}/>
      </header>
    </div>
  );
}

export default App;
