const todoInput = document.querySelector('.todo__input')
const todoButton= document.querySelector('.todo__button')
const todoList = document.querySelector('.todo__list')

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


function addTodo(event) {
    // Prevent form from submitting
    event.preventDefault();
    // toto DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo__item');
    todoDiv.appendChild(newTodo);

    // Check MARK BUTTON

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Check trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton)

    // APPEND TO LIST
    todoList.appendChild(todoDiv)


    // CLEAR TODO INPUT VALUE


    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO

    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // ANIMATION
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
        // CHECK MARK

    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    
}