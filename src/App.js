import React, { useState }from 'react'
import Todoinput from './component/Todoinput';
import TodoList from './component/TodoList';
import './App.css';

function App() {
  const [listTodo,setListTodo] = useState([]);
  let addList = (inputText)=>{
    if(inputText!==''){
      setListTodo([...listTodo,inputText]);
    }
  }
  const deleteList = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <>
    <div className="main-container">
      <div className="center-container">
         <Todoinput ListAdd = {addList}/>
         <h1 className="app-heading">Todo</h1>
         <hr/>
         {listTodo.map((listItem,i)=>{
            return(
              <TodoList key={i} Index ={i} item= {listItem} deleteItem={deleteList}/>
            )
         })}
      </div>
    </div>

    </>
  );
}

export default App;
