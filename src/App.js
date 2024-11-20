import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const trimmedInput = input.trim();
    if(trimmedInput) {
      setTodos([...todos, trimmedInput]);
      setInput('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>
          Mini TaskList App 📚
        </h1>
        <input 
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Tambahkan tugas'
        >
        </input>
        <button onClick={addTodo} id='addTaskButton'>Tambahkan</button>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} 
              <span onClick={() => removeTodo(index)}>x</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
