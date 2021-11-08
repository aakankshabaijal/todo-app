console.log('Connected!');
const todoList = document.querySelector('.todoList');

class TODO {
	toDoArray = []; //an array of objects where every object has two properties : completed and description

	addToDo(toDo) {
		const toDoItem = document.createElement('div');
		toDoItem.classList.add('todoItem');

		//add checkbox
		const checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		checkBox.classList.add('todoItem_checkbox');
		checkBox.name = 'checkbox';
		toDoItem.appendChild(checkBox);

		//add text
		const toDoText = document.createElement('div');
		toDoText.classList.add('todoItem_text');
		toDoText.innerText = toDo;
		toDoItem.appendChild(toDoText);

		//add delete button
		const deleteToDo = document.createElement('div');
		deleteToDo.classList.add('todoItem_delete');
		const deleteButton = document.createElement('button');
		deleteButton.classList.add('deleteButton');
		const deleteButtonIcon = document.createElement('i');
		deleteButtonIcon.classList.add('fas', 'fa-trash-alt');
		deleteButton.appendChild(deleteButtonIcon);
		deleteToDo.appendChild(deleteButton);
		toDoItem.appendChild(deleteToDo);

		todoList.appendChild(toDoItem);
		this.pushToArray(toDo);
	}

	pushToArray(toDo) {
		const task = {
			completed   : false,
			description : toDo
		};
		this.toDoArray.push(task);
		console.log(this.toDoArray);
	}

	getIndex(currentToDoText) {
		for (let i = 0; i < this.toDoArray.length; i++) {
			if (this.toDoArray[i].description === currentToDoText) {
				return i;
			}
		}
		return -1;
	}

	markAsCompleted(index) {
		this.toDoArray[index].completed = !this.toDoArray[index].completed;
		console.log(this.toDoArray);
	}
}

let userInputToDo = document.querySelector('.userInput');

const myTodo = new TODO();

//*CREATE TODO
userInputToDo.addEventListener('keyup', (event) => {
	if (event.keyCode === 13) {
		//when enter is pressed
		myTodo.addToDo(userInputToDo.value);
		userInputToDo.value = '';
	}
});

//*UPDATE TODO
/*	if the checkbox of any task is checked then mark it as completed,
	if it is unchecked then remove the completed class
*/
let toDoList = document.querySelector('.todoList');
toDoList.addEventListener('click', (event) => {
	if (event.target.classList.contains('todoItem_checkbox')) {
		console.log('checkbox clicked!');
		const currentToDo = event.target.nextElementSibling;
		const currentToDoText = event.target.nextElementSibling.innerText; //string
		myTodo.markAsCompleted(myTodo.getIndex(currentToDoText));
		currentToDo.classList.toggle('completed');
	}
});

//*DELETE TODO
/*	if the delete button of any task is clicked then remove the task from the list
*/
