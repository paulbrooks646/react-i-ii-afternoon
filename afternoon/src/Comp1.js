import React from "react"
import App from "./App.js"
import Comp2 from "./Comp2.js"
import data from "./data.js"


function Comp1(props) {

    console.log(props.user[0].favoriteMovies[2])
    
    
function handle() {
    console.log("Pig")
} 
    
    return (
<div className="main">
    <div className="center">
        <div className="card">
        <div className="page">
            <h1>{props.user[0].name.first} {props.user[0].name.last}</h1>
            <h4>1/25</h4>
        </div>
        <div className="ciudad">
            <h3>From:</h3>
            <p>{props.user[0].city}, {props.user[0].country}</p>
        </div>
        <div className="trabajo">
            <h3>Job Title:</h3> <p>{props.user[0].title}</p>
        </div>
        <div className="empleado">
            <h3>Employer:</h3>
            <p>{props.user[0].employer}</p>
        </div>
        <div >
            <h3 className="pelicula">Favorite Movies:</h3>
            <ol>
                <li>{props.user[0].favoriteMovies[0]}</li>
                <li>{props.user[0].favoriteMovies[1]}</li>
                <li>{props.user[0].favoriteMovies[2]}</li>
            </ol>
        </div>
        </div>
        <div className="next">
        <button className="pre" onClick={handle()}>{"<"} Previous</button>
        <button className="post">Next {">"}</button></div></div></div>)
}

export default Comp1