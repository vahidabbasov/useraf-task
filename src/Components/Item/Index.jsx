import React, { useRef } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Item = ({ user, deleteUser }) => {

  const text = useRef();
  const textDecor = ()=>{
    text.current.style.textDecoration= 'line-through'; ;
  }
  return (
    

    <tr>
      <td>{user.id}</td>
      <td ref={text}>{`${user.title}`}</td>
      <td><img src={`${user.url}`} alt="" /></td>
      <td>
        <button
          onClick={()=>{
            textDecor()
            toast.success('eleduk')
            console.log(text.current);
          }}
        >
          Xett
        </button>
      </td>
    </tr>
 
  )
}

export default Item
