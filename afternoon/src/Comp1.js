import React from "react"
import App from "./App.js"
import Comp2 from "./Comp2.js"
import data from "./data.js"


function Comp1(props) {

 let {ind, handle, handle2} = props
 console.log(ind)   
    return (
<div className="main">
    <div className="center">
        <div className="card">
        <div className="page">
            <h1>{props.user[ind].name.first} {props.user[ind].name.last}</h1>
            <h4>{ind + 1}/25</h4>
        </div>
        <div className="ciudad">
            <h3>From:</h3>
            <p>{props.user[ind].city}, {props.user[ind].country}</p>
        </div>
        <div className="trabajo">
            <h3>Job Title:</h3> <p>{props.user[ind].title}</p>
        </div>
        <div className="empleado">
            <h3>Employer:</h3>
            <p>{props.user[ind].employer}</p>
        </div>
        <div >
            <h3 className="pelicula">Favorite Movies:</h3>
            <ol>
                <li>{props.user[ind].favoriteMovies[0]}</li>
                <li>{props.user[ind].favoriteMovies[1]}</li>
                <li>{props.user[ind].favoriteMovies[2]}</li>
            </ol>
        </div>
        </div>
        <div className="next">
        <button className="pre" onClick={handle2}>{"<"} Previous</button>
        <button className="post" onClick={handle}>Next {">"}</button></div>
    </div>
</div>)
}

export default Comp1