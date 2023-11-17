const todoForm=document.getElementById('todo-form');
const todoInput=document.getElementById('todo-input');
const todoList=document.getElementById('todo-list');

let tasks=[];
function renderTasks(){
    todoList.innerHTML="";
    tasks.forEach(function(task){
        const li=document.createElement('li');
        li.textContent=task.title;
        if(task.completed){
            li.classList.add('completed');

        }
        li.addEventListener('click',function(){
            task.completed= !task.completed;
            renderTasks();

        });
        todoList.appendChild(li);
    });
    }
    
    todoForm.addEventListener('submit',function(event){
        event.preventDefault();
        const taskTitle=todoInput.value.trim();
        if(taskTitle!==""){
            const task={
                title:taskTitle,
                completed:false
            };
            tasks.push(task);
            renderTasks();
            todoInput.value="";
        }
    });
    
