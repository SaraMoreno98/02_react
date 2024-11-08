import { useEffect, useState } from "react"

export const UsersApp = () => {
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data)
            console.log(data)
        }catch(error){
            console.error(error)
        }
    }

    // useEffect(fucnion, array)
    // la función se ejecuta una vez al iniciar el componente
    // el array es un array de dependencias
        // useEffect(() => {
        //     fetchUsers()
        // }, [])

    const handleFetch = () => {
        fetchUsers()
    }
    
    return (
        <>
            <h1>Listado de usuarios</h1>
            <button onClick={handleFetch}>Cargar Usuarios</button>

            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <p>Nombre: {user.name} Email: {user.email}</p>
                        <span>Telefono: {user.phone}</span>
                    </li>
                )}
            </ul>
        </>
    )
}