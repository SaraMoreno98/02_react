import { useState } from "react"

export const AgregarTarea = ({agregarTarea}) => {
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = (event) => {
        setInputValue(event.target.value)
        // console.log(inputValue)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        agregarTarea(inputValue)
        setInputValue('')
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Agrega una nueva tarea"
                    value={inputValue}
                    onChange={onInputChange}
                />
            </form>
        </>
    )
}