import { useState } from "react"

export const BotonContadorEstado = ({valor = 0}) => {
    const [veces, setVeces] = useState(valor)

    const handleClick = () => {
        setVeces(veces + 1)
    }

    return (
        <>
            <button onClick={handleClick}>Has hecho click {veces} veces</button>
        </>
    )
}