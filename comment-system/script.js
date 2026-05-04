function showComment(text){
    let div=document.createElement('div'); div.className='comment'; div.textContent=text; comments.prepend(div);
    // Small fade-in animation using JS.
    div.style.opacity=0; div.style.display='block'; let op=0; let t=setInterval(()=>{op+=0.1; div.style.opacity=op; if(op>=1) clearInterval(t);},30);
}
fetch('https://jsonplaceholder.typicode.com/comments?_limit=3').then(r=>r.json()).then(data=>data.forEach(c=>showComment(c.body))); // Fetch existing comments.
post.onclick=function(){
    let text=comment.value.trim(); if(text==='') return alert('Comment cannot be empty');
    // POST sends new comment without page refresh.
    fetch('https://jsonplaceholder.typicode.com/comments',{method:'POST',body:JSON.stringify({body:text}),headers:{'Content-type':'application/json'}}).then(()=>{showComment(text); comment.value='';});
};
