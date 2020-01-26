import React, { useState } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
    return {
      todoLists: state.todoLists
    };
  }

function TodoList(props) {
    
 const [todo, setTodo] = useState('');
  
  return (
    <div className='TodoList'>
      <span>{props.title}</span>
      <input onChange={e => {setTodo(e.target.value)}} placeholder='Add your Todo' type='text'></input><button onClick={() => {props.dispatch({ type: "ADD_TODO", id: props.id, title: todo })}}>Add Todo</button>
      <button onClick={() => {props.dispatch({ type: "DELETE_TODO-LIST", id: props.id })}}>Delete</button>
      <ul className="tasks">
        {props.items.map(item => (
          <li key={item.id}>
            {item.title}
            <button
              onClick={handleDelete.bind(item._id)}
              className="delete"
            ></button>
            <button
              onClick={handleStatus.bind(item.id)}
              className="checked"
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default connect(mapStateToProps)(TodoList);;
