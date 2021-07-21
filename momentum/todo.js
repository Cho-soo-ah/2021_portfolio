const toDoForm = document.querySelector(".js_toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js_toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function filterFn(toDo){
        return toDo.id !== parseInt(li.id);
   });
   toDos = cleanToDos
   saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
}// localStorage가 string타입밖에 저장되지않아서 바꿔줌
    // JSON : javascript object notation

function paintToDo(text){
    const li = document.createElement("li"); // li를 생성
    const delBtn = document.createElement("button"); // 삭제버튼 생성
    const span = document.createElement("span"); 
    const newId = toDos.length + 1;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn); // delBtn을 li 안에 넣음
    li.appendChild(span); // span을 li 안에 넣음
    li.id = newId;
    toDoList.appendChild(li); // li를 toDoList 안에 넣음

    const toDoObj = {
        text : text,
        id: newId
    }
    toDos.push(toDoObj); 

    saveToDos();
} 

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){ // 각각의 오브젝트에 함수를 실행시킴
            paintToDo(toDo.text); 
        })
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();