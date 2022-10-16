import React from 'react';
import './BinaryMatrix.css'

const BinaryMatrix = (props) => {
  const rows = props.data.match(/(.{1,16})/g);
  return (
    <div>
      {rows.map((row, index) => (
        <div key={index} className='row'>{row}</div>
      ))}
    </div>
  );
}

export default BinaryMatrix;