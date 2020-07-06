//set up variables
var task = document.getElementById("task");
var time = document.getElementById("time");
var addButton = document.getElementById("add");
var lineBreak2 = document.getElementById("lineBreak2");
//create List
var taskAndTime = document.createElement("ul");
var toDoList = document.createElement("li");
var spanTask = document.createElement("span");
var spanTime = document.createElement("span");
var startButton = document.createElement("button");
var pauseButton = document.createElement("button");
var resetButton = document.createElement("button");

//create class to that list
taskAndTime.setAttribute("class", "list");
toDoList.setAttribute("class", "taskSpan");
startButton.setAttribute("class", "btn btn-info btn-sm");
startButton.setAttribute("id", "start");
pauseButton.setAttribute("class", "btn btn-info btn-sm");
resetButton.setAttribute("class", "btn btn-info btn-sm");
resetButton.setAttribute("id", "reset");

//styles to button
startButton.style.marginLeft= "20px";
pauseButton.style.marginLeft = "20px";
resetButton.style.marginLeft = "20px";

//set up total time
var totalTimeInSeconds; 

//addEventListeners to Buttons
addButton.addEventListener("click", createToDoList);

startButton.addEventListener("click", function(event) {
    setInterval(countdown, 1000)  
});

resetButton.addEventListener("click", reset);
    
// pauseButton.addEventListener("click", pause);


//input task and time to TO DO LIST when the button ADD is clicked
//create new ul/li element
function createToDoList() {

    //add them to HTML file
    lineBreak2.appendChild(taskAndTime);
    taskAndTime.appendChild(toDoList);
    toDoList.appendChild(spanTask); 
    toDoList.appendChild(spanTime);
    taskAndTime.appendChild(startButton);
    taskAndTime.appendChild(pauseButton);
    taskAndTime.appendChild(resetButton);
    
    //setting innerHTML's
    startButton.innerHTML = "START";
    pauseButton.innerHTML = "PAUSE";
    resetButton.innerHTML = "RESET";
    spanTask.innerHTML = task.value + " - ";
    spanTime.innerHTML = time.value;

}

    //buttons functions 
    var countdown = function() {
        totalTimeInSeconds = totalTimeInSeconds || time.value * 60;
       console.log(event);
        spanTime.innerHTML = totalTimeInSeconds;
        if (totalTimeInSeconds <= 0) { 
            clearInterval();
            spanTime.innerHTML = "Done!"
            }
            totalTimeInSeconds--;
            console.log(totalTimeInSeconds)
        }
  /* else if (seconds < 10) { 
        spanTime.innerHTML = `${minutes} : 0${seconds}`;
    }
    else if (minutes < 10) {
       spanTime.innerHTML = `0${minutes} : ${seconds}`
    }
    else if (minutes < 10 && seconds < 10) {
        spanTime.innerHTML = `0${minutes} : 0${seconds}`
   }*/


function reset() {
    location.reload()
    
}

/*function pause() {

}*/






    