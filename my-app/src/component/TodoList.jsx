import React from 'react'
import { useState } from 'react'
const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");
    
    const handleAddNewTodo = () => {
        if (newTodo.trim() === "") {
            alert("Vui lòng nhập nội dung todo");
            return;
        }       
        setTodos([...todos, newTodo]);
        setNewTodo(""); 
    }

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    }
  return (
      <>
          <input type="text"
              value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}/>
          <button onClick={handleAddNewTodo}>add todo</button>
          <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}
                    <button onClick={() => handleDeleteTodo(index)}>delete</button>
                    </li>
                ))}
          </ul>
          
          

      </>
  )
}

export default TodoList