import React from 'react'

const UsersForm = ({createUser, reset, register, handleSubmit, updateMovieById, objectUpdate}) => {
    const defaultValuesForm = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    }

    const submit = data => {
        if(objectUpdate.id !== undefined){
            updateMovieById(objectUpdate.id, data)
            reset(defaultValuesForm)
        } else {
            createUser(data)    
        }
        
        reset(defaultValuesForm)
    }
  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor='first_name'>First Name</label>
                <input type="text" id='first_name' {...register('first_name')} />
            </div>
            <div>
                <label htmlFor='last_name'>Last Name</label>
                <input type="text" id='last_name' {...register('last_name')} />
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input type="text" id='email' {...register('email')} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input type="text" id='password' {...register('password')} />
            </div>
            <div>
                <label htmlFor='birthday'>Birthay</label>
                <input type="date" id='birthday' {...register('birthday')} />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UsersForm