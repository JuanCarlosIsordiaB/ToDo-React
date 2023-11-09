import { useTodos } from './hooks/useTodos'
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';



export const TodoApp = () => {

    const {todos,handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodos();

  return (
    <>
        <hr />
        <div className='row'>
            <div className="col-7">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo={handleDeleteTodo}
                    onToggleTodo={ handleToggleTodo }
                />
            </div>
            <div className='col-5'>
               
                <h4>Agregar Tarea</h4>
                <TodoAdd 
                    onNewTodo={handleNewTodo}
                />
            </div>
        </div>

        
    </>
  )
}
