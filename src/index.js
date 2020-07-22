import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componente';


export const todoList = new TodoList(); // Creando la instancia del TodoList

todoList.todos.forEach( crearTodoHtml );


console.log( 'todos', todoList.todos );





