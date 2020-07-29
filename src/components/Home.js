import React from 'react'
import {Link} from 'react-router-dom'
import './../App.css';


const Home = () =>{
  console.log("AA");
  
  return (
    <div className="home">
      <h1>Tic Tac Toe</h1>
        <Link to="/board" className="button">New Game</Link>
    </div>
  )
}

export default Home