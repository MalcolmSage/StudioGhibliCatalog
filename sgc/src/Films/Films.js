import React from "react";

function Films(props){
    return(
        <div className="film-item">
            <h1>{props.film.title}</h1>
        </div>
    )
}

export default Films