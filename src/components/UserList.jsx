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
        <article className='cardUser'>
            <div className='cardUser__left'>
                <h2>{`${user.first_name}, ${user.last_name}`}</h2>
                <p>Email: {user.email}</p>
                {/* <p>{user.password}</p> */}
                <p><i class='bx bx-cake' ></i>{user.birthday}</p>
            </div>
            <div className='cardUser__right'>
                <button onClick={() => deleteUser(user.id)} className="cardUser__right__delete"><i class='bx bx-trash'></i> </button>
                <button onClick={updateUser} className="cardUser__right__edit"><i class='bx bx-edit-alt'></i> </button>
            </div>


        </article>
    )
}

export default UserList