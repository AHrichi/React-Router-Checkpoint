import React from 'react'
import ReactStars from "react-rating-stars-component"
function Filter({ fTitle, fRate }) {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center'
        }}>
            <input onChange={(e) => fTitle(e.target.value)} />
            <ReactStars
                count={5}
                onChange={(newRating) => fRate(newRating)}
                size={24}
                activeColor="#ffd700"


                edit={true}
            />
        </div>
    )
}

export default Filter
