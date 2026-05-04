let list=document.getElementById('list'); let spinner=document.getElementById('spinner');
function loadTasks(){
    spinner.style.display='block';
    // Fetch gets starter tasks from a mock API.
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(r=>r.json()).then(tasks=>{ spinner.style.display='none'; list.innerHTML=''; tasks.forEach(addToDOM); }).catch(()=>spinner.textContent='API error');
}
function addToDOM(task){
    let div=document.createElement('div'); div.className='task'; div.innerHTML=task.title+' <button onclick="deleteTask(this)">Delete</button>'; list.appendChild(div); // DOM update without reload.
}
document.getElementById('add').onclick=function(){
    let title=document.getElementById('task').value.trim(); if(title==='') return alert('Enter task');
    spinner.style.display='block';
    // POST simulates adding the new task.
    fetch('https://jsonplaceholder.typicode.com/todos',{method:'POST',body:JSON.stringify({title:title}),headers:{'Content-type':'application/json'}}).then(r=>r.json()).then(data=>{spinner.style.display='none'; addToDOM({title:title}); document.getElementById('task').value='';});
};
function deleteTask(btn){
    spinner.style.display='block';
    // DELETE simulates deleting task from API.
    fetch('https://jsonplaceholder.typicode.com/todos/1',{method:'DELETE'}).then(()=>{spinner.style.display='none'; btn.parentElement.remove();});
}
loadTasks();
