console.log('Connected!');
let toDoArray = [];
const todoList = document.querySelector('.todoList');

let userInputToDo = document.querySelector('.userInput');
console.log(userInputToDo.value);

userInputToDo.addEventListener('keyup', (event) => {
	if (event.keyCode === 13) {
		//when enter is pressed
		toDoArray.push(userInputToDo.value);
		addToDoInList(userInputToDo.value);
		console.log(toDoArray);
		userInputToDo.value = '';
	}
});

const addToDoInList = (toDo) => {
	const toDoItem = document.createElement('div');
	toDoItem.classList.add('todoItem');
	toDoItem.innerText = toDo;
	todoList.appendChild(toDoItem);
};
