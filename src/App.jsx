import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import UserList from './components/UserList'
import UsersForm from './components/UsersForm'

const URL = 'https://users-crud1.herokuapp.com/users/'
function App() {
  const { handleSubmit, register, reset } = useForm()
  const [users, setUsers] = useState()
  const [isShowForm, setIsShowForm] = useState(false)
  const [objectUpdate, setObjectUpdate] = useState()

  const getAllUsers = () => {
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getAllUsers()
  }, [])

  const createUser = newUser => {
    axios.post(URL,newUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => getAllUsers())
  }

  const updateUserById = (id, updateUser) => {
    axios.patch(`${URL}${id}/`, updateUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
      .finally(() => {
        getAllUsers()
        setObjectUpdate()
        setIsShowForm(false)
      })
  }

  const showForm = () => {
    const obj = {
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      birthday: ''
    }
    reset(obj)
    setIsShowForm(!isShowForm)
  }
  return (

    <div className="App">
      <h1>CRUD - USERS</h1>
      <button onClick={showForm}>{isShowForm ? 'Hide Form ': 'Create a new user'}</button>
      {
        isShowForm&&
        <UsersForm
        createUser={createUser}
        updateUserById={updateUserById}
        objectUpdate={objectUpdate}
        handleSubmit={handleSubmit}
        reset={reset}
        register={register}
      />
      }
     
      <div className='app__card'>
        {
          users?.map(user => (
            <UserList
              key={user.id}
              user={user}
              URL={URL}
              getAllUsers={getAllUsers}
              setObjectUpdate={setObjectUpdate}
              updateMovieById={updateUserById}
              setIsShowForm={setIsShowForm}
              reset={reset}
            />

          ))
        }
      </div>



    </div>
  )
}

export default App
