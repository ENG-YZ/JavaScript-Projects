document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const toggleThemeBtn = document.getElementById('toggleThemeBtn');
    const themeIcon = document.getElementById('themeIcon');
    const searchInput = document.getElementById('searchInput');

    // Function to load tasks from local storage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        taskList.innerHTML = ''; // Clear existing tasks

        tasks.forEach(task => {
            const li = createTaskElement(task.text, task.completed);
            taskList.appendChild(li);
        });

        // Toggle search input visibility based on tasks
        toggleSearchInputVisibility(tasks.length > 0);
    }

    // Function to save tasks to local storage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            tasks.push({
                text: li.querySelector('.task-text').textContent.trim(),
                completed: li.classList.contains('completed')
            });
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Function to create a new task element
    function createTaskElement(taskText, completed = false) {
        const li = document.createElement('li');
        li.innerHTML = `<div class="task-info">
                            <span class="task-text">${taskText}</span>
                        </div>
                        <div class="task-buttons">
                            <button class="editBtn"><i class='bx bxs-edit-alt'></i></button>
                            <button class="deleteBtn"><i class='bx bx-trash' ></i></button>
                        </div>`;
        if (completed) {
            li.classList.add('completed');
        }

        li.addEventListener('click', (e) => {
            if (e.target.classList.contains('task-text')) {
                li.classList.toggle('completed');
                saveTasks();
            }
        });

        const editBtn = li.querySelector('.editBtn');
        editBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const newTaskText = prompt('Edit your task', li.querySelector('.task-text').textContent);
            if (newTaskText) {
                li.querySelector('.task-text').textContent = newTaskText;
                saveTasks();
            }
        });

        const deleteBtn = li.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            li.classList.add('removing');
            li.addEventListener('animationend', () => {
                li.remove();
                saveTasks();
                // Toggle search input visibility after task deletion
                toggleSearchInputVisibility(taskList.children.length > 0);
            });
        });

        return li;
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = createTaskElement(taskText);
            taskList.appendChild(li);
            taskInput.value = '';
            saveTasks();
            // Toggle search input visibility after adding a task
            toggleSearchInputVisibility(true);
        }
    }

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Function to toggle search input visibility
    function toggleSearchInputVisibility(visible) {
        searchInput.style.display = visible ? 'block' : 'none';
    }

    // Function to filter tasks based on search input
    function filterTasks(searchTerm) {
        const allTasks = Array.from(taskList.getElementsByTagName('li'));

        allTasks.forEach(task => {
            const text = task.querySelector('.task-text').textContent.toLowerCase();
            if (text.includes(searchTerm.toLowerCase())) {
                task.style.display = 'flex'; // Show task
            } else {
                task.style.display = 'none'; // Hide task
            }
        });
    }

    // Event listener for search input
    searchInput.addEventListener('input', () => {
        filterTasks(searchInput.value);
    });

    // Toggle dark mode function
    toggleThemeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        // Toggle icon between moon and sun
        themeIcon.classList.toggle('bxs-moon');
        themeIcon.classList.toggle('bxs-sun');
    });

    // Load tasks when the page loads
    loadTasks();
});
