let todoItems = [];


function renderTodo(todo){
    const list = document.querySelector('.list');
    const item = document.querySelector(`[data-key='${todo.id}']`);

    if (todo.deleted) {
      // remove the item from the DOM
      item.remove();
      return
    }

    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement("div");
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
        <div class="card mb-3" id="${todo.id}">
            <div class="card-body">
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
              ${todo.text}
            </label>
                </div>
                <button type="button" class="btn btn-sm btn-abs-sub" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                      </svg>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item" type="button">Edit</button></li>
                    <li><button class="dropdown-item delete-todo" type="button">Delete</button></li>
                </ul>
            </div>
        </div>
    `;
    if (item) {
      // replace it
      list.replaceChild(node, item);
    } else {
      // otherwise append it to the end of the list
    list.append(node);
    
}}

function addTodo(text) {
  var todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

function deleteTodo(key) {
  const index = todoItems.findIndex(item => item.id === Number(key));
  console.log(todoItems);
  console.log(todoItems.filter(item => item.id !== Number(key)));
  // Create a new object with properties of the current todo item
  // and a `deleted` property which is set to true
  const todo = {
    deleted: true,
    ...todoItems[index]
  };
  // remove the todo item from the array by filtering it out
  todoItems = todoItems.filter(item => item.id !== Number(key));
  renderTodo(todo);
}

document.getElementById('button_submit').onclick = function(e) {
    const input = document.getElementById("input");

const text = input.value.trim();
  if (text !== '') {
    addTodo(text);
    input.value = '';
}};


const list = document.querySelector('.list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('form-check-input')) {
    const itemKey = event.target.parentElement.dataset.key;
  }

  // add this `if` block
  if (event.target.classList.contains('delete-todo')) {
    const itemKey = event.target.parentElement.dataset.key;
    deleteTodo(itemKey);
  }
});