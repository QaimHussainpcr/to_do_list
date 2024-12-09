
// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    alert('Please enter a Element.');
    return;
  }

  // Create list item
  const listItem = document.createElement('li');
  listItem.textContent = taskValue;

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.onclick = function () {
    taskList.removeChild(listItem);
  };

  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  // Clear input
  taskInput.value = '';
}

// Event listener for add button
addTaskButton.addEventListener('click', addTask);

// Allow adding task by pressing Enter
taskInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    addTask();
  }
});
