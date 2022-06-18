import axios from 'axios'
import React from 'react'

const UserList = ({ user, URL, getAllUsers, setObjectUpdate, setIsShowForm, reset }) => {

    const deleteUser = id => {
        axios.delete(`${URL}${id}/`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
            .finally(() => getAllUsers())
    }
    const updateUser = () => {
        setIsShowForm(true)
        const obj = {
            email: user.email,
            password: user.password,
            first_name: user.first_name,
            last_name: user.last_name,
            birthday: user.birthday
        }
        reset(obj)
        setObjectUpdate(user)
    }
    return (
        <article>
            <h2>{`${user.first_name}, ${user.last_name}`}</h2>
            <p>{user.email}</p>
            <p>{user.password}</p>
            <p>{user.birthday}</p>
            <button onClick={() => deleteUser(user.id)}>eliminar </button>
            <button onClick={updateUser}>editar </button>
        </article>
    )
}

export default UserList