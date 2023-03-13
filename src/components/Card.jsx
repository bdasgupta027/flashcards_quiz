import { useState } from 'react'
import React from "react"
import Front from "./Front"
import Back from "./Back"

const Card = ( card ) => {
    const [flip, setFlip] = useState(false)
    return (
        <div className="Card" onClick={() => setFlip(!flip)}>
            {flip ? <Back answer={ card.answer } /> : <Front question={ card.question } />}
        </div>
    )
}

export default Card;