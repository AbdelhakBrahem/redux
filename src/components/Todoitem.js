import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/action';


function Todoitem({todo}) {
    const [name, setName] = useState(todo.name)
    const [editable, seteditable] = useState(false)
    const dispatch = useDispatch()
    return (
        <div>
          
            <div className="row mx-2 align-item-center">
                <div>{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                   {editable ? <input type='text'className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/> : <h3>{todo.name}</h3>}
                </div>
                <button className="btn btn-primary m-2" onClick={()=> {
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name:name
                        }
                    ))
                    if (editable){
                        setName(todo.name)
                    }

                    seteditable(!editable)


                    }}>{editable ? "Update" : "Edit"}</button>
                <button className="btn btn-danger m-2" onClick={()=>dispatch(deleteTodo(todo.id))}>Delete</button>
            </div>
        </div>
    )
}

export default Todoitem
