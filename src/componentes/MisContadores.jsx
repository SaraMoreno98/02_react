import { useState } from "react"
import { BotonContadores } from "./BotonContadores"
import { BotonContadorEstado } from "./BotonContadorEstado"

export const MisContadores = () => {
    const [count, setCount] = useState(0)

    const aumentarContador = () => {
        setCount(count + 1)
    }

    return (
        <>        
        <h1>Botones de contadores independientes</h1>
        <h2>Estos botones llevan la misma cuenta</h2>
        <BotonContadores count={count} aumentarContador={aumentarContador}/>
        <BotonContadores count={count} aumentarContador={aumentarContador}/>
        <h2>Este boton tiene su estado propio</h2>
        <BotonContadorEstado/>
        <h2>Este tiene su estado propio y comienza por 10</h2>
        <BotonContadorEstado valor={10}/>
        </>
    )
}
