const addButton = document.getElementsByClassName("btn-add");
const listItems = document.getElementById("todo-list");
const input = document.getElementsByClassName("input-feild");
const form = document.getElementsByClassName("form")[0];

let id = 1;

function addTask(text) {
  if (text.trim() === "") return;
  const li = document.createElement("li");
  li.classList.add("todo-item");
  li.id = id++;
  li.innerHTML = `
            <img class="icon" src="../Assets/unchecked.png" alt="" />
            <span>${text}</span>
            <button class="btn-update">Update</button>
            <button class="close">x</button>
    `;
  listItems.appendChild(li);
  input[0].value = "";
  input[0].focus();

  const image = li.children[0];
  const span = li.children[1];
  const btnUpdate = li.children[2];
  const btnClose = li.children[3];

  image.addEventListener("click", () => {
    if (image.src.includes("http://127.0.0.1:5500/Assets/unchecked.png")) {
      image.src = "../Assets/checked.png";
      span.classList.add("done");
    } else {
      image.src = "../Assets/unchecked.png";
      span.classList.remove("done");
    }
  });

  btnClose.addEventListener("click", () => {
    li.remove();
  });

  btnUpdate.addEventListener("click", () => {
    alert("Update button will be avaliable soon IA!!");
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addTask(event.target[0].value);
});
