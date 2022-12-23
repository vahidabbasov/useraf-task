import React, { useEffect, useState } from 'react'
import Item from '../Item/Index'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'


const List = () => {
  
  const [usersState, setUserState] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/photos').then((res=>{setUserState(res.data)
    toast.success('data geldi !')}))
  }, [])
  return (
    <table>
      <thead>
        <tr>
          <td>id</td>
          <td>Title</td>
          <td>Sekil</td>
        </tr>
      </thead>
      <tbody>
        {usersState.map((user) => {
          return (<Item key={user.id} deleteUser={[]} user={user} />)
        })}
      </tbody>
      <Toaster />
    </table>
  )
}

export default List
