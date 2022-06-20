const elForm = document.querySelector(".form");
const elInput = document.querySelector(".input");
const elList = document.querySelector(".todos-list");

//SPANLAR TANLAB OLISH:
const elCountAll = document.querySelector(".count-all");
const elCountCompleted = document.querySelector(".count-completed");
const elCountUncompleted = document.querySelector(".count-uncompleted");

//BUTTONLARNI TANLAB OLISH:
const elAllCompletedBtn = document.querySelector(".btn-all");
const elCompletedBtn = document.querySelector(".btn-completed");
const elUncompletedBtn = document.querySelector(".btn-uncompleted");

let todos = [];

elList.addEventListener("click", function (evt) {
  const deleteBtnId = evt.target.dataset.deleteBtnId * 1;
  const foundTodoIndex = todos.findIndex((todo) => todo.id === deleteBtnId);

  if (evt.target.matches(".delete-btn")) {
    todos.splice(foundTodoIndex, 1);

    elList.innerHTML = null;

    renderTodos(todos, elList);
  } else if (evt.target.matches(".check-btn")) {
    const checkBtnId = evt.target.dataset.checkBtnId * 1;

    const foundTodo = todos.find((todo) => todo.id === checkBtnId);

    foundTodo.isCompleted = !foundTodo.isCompleted;

    elList.innerHTML = null;

    renderTodos(todos, elList);
  }
});

const renderTodos = function (arr, htmlElement) {
  arr.forEach((todo) => {
    elCountAll.textContent = todos.length;
    elCountCompleted.textContent = todos.filter(
      (todo) => todo.isCompleted === true
    ).length;

    elCountUncompleted.textContent = todos.filter(
      (todo) => todo.isCompleted === false
    ).length;

    const newItem = document.createElement("li");
    const newCheckbox = document.createElement("input");
    const newDeleteBtn = document.createElement("button");

    newItem.textContent = todo.title;
    newCheckbox.type = "checkbox";
    newDeleteBtn.textContent = "Delete";

    newDeleteBtn.classList.add("delete-btn");
    newCheckbox.classList.add("check-btn");

    newDeleteBtn.dataset.deleteBtnId = todo.id;
    newCheckbox.dataset.checkBtnId = todo.id;

    if (todo.isCompleted) {
      newCheckbox.checked = true;

      newItem.style.textDecoration = "line-through";
    }

    htmlElement.appendChild(newItem);
    newItem.appendChild(newCheckbox);
    newItem.appendChild(newDeleteBtn);
  });
};

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  const inputValue = elInput.value;

  const newTodo = {
    id: todos[todos.length - 1]?.id + 1 || 0,
    title: inputValue,
    isCompleted: false,
  };

  todos.push(newTodo);

  elInput.value = "";

  elList.innerHTML = null;

  renderTodos(todos, elList);
});

elAllCompletedBtn.addEventListener("click", function () {
  elList.innerHTML = null;

  renderTodos(todos, elList);
});

elCompletedBtn.addEventListener("click", function () {
  const completedFilter = todos.filter((todo) => todo.isCompleted);

  elList.innerHTML = null;

  renderTodos(completedFilter, elList);
});

elUncompletedBtn.addEventListener("click", function () {
  const uncompletedFilter = todos.filter((todo) => todo.isCompleted === false);

  elList.innerHTML = null;

  renderTodos(uncompletedFilter, elList);
});
