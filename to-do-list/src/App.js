const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const prioritySelect = document.getElementById('priority-select');

let tasks = [];

// Load tasks from localStorage on page load
window.addEventListener('load', () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }
});

// Add task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  const priority = prioritySelect.value;
  if (taskText !== '') {
    addTask(taskText, priority);
    taskInput.value = '';
  }
});

// Add task function
function addTask(text, priority) {
  const task = {
    id: Date.now(),
    text,
    completed: false,
    priority,
  };
  tasks.push(task);
  tasks.sort((a, b) => {
    const priorityOrder = { Hard: 3, Medium: 2, Easy: 1 };
    return priorityOrder[b.priority] - priorityOrder[a.priority] || a.text.localeCompare(b.text);
  });
  saveTasks();
  renderTasks();
}

// Remove task
function removeTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  saveTasks();
  renderTasks();
}

// Toggle task completion
function toggleTask(taskId) {
  const task = tasks.find((task) => task.id === taskId);
  task.completed = !task.completed;
  saveTasks();
  renderTasks();
}

// Render tasks
function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('task');
    if (task.completed) {
      listItem.classList.add('completed');
    }

    const checkboxInput = document.createElement('input');
    checkboxInput.type = 'checkbox';
    checkboxInput.checked = task.completed;
    checkboxInput.addEventListener('change', () => toggleTask(task.id));

    const taskText = document.createElement('span');
    taskText.textContent = `${task.text} (Priority: ${task.priority})`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => removeTask(task.id));

    listItem.appendChild(checkboxInput);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
  });
}

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}