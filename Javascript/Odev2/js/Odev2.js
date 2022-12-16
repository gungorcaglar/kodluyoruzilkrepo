let ToDoList = document.querySelector('#list');
let Task = document.querySelector('#task');
let TaskArray = []
let CheckedArray = []

function init(){
  if (JSON.parse(localStorage.getItem('Tasks'))){
    TaskArray = JSON.parse(localStorage.getItem('Tasks'));
  }
  if (JSON.parse(localStorage.getItem('Checks'))){
    CheckedArray = JSON.parse(localStorage.getItem('Checks'));
  }
  if (TaskArray != null){
    ShowTaskList()
  }
}

function AddLocalStorage(){
  let result = Task.value.trim();
  if (result != ""){
    TaskArray.push(Task.value);
    localStorage.setItem("Tasks",JSON.stringify(TaskArray));
    CheckedArray[TaskArray.length-1] = 0;
    localStorage.setItem("Checks",JSON.stringify(CheckedArray));
  }
  else{
    showToast(false);
  }
  ShowTaskList();
  Task.value = "";
  showToast(true);
}

function DelLocalStorage(index){
  TaskArray.splice(index,1);
  localStorage.setItem("Tasks",JSON.stringify(TaskArray));
  CheckedArray.splice(index,1);
  localStorage.setItem("Checks",JSON.stringify(CheckedArray));
  ShowTaskList();
}

function ShowTaskList(){
  ToDoList.replaceChildren();
  itemcounter = 0;
    TaskArray.forEach(item => {
      var li=document.createElement("li");
      li.setAttribute("onclick","CheckList("+itemcounter+")");
      if (CheckedArray[itemcounter] == 1){
        li.setAttribute("class","checked");
      }
      else{
        li.setAttribute("class","");
      }
      li.textContent= item;
      li.innerHTML += `<span onclick="DelLocalStorage(${itemcounter})" class="close"><i class="bi bi-trash"></i></span>`;
      ToDoList.appendChild(li);
      itemcounter ++;
    })
}

function CheckList(index){
  if (CheckedArray[index] == 0 || CheckedArray[index] == null){
    CheckedArray[index] = 1;
  }
  else if (CheckedArray[index] == 1 || CheckedArray[index] == null){
    CheckedArray[index] = 0;
  }
  localStorage.setItem("Checks",JSON.stringify(CheckedArray));
  ShowTaskList();
  console.log("check calisti")
}

function showToast(sonuc) {
  if (sonuc == false) {
      $(".error").toast("show");
  }
  else {
      $(".success").toast("show");
  }
}