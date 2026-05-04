document.getElementById('search').oninput=function(){
    let keyword=this.value.toLowerCase(); document.getElementById('results').innerHTML='';
    if(keyword==='') return;
    document.getElementById('loading').textContent='Loading...';
    // XMLHttpRequest fetches users from mock API as user types.
    let xhr=new XMLHttpRequest(); xhr.open('GET','https://jsonplaceholder.typicode.com/users');
    xhr.onload=function(){ document.getElementById('loading').textContent=''; if(xhr.status!==200){ document.getElementById('results').innerHTML='API error'; return; } let users=JSON.parse(xhr.responseText).filter(u=>u.name.toLowerCase().includes(keyword)); users.forEach(u=>document.getElementById('results').innerHTML+='<div class="item">'+u.name+' - '+u.email+'</div>'); };
    xhr.onerror=function(){ document.getElementById('loading').textContent='Error loading users'; }; xhr.send();
};
