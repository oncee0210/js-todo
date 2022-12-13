const $todoBoard = document.querySelector('#todo_list_wrap');
const $todoInput = document.querySelector('#todo-input');
const $addBtn = document.querySelector('#todo-add');
const $deleteBtn = document.querySelector('.todo-delete');
let todoList = [];
let ongoing = false;

function addList() {
  let todoContent = {
    ongoing: ongoing,
    contents: $todoInput.value
  };

  todoList.push(todoContent);
  renderList();
}

function deleteList(idx) {
  todoList.splice(idx, 1);

  if(todoList.length > 0){
    renderList();
  }else{
    $todoBoard.innerHTML = `<li class="list-group-item">
    <p class="text-center todo-empty">There is no registered data.</p>
    </li>`;
  }
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
      <input type="text" class="form-control todo_list-input" value="${todoList[i].contents}" aria-label="Text input with checkbox" disabled>
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

  $todoBoard.innerHTML = todoListHTML;
  inputReset();
}

function inputReset() {
  $todoInput.value = '';
}

$todoInput.addEventListener('focus', inputReset);
$addBtn.addEventListener('click', addList);
$todoBoard.addEventListener('click', function(e){
  const nodes = [...e.target.closest('#todo_list_wrap').children];
  const eTarget = e.target;
  const index = nodes.indexOf(eTarget.closest('li'));

  console.log(eTarget.classList.contains("todo-delete"));

  //if(targetList.tagName == 'LI')
  //  deleteList(index);
});