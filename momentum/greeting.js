const form = document.querySelector(".js_form"),
    input = form.querySelector("input"),
    greetings = document.querySelector(".js_greetings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); // 폼을 제출했을 때, 새로고침되는 것을 막음
    const currentValue = input.value; // 폼에 제출된 변수에 저장
    paintGreeting(currentValue); // 저장된 변수를 보여줌
    saveName(currentValue); // 이름값을 저장, 새로고침을 해도 저장된 이름을 보여줌
}


function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){

    form.classList.remove(SHOWING_CN);
    greetings.classList.add(SHOWING_CN);
    greetings.innerText = `Hello ${text}`;

}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);

    if(currentUser === null){
        // she is not
        askForName();
    } else {
         // she is
         paintGreeting(currentUser);
    }

}

function init(){
    loadName();
}

init();