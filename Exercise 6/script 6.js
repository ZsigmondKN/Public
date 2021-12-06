var  todolist = [
	"clean room",
	"study javascript",
	"exercise",
	"see friends",
];


todolist.forEach(function(i, todos) {
	console.log(i, todos);
})

function logToDoList(i, todo) {
	console.log(i, todo)
}

todolist.forEach(logToDoList);
