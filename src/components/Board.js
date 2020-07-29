import React, { useState, useEffect } from 'react';
import Square from './Square';
import './../App.css';


function Board() {

  useEffect(()=>{
      fetch('178.128.206.150:7000')
        .then(res => {
            console.log("status: "+ res.status);
        });
  },[])

  

  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext]  = useState(true)

 
    const handleClick = index => {
      let squaresArray = [...squares]

      if(calculateWinner(squares)) return
      if(squaresArray[index] === null) {
        squaresArray[index] = xIsNext ? "X" : "O"
        setSquares(squaresArray)
        setXIsNext(!xIsNext)
      }
      
    }

    const calculateWinner = (squares) => {
      const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]

      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i]
        if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
          
          return squares[a]
      }
     return null
    }
    
    let nextPlayer;
    xIsNext===true ? nextPlayer = "X" : nextPlayer = "O"
    let winner = calculateWinner(squares)

    nextPlayer = winner ? `Winner is ${winner}` : `Next player: ${nextPlayer}`
    

  
  return (
    <div className="App">
      <div className="status">{nextPlayer}</div>
      
      <div class="grid">
        <Square handleClick={() => handleClick(0)} value={squares[0]}/>
        <Square handleClick={() => handleClick(1)} value={squares[1]}/>
        <Square handleClick={() => handleClick(2)} value={squares[2]}/>
        <Square handleClick={() => handleClick(3)} value={squares[3]}/>
        <Square handleClick={() => handleClick(4)} value={squares[4]}/>
        <Square handleClick={() => handleClick(5)} value={squares[5]}/>
        <Square handleClick={() => handleClick(6)} value={squares[6]}/>
        <Square handleClick={() => handleClick(7)} value={squares[7]}/>
        <Square handleClick={() => handleClick(8)} value={squares[8]}/>
      </div>
    </div>
  );
  
}
export default Board;
