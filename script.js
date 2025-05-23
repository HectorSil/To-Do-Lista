const tasklist = document.getElementById("tasklist");
const taskinput = document.getElementById("taskinput");

function addTask() {
    const tasktext =  taskinput.value.trim();
    if (tasktext !== "") {

        const maxText = tasktext.substring(0, 35);
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${maxText}</span>
        <button class= "editButton" onClick="editTask(this)">Editar</button>
        <button class= "deleteButton" onClick="deleteTask(this)">Remover</button>
        `;
        tasklist.appendChild(li);
        taskinput.value = "";
    }

}

function editTask(button){
    const li = button.parentElement;
    const span = li.querySelector("span");
    const newText = prompt("Editar tarefa:", span.textContent);
    if(newText !== null && newText.trim() !== ""){
        span.textContent = newText.trim();
    }

}

function deleteTask(button) {
    const li = button.parentElement;
    tasklist.removeChild(li);
}