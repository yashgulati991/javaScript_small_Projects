const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
const todoList = JSON.parse(localStorage.getItem("todoList")) || [];

item.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
    ${item}
    <i class="fa-solid fa-xmark fa-beat" style="color: #000000;"></i>
  `;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
    updateLocalStorage();
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
    updateLocalStorage();
  });

  toDoBox.appendChild(listItem);
  todoList.push(item);
  updateLocalStorage();
};

const updateLocalStorage = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

// Load existing to-do items from local storage
const loadTodoList = () => {
  todoList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      ${item}
      <i class="fa-solid fa-xmark fa-beat" style="color: #000000;"></i>
    `;

    listItem.addEventListener("click", function () {
      this.classList.toggle("done");
      updateLocalStorage();
    });

    listItem.querySelector("i").addEventListener("click", function () {
      listItem.remove();
      updateLocalStorage();
    });

    toDoBox.appendChild(listItem);
  });
};

loadTodoList();
