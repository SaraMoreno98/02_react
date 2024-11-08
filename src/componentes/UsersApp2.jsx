import { useEffect, useState } from "react"

export const UsersApp2 = () => {
    const [url, setUrl] = useState('users')
    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/${url}`)
            const data = await response.json()
            setUsers(data)
            console.log(data)
        }catch(error){
            console.error(error)
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [url])

    const handleFetch = () => {
        url === 'users' ? setUrl('comments') : setUrl('users')
    }
    
    return (
        <>
            <h1>Listado de usuarios</h1>
            <button onClick={handleFetch}>
                {url === 'users' ? 'Mostrar comentarios' : 'Mostrar Usuarios'}
            </button>

            <ul>
                {url === 'users'
                    ? 
                        users.map(user =>
                            <li key={user.id}>
                                <p>Nombre: {user.name} Email: {user.email}</p>
                                <span>Telefono: {user.phone}</span>
                            </li>
                        )
                    : 
                        users.map(comment =>
                            <li key={comment.id}>
                                <p>Nombre: {comment.name} Email: {comment.email}</p>
                                <span>Comentario: {comment.body}</span>
                            </li>
                        )
                }
            </ul>
        </>
    )
}