import React, { useState } from "react";
import { addTodo } from "../redux/action";
import { v1 as uuid } from "uuid";
import { useDispatch } from "react-redux";
function Todoinput() {
  const [name, setname] = useState();
  let dispatch = useDispatch();
  return (
    <div className="row m-2">
      <input
        onChange={(e) => setname(e.target.value)}
        value={name}
        type="text"
        className="col form-control"
      />
      <button
        className="btn btn-primary mx-2"
        onClick={() => {
          dispatch(
            addTodo({
              id: uuid(),
              name: name,
            })
          );
          setname("");
        }}
      >
        ADD
      </button>
    </div>
  );
}

export default Todoinput;
