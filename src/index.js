import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ulContainer = document.querySelector('ul');

const todos = [
    { text: "aller faire les courses", done: false},
    { text: "aller chercher les résultats", done: true},
]

//fonction fléchée qui va creer et remplir une balise <li>
const createTodoElement = (todo) => {
    const li = document.createElement(`li`);
    li.classList.add("d-flex", "align-items-start");
    li.innerHTML = `
        <span class="todo ${todo.done ? 'done' : ''}"></span>
        <p class="w-100">${todo.text}</p>
        <button class="btn btn-primary mx-2">Editer</button>
        <button class="btn btn-danger mx-2">Supprimer</button>
    `

    return li;
}

// fonction fléchée qui va afficher la liste des taches, map => array, filter => array, reduce => valeur
const displayTodos  = () => {
    const todosNode = todos.map((todo, index) => {
        return createTodoElement(todo);
    });

    ulContainer.innerHTML = '';
    ulContainer.append(...todosNode);
}

displayTodos();