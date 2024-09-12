function addTask() {
    const taskInput = document.getElementById('new-task'); // adding text input
    const taskList = document.getElementById('task-list'); // list of tasks added by the addTask function
    if (taskInput.value.trim() !== '') { //checks for empty string after trimming and leading or trailing whitespace
        const li = document.createElement('li'); //creates a new list item element
        li.className = 'task'; // used to asign a CSS class to an HTML element for styling
        li.textContent = taskInput.value; // sets the text content of the html element to the value of the input field
        const deleteButton = document.createElement('button'); //creates a new button element storing a reference to the variable deleteButton
        deleteButton.textContent = 'Delete'; // button text delete textContent - replaces existing text content of that element with a new string value
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        }; // onclick event handler that removes the list item when the button is clicked
        li.appendChild(deleteButton); // adding the deleteButton as a child of the li element, the button will appear inside the li element
        taskList.appendChild(li); // adding the li element as the last child of the taskList  
        taskInput.value = ''; // clears the input field after adding the task   
    }
}
document.getElementById('task-list').addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
});
/*
1. document.getElementById('task-list')
This line selects an element with the ID "task-list" from the HTML document. The document object represents the entire webpage, and getElementById is a method that finds an element by its unique ID.
2. .addEventListener('click', function(e) {
This line adds an event listener to the selected element (task-list).
.addEventListener is a method that attaches a function to be called when a specific event happens on the element.
In this case, the event is "click," meaning the function will be triggered whenever the user clicks on the element or any of its children.
The function we want to execute is provided within the parentheses function(e) { ... }.
The argument e (stands for event) represents the click event that occurred and provides information about it.
3. if (e.target.tagName === 'LI') {
This line checks if the element that was actually clicked on (the event target) has the tag name "LI".
e.target refers to the element that triggered the click event.
tagName is a property of the element that holds its HTML tag name (in uppercase).
This if statement ensures the code inside only runs if the user clicked directly on an <li> element (list item) or something within it, not on the entire task-list itself.
4. e.target.classList.toggle('completed');
This line modifies the clicked <li> element.
classList is a property that provides access to the element's class list.
toggle('completed') is a method of classList that toggles the presence of the class "completed" on the element.
If the element already has the class "completed," it will be removed.
If the element doesn't have the class "completed," it will be added.
*/
