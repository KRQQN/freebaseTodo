const inputTxt = document.querySelector("#txtFieldInput");
const addTaskBtn = document.querySelector("#addTaskBtn");
const list = document.querySelector(".todo-list");
const errorMsg = document.querySelector("#no-input");

addTaskBtn.addEventListener(
    "click",
    function(e){
        e.preventDefault();

        const text = inputTxt.value;
        if(text != ""){

            errorMsg.innerHTML = "";
            const task = document.createElement('li');
            const taskLabel = document.createElement('span');
            
            inputTxt.value = "";
            
            list.appendChild(task);
            taskLabel.innerText = text;
            task.appendChild(taskLabel);
            
            taskLabel.addEventListener("click",
            function(){
                if(task.getAttribute("class") == "completed"){
                    task.setAttribute("class","");
                }
                else {
                    task.setAttribute("class","completed");
                }


            });


        }
        else{
            errorMsg.innerHTML = "Du måste skriva in något i textfältet";

        }
    }
)
