import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, addNewUser } from './store/autorizationSlice.js'

export function Counter() {
  const count = useSelector((state) => state.autorization.value)
  const users = useSelector((state) => state.autorization.users)
  const dispatch = useDispatch();
  console.log(users)

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <button onClick={() => dispatch(addNewUser())}>Add new user</button>
      {users.map(user => <div key={user.id}>
        <span> email {user.email}, password {user.password}</span>
        </div>)}
      <div>
      </div>
    </div>
  )
}