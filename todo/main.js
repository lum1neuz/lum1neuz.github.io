let todoItems = [];

function renderTodo(todo) {
    localStorage.setItem('todoItemsRef', JSON.stringify(todoItems));
    const list = document.querySelector('.list');
    const item = document.querySelector(`[data-key='${todo.id}']`);

    if (todo.deleted) {
        item.remove();
        if (todoItems.length === 0) list.innerHTML = '';
        return
    }

    const isChecked = todo.checked ? 'done' : '';
    const node = document.createElement("div");
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
    <div class="card mb-3" id="${todo.id}">
    <div class="card-body">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="flexCheckDefault">
                    <label class="form-check-label id-${todo.id}" for="flexCheckDefault">
                        ${todo.text}
                    </label>
                </div>
                <button type="button" class="btn btn-sm btn-abs-sub" data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path
                            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                </button>
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><button class="dropdown-item edit-todo" type="button">Edit</button></li>
                    <li><button class="dropdown-item delete-todo" type="button">Delete</button></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
    `;
    if (item) {
        list.replaceChild(node, item);
    } else {
        list.append(node);

    }
}

function addTodo(text) {
    var todo = {
        text,
        checked: false,
        id: Date.now(),
    };

    todoItems.push(todo);
    renderTodo(todo);
}

function toggleDone(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;


    const label = document.querySelector(".id-" + todoItems[index].id);

    if (todoItems[index].checked == true) {
        label.classList.add('checked');
    } else {
        label.classList.remove('checked');
    }
}

function editTodo(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    const todo = {
        ...todoItems[index]
    };
    console.log(todo.text);

}

function deleteTodo(key) {
    const index = todoItems.findIndex(item => item.id === Number(key));
    const todo = {
        deleted: true,
        ...todoItems[index]
    };
    todoItems = todoItems.filter(item => item.id !== Number(key));
    renderTodo(todo);
}


const form = document.querySelector('#form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('input');
    const text = input.value.trim();
    if (text !== '') {
        addTodo(text);
        input.value = '';
    }
});

const list = document.querySelector('.list');
list.addEventListener('click', event => {
    if (event.target.classList.contains('form-check-input')) {
        const itemKey = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.key;
        toggleDone(itemKey);
    }

    if (event.target.classList.contains('delete-todo')) {
        const itemKey = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.key;
        deleteTodo(itemKey);
    }

    if (event.target.classList.contains('edit-todo')) {
        const itemKey = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.dataset.key;
        editTodo(itemKey);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const ref = localStorage.getItem('todoItemsRef');
    if (ref) {
        todoItems = JSON.parse(ref);
        todoItems.forEach(t => {
            renderTodo(t);
        });
    }
});