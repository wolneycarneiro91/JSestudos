var counterTasks = 1;
var task = {
  id: 0,
  name: "",
  date_: "",
  hour_: "",
  get idTask() {
    return this.id;
  },
  get nameTask() {
    return this.name;
  },
  get dateTask() {
    return this.date_;
  },
  get hourTask() {
    return this.hour_;
  },
  set idTask(idTask) {
    this.id = idTask;
  },
  set nameTask(nameTask) {
    this.name = nameTask;
  },
  set dateTask(dateTask) {
    this.date_ = dateTask;
  },
  set hourTask(hourTask) {
    this.hour_ = hourTask;
  },
};

function createTask() {
  let taskDigited = String(document.getElementById("taskDescription").value);
  let identificator = counterTasks;
  let d = new Date();
  task.id = identificator;
  task.nameTask = taskDigited;
  task.dateTask = d.getDate();
  task.hourTask = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  saveTask(task);
  //  renderTask(storageTasks);
}
function saveTask(taskTarget) {
  var arrayTasks = [];
  arrayTasks.push(taskTarget);
  counterTasks++;
  renderTask(arrayTasks);
}

function removeTasks(){
  let list = document.getElementById("unorderlyListTasks");
  list.childNodes[1].innerHTML='';  
}
function renderTask(storagedTasks) {
  let listRender = "";
  let sizeStoragedTasks = storagedTasks.length;
  var i = 0;
  for (i = 0; i <= sizeStoragedTasks; i++) {
    if (typeof storagedTasks[i] !== "undefined") {
      document.getElementById("taskCreated").innerHTML +=
        "<li id='liIdentification_"+storagedTasks[i].id+"'>" +
              renderFieldTask(storagedTasks[i].id,storagedTasks[i].name )+
              renderButtonEdit(storagedTasks[i].id) +
              renderButtonDelete(storagedTasks[i].id)+         
        "</li>";
    }
  }
}
function renderFieldTask(storagedTasksId,storagedTasksName){
  return(
      "<input type='text' onfocusout='disableEdit("+storagedTasksId+")' readonly id='taskCreatedField_"  +
      storagedTasksId+"' value='"+storagedTasksName+"' /> &nbsp;"  
  );
}
function renderButtonEdit(storagedTasksId) {
  return (
          "<a href='#' onclick='editTask(" +
          storagedTasksId +
          ")'>editar</a>&nbsp;"
        );
}

function renderButtonDelete(storagedTasksId){
  return (
    "<a href='#' onclick='deleteTask(" +
    storagedTasksId +
    ")'>excluir</a>"
  );  
}

function editTask(idTaskStoraged) {  
  document
    .getElementById("taskCreatedField_" + idTaskStoraged)
    .removeAttribute("readonly");
  document
  .getElementById("taskCreatedField_" + idTaskStoraged)
  .focus();    
  let taskCreatedField = document.getElementById(
    "taskCreatedField_" + idTaskStoraged
  ).value;
  
}

function deleteTask(idTaskStoraged){
  document
  .getElementById("liIdentification_" + idTaskStoraged).innerHTML="";

}

function disableEdit(idTaskStoraged){
  document
  .getElementById("taskCreatedField_" + idTaskStoraged)
  .setAttribute("readonly",true);


}
