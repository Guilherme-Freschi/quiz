//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const avance_btn = document.querySelector(".avance_btn button");
const quiz_box = document.querySelector(".quiz_box");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");


// if startQuiz button clicked
start_btn.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
}
avance_btn.onclick = ()=>{
    quiz_box.classList.remove("activeQuiz"); //hide result box
    info_box.classList.add("activeInfo"); //show info box
}
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
}
