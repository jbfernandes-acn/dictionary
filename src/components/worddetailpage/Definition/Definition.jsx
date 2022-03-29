import React from 'react'

export default function Definition ({ definition, index }) {

    return (
        <div>
            <h5>{`${index + 1}. ${definition.definition}`}</h5>
            { definition.example && <p>"{definition.example}"</p> }
        </div>
    )
}