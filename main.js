const $todoBoard = document.querySelector('#todo_list_wrap');
const $todoInput = document.querySelector('#todo-input');
const $addBtn = document.querySelector('#todo-add');
const $deleteBtn = document.querySelector('.todo-delete');
let todoList = [];

function addList() {
  let todoContent = $todoInput.value;
  todoList.push(todoContent);

  renderList();
}

function deleteList(li) {
  console.log(li);
}

function renderList() {
  let todoListHTML = "";

  for(let i=0; i<todoList.length; i++){
    todoListHTML += `<li class="list-group-item">
    <div class="input-group">
      <div class="input-group-prepend">
        <div class="input-group-text todo_list-check">
          <button type="button" class="btn input-group-text todo_prepend-btn todo-check">
            <i class="bi bi-circle icon-non_check"></i>
            <i class="bi bi-check-circle icon-check"></i>
          </button>
        </div>
      </div>
      <input type="text" class="form-control todo_list-input" value="${todoList[i]}" aria-label="Text input with checkbox" disabled>
      <div class="input-group-append">
        <button type="button" class="btn input-group-text todo_append-btn todo-delete"><i class="bi bi-trash3"></i></button>
        <button type="button" class="btn input-group-text todo_append-btn todo-fix">
          <i class="bi bi-diamond icon-non_check"></i>
          <i class="bi bi-fill-diamond icon-check"></i>
        </button>
      </div>
    </div>
  </li>`;
  }

  document.getElementById('todo_list_wrap').innerHTML = todoListHTML;
  inputReset();
}

function inputReset() {
  $todoInput.value = '';
}

$todoInput.addEventListener('focus', inputReset);
$addBtn.addEventListener('click', addList);
$todoBoard.addEventListener('click', function(e){
  /*
  const nodes = [...e.target.parentElement.children];
  const index = nodes.indexOf(e.target);
  console.log(e.target, nodes);
  */
  

  //const $li = e.target.closest('li');
  //let index = $li.index;

  let todoList = e.currentTarget.children[0];
  let todoList_test = e.currentTarget.children[0];

  todoList.style.backgroundColor = 'green';
  console.log(todoList_test);

  //if(!hasDelete) return;

  deleteList(todoList);
});