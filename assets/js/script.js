var formEl=document.querySelector("#task-form");

var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event){
    event.preventDefault();    
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    
    //check form inputs
    if (!taskNameInput||!taskTypeInput){
      alert("Fill out the task form!");
      return false;
    }
    var taskDataObj = {
      name:taskNameInput,
      type:taskTypeInput
    }

    createTaskEl(taskDataObj);
};

var createTaskEl= function(taskDataObj){
  //create list item
  var listItemEl =document.createElement("li")
  //give li element className
  listItemEl.className="task-item";

  //create div to hold task info
  var taskInfoEl=document.createElement("div")
  //give div className
  taskInfoEl.className = "task-info";
  //create html inside of div
  taskInfoEl.innerHTML="<h3 class='task-name'>"+taskDataObj.name+"</h3><span class='task-type'>"+taskDataObj.type+"</span>";
  //append html to li item
  listItemEl.appendChild(taskInfoEl);
  //append li item to ul
  tasksToDoEl.appendChild(listItemEl);

  console.dir(listItemEl)

}


formEl.addEventListener("submit",taskFormHandler)

 

