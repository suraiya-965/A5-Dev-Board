
// Select all needed elements
const cardContainer = document.getElementById("card-container");
const Buttons = cardContainer.querySelectorAll(".btn.btn-primary");
const logList = document.getElementById("log-list");
const clearButton = document.getElementById("clear-history");


for (const button of Buttons) {
    button.addEventListener("click", function () {
        alert("Board Update Successfully");
        button.disabled = true;

        
        const taskAssigned = document.getElementById("task-assigned");
        let taskValue = parseInt(taskAssigned.textContent);

        if (taskValue > 0) {
            taskValue -= 1;
            taskAssigned.textContent = taskValue;

           
            const checkbox = document.getElementById("checkbox");
            let checkboxValue = parseInt(checkbox.textContent);
            checkboxValue += 1;
            checkbox.textContent = checkboxValue;
        }

       
        if (taskValue === 0) {
            alert("🎉 Congratulations! All tasks are completed.");
        }

       
        const logItem = document.createElement("li");
        const currentTime = new Date().toLocaleTimeString();
        if(taskValue==5){
            logItem.textContent = `You have completed the task Fix Mobile Button Issue🫶at ${currentTime}`;
        }
         if(taskValue==4){
            logItem.textContent = `You have completed the task Add Dark Mode🫶 at ${currentTime}`;
        }
        if(taskValue==3){
            logItem.textContent = `You have completed the task Optimize Home page🫶 at ${currentTime}`;
        }
        if(taskValue==2){
            logItem.textContent = `You have completed the task Add new emoji 🤲🫶 at ${currentTime}`;
        }
        if(taskValue==1){
            logItem.textContent = `You have completed the task Integrate OpenAI API at🫶  ${currentTime}`;
        }
        if(taskValue==0){
            logItem.textContent = `You have completed the task Improve Job searching at🫶  ${currentTime}`;
        }

       
        logList.appendChild(logItem);
    });
}


clearButton.addEventListener("click", function () {
    logList.innerHTML = ""; 
});
