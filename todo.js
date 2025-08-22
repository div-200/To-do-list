function addTask() {
  const inputBox = document.getElementById("input-box");
  const listContainer = document.getElementById("list-container");

  const taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Optional: Add click-to-mark-done feature
  li.addEventListener("click", function () {
    li.classList.toggle("checked");
  });

  // Optional: Right-click to delete task
  li.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Prevent default right-click menu
    li.remove();
  });

  listContainer.appendChild(li);
  inputBox.value = "";
}