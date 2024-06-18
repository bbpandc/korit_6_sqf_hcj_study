let todoList = [];

let emptyTodo = {
    id: 0,
    content: "",
    date: ""
}

let todo = {
    ...emptyTodo
}

function handleTodoInputKeyDown(e) {
    if(e.keyCode === 13) {
        handleTodoOkClick();
    }
}

function handleTodoOkClick(e) {
    if(isBlank(document.querySelector(".todo-input"))) {
        alert("내용을 입력하세요.");
        clearTodoInput();
        return;
    }
    addTodo();
    clearTodoInput();
}

function addTodo() {
    const now = new Date();
    

    const todo = {
        id: 0,
        content: document.querySelector(".todo-input").value,
        date: transformDate(new Date())
    }
    console.log(todo);
}

function clearTodoInput() {
    const todoInput = document.querySelector(".todo-input");
    todoInput.value = "";
    todoInput.focus();
}

function isBlank(input) {
    // 문자열.replaceAll("-", ","): 문자열 안의 '-'를 ','로 바꾼다.
    return !input.value.replaceAll(" ", "");
}

function transformDate(date) {
    const dayList = [ "일", "월", "화", "수", "목", "금", "토" ];
    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} (${dayList[date.getDay()]}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // -> 2024.05.18(화)
}