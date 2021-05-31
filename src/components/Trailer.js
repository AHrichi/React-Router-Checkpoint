import React from 'react'
import { Link } from 'react-router-dom'

function Trailer(props) {
    return (
        <div style={{display:"flex",flexDirection: 'column',alignItems: 'center',
        justifyContent: 'center'}}>

            <h1> {props.location.trailer.title}</h1>
            <h2>{props.location.trailer.description}</h2>
            
            
            <iframe width="727" height="409" src={props.location.trailer.trailerUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            <Link to='/'> Home</Link>

        </div>
    )
}

export default Trailer
