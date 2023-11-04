const inputBox = document.getElementById("input");

const listContainer= document.getElementsByClassName("tasklist")[0];

function addTask() {
    if(inputBox.value == ""){
        alert('Please enter a task !');
    }else {
        let li=document.createElement("li");
        li.innerHTML= inputBox.value;
        console.log(li.innerHTML);
        listContainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveTask();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTask();
    }else{
        e.target.classList.toggle("checked");
        saveTask();
    }
});

function saveTask(){
    localStorage.setItem("data",listContainer.innerHTML);
}


function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();
// console.log("dshi");