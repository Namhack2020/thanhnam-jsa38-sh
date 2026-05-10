let tasks = []; // mảng lưu trữ công việc

// Thêm công việc mới
document.getElementById("addTaskBtn").addEventListener("click", () => {
  const input = document.getElementById("newTaskInput");
  const title = input.value.trim();
  if (title) {
    const newTask = {
      id: Date.now(), // id duy nhất
      title: title,
      completed: false
    };
    tasks.push(newTask);
    input.value = "";
    renderTasks();
  }
});

// Hiển thị danh sách công việc
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = ""; // xóa nội dung cũ

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;

    // Nút Edit
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => {
      const newTitle = prompt("Nhập tên mới:", task.title);
      if (newTitle) {
        task.title = newTitle;
        renderTasks();
      }
    };

    // Nút Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => {
      tasks = tasks.filter(t => t.id !== task.id);
      renderTasks();
    };

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });
}