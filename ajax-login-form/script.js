document.getElementById('loginForm').onsubmit=function(e){
    e.preventDefault(); // Prevents page reload during login.
    let email=document.getElementById('email').value.trim(); let pass=document.getElementById('password').value.trim();
    if(!/^\S+@\S+\.\S+$/.test(email) || pass===''){ msg.textContent='Enter valid email and password'; msg.className='error'; return; }
    loader.style.display='block'; msg.textContent='';
    // AJAX POST simulates login request to mock API.
    fetch('https://jsonplaceholder.typicode.com/posts',{method:'POST',body:JSON.stringify({email:email,password:pass}),headers:{'Content-type':'application/json'}}).then(r=>r.json()).then(()=>{loader.style.display='none'; msg.textContent='Login successful'; msg.className='success';}).catch(()=>{loader.style.display='none'; msg.textContent='Login failed'; msg.className='error';});
};
