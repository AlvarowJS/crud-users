import React from 'react'

const UsersForm = ({ createUser, reset, register, handleSubmit, updateUserById, objectUpdate }) => {
    const defaultValuesForm = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    }

    const submit = data => {
        if (objectUpdate !== undefined) {
            updateUserById(objectUpdate.id, data)
            reset(defaultValuesForm)
        } else {
            createUser(data)
        }
        reset(defaultValuesForm)
    }
    return (
        <div className=''>
            <form className='userForm' onSubmit={handleSubmit(submit)}>
                <h3>Register User</h3>
                
                <div className='userForm__nameComplete'>
                    <div className='userForm__name'>
                        <label htmlFor='first_name'>First Name</label>
                        <input type="text" id='first_name' {...register('first_name')} />
                    </div>
                    <div className='userForm__lastname'>
                        <label htmlFor='last_name'>Last Name</label>
                        <input type="text" id='last_name' {...register('last_name')} />
                    </div>

                </div>
                <div className='userForm__email'>
                    <label htmlFor='email'>Email</label>
                    <input type="text" id='email' {...register('email')} />
                </div>
                <div className='userForm__password'>
                    <label htmlFor='password'>Password</label>
                    <input type="text" id='password' {...register('password')} />
                </div>
                <div className='userForm__birthday'>
                    <label htmlFor='birthday'>Birthday</label>
                    <input type="date" id='birthday' {...register('birthday')} />
                </div>
                <button className='userForm__button'>Enviar</button>
            </form>
        </div>
    )
}

export default UsersForm