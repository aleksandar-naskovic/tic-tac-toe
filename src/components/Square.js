import React from 'react'


const Square = ({value, handleClick}) =>{
  return (
    <div>
        <button className="cell" onClick={handleClick}>{value}</button>
    </div>
  )
}

export default Square