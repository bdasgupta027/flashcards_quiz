import React from 'react'
import { useState } from 'react'

const Input = ( card ) => {
    const [guess, setGuess] = useState('')
    const [result, setResult] = useState('')

    const checkGuess = () => {
        if(card.answer.toLowerCase() != guess.toLowerCase()) {
            setResult('incorrect')
        } else {
            setResult('correct')
        }
    }

    return (
        <div>
            <label className="guess">
                Answer:
            </label>
            <input value={guess} className="input" id={result} onChange={(e) => {
                setGuess(e.target.value)
            }} />
            <button className="submit" onClick={checkGuess}>
                Submit
            </button>
        </div>
    )
}

export default Input;