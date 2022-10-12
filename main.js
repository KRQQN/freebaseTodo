const inputTxt = document.querySelector("#txtFieldInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const list = document.querySelector(".todo-list");
const errorMsg = document.querySelector("#no-input");
const taskArray = [];
const count = document.querySelector("#count");
let countValue = 0;
errorMsg.innerHTML = "";
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
    //declares and sets variables to link to html-element
    const task = document.createElement("li");
    const taskLabel = document.createElement("span");
    const trashButton = document.createElement("button");
    
    trashButton.innerHTML = "&#128465";
    trashButton.setAttribute("id", "deleteBtn");
  
    //appendsession
    list.appendChild(task);
    taskLabel.innerText = text;
    taskLabel.setAttribute("class", "preSpan" )
    task.appendChild(taskLabel);
    task.appendChild(trashButton);

    //object made and pushed into array
    const taskObj = { task: text, isComplete: false };
    taskArray.push(taskObj);

    // Eventlistener for deleteBtn"trashButton
    trashButton.addEventListener("click", function () {
      if (task.getAttribute("class") == "completed") {
        countValue--;
        task.remove();
      } else {
        task.remove();
      }
      if (countValue == 0) count.innerHTML ="";
      if (countValue > 0) count.innerHTML = `Tasks done: ${countValue}`;
    });

    //Eventlistener for tasklabel.
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
      if (countValue == 0) count.innerHTML ="";
      if (countValue > 0) count.innerHTML = `Tasks done: ${countValue}`;

      
    });
  } else {
    errorMsg.innerHTML = "Du måste skriva in något i textfältet";
  }
});
