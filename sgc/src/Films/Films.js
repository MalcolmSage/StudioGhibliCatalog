import React from "react";

function Films(props){
    return(
        <div className="film-item">
            <h1>{props.film.title}</h1>
            <p>{props.film.director}</p>
            <p>{props.film["release_date"]}</p>
            <p>{props.film.description}</p>
        </div>
    )
}

export default Films