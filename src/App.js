import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
function App() {

  const [greencolor,setGreenColor] = useState("green")
  const [redcolor,setRedColor] = useState("black")
  const [yellowcolor,setYellowColor] = useState("black")
  useEffect(()=>{
    if(greencolor === "black" && redcolor === "black" && yellowcolor === "yellow"){
      setInterval(() => {
        setRedColor("red")
        setGreenColor("black")
        setYellowColor("black")
      }, 5000);
    }
    if(greencolor === "black" && redcolor === "red" && yellowcolor === "black"){
      setInterval(() => {
        setRedColor("black")
        setGreenColor("green")
        setYellowColor("black")
      }, 20000);
    }
    if(greencolor === "green" && redcolor === "black" && yellowcolor === "black"){
      setInterval(() => {
        setRedColor("black")
        setGreenColor("black")
        setYellowColor("yellow")
      }, 15000);
    }
    

  },[greencolor, redcolor, yellowcolor])

  function changeStatetoGreen(){
     setGreenColor("green")
     setRedColor("black")
     setYellowColor("black")
  }
  function changeStatetoRed(){
    setGreenColor("black")
    setRedColor("red")
    setYellowColor("black")
  }
  function changeStatetoYellow(){
    setGreenColor("black")
    setRedColor("black")
    setYellowColor("yellow")
  }
  

  return (
    <div className="App">
      <div className="circle" style={{
        display: "flex",
        width: "100px",
        height: "100px",
        backgroundColor: greencolor,
        borderRadius: "50%"}}>
        </div>
        <br></br>
        <div className="circle" style={{
        display: "flex",
        width: "100px",
        height: "100px",
        backgroundColor: redcolor,
        borderRadius: "50%"}}>
        </div>
        <br></br>
        <div className="circle" style={{
        display: "flex",
        width: "100px",
        height: "100px",
        backgroundColor: yellowcolor,
        borderRadius: "50%"}}>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button onClick={changeStatetoGreen} style={{
          backgroundColor: "green",
          color: "white",
          fontSize: "20px",
          padding: "10px 60px",
          borderRadius: "5px",
          margin: "10px 5px",
          cursor: "pointer",
        }}> Click Me to Green </button>
        <button onClick={changeStatetoYellow} style={{
          backgroundColor: "yellow",
          color: "white",
          fontSize: "20px",
          padding: "10px 60px",
          borderRadius: "5px",
          margin: "10px 5px",
          cursor: "pointer",
        }}> Click Me to Yellow </button>
        <button onClick={changeStatetoRed} style={{
          backgroundColor: "red",
          color: "white",
          fontSize: "20px",
          padding: "10px 60px",
          borderRadius: "5px",
          margin: "10px 5px",
          cursor: "pointer",
        }}> Click Me to Red </button>
    </div>
  );
}

export default App;

