import React from 'react';
import './BinaryColorMatrix.css'

const BinaryColorMatrix = (props) => {
  const rows = props.data.match(/(.{1,16})/g);

  const styles = [];
  for (let i = 0; i < rows.length; i++) {
    const style = rows[i].split('').map(item => (
      item === '0' ? {'backgroundColor': 'aquamarine'}: {'backgroundColor': 'magenta'}
    ));
    styles.push(style);
  }

  console.log(styles)

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className='row_colored'>
          {row.split('').map((item, colIndex) => (
            <span key={colIndex} style={styles[rowIndex][colIndex]}>&nbsp;</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default BinaryColorMatrix;