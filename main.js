
const inputTxt = document.querySelector("#txtFieldInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const list = document.querySelector(".todo-list");
const errorMsg = document.querySelector("#no-input");
const taskArray = [];
const count = document.querySelector("#count");
let countValue = 0;

// adding eventlistener -> addTaskBtn.
addTaskBtn.addEventListener("click", function (e) {
  e.preventDefault();
  //getting text from <input> through inputTxt -> text 
  const text = inputTxt.value;
  //if inputfield isnt empty
  if (text != "") {
    //defaults errorMsg & inputTxt each click
    errorMsg.innerHTML = "";
    inputTxt.value = "";
    //declares and sets variables to html-element
    const task = document.createElement("li");
    const taskLabel = document.createElement("span");
    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = "&#128465";
    trashbutton.setAttribute("id","deleteBtn");
    
    list.appendChild(task);
    taskLabel.innerText = text;
    task.appendChild(taskLabel);
    task.appendChild(trashbutton);

    const taskObj = { task: text, isComplete: false };
    taskArray.push(taskObj);

    trashbutton.addEventListener("click",
    function(){
        if(task.getAttribute("class") == "completed"){
            countValue--;
            task.remove();
        } else {
            task.remove();
        }
        count.innerHTML = `Tasks done: ${countValue}`;
        


    })

    taskLabel.addEventListener("click", function () {
      if (task.getAttribute("class") == "completed") {
        task.setAttribute("class", "");
        taskObj.isComplete = false;
        countValue--;
        
        
      } else {
        task.setAttribute("class", "completed");
        taskObj.isComplete = true;
        countValue++;
        
      }
      count.innerHTML = `Tasks done: ${countValue}`;
    });
  } else {
    errorMsg.innerHTML = "Du måste skriva in något i textfältet";
  }
  
});


