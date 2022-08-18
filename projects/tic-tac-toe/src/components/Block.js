import React from 'react';

const Block = (props) => {

  return (
    <div className="block" id={`block-${props.id}`} onClick={() => {props.clicked(props.id)}}>
      <h1 style={{margin: '0', fontSize:  '85px'}}>{props.data[props.id] === "" ? "" : props.data[props.id]}</h1>
    </div>
  )
}

export default Block;