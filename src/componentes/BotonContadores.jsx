// import { useState } from "react"

export const BotonContadores = ({count, aumentarContador}) => {
    return (
        <>
            <button onClick={aumentarContador}>Hiciste click {count} veces</button>
        </>
    )
}