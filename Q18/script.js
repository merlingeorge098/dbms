document.getElementById('searchBox').addEventListener('keyup',function(){
    let text=this.value.toLowerCase();
    document.querySelectorAll('tbody tr').forEach(row=>{ row.style.display=row.innerText.toLowerCase().includes(text)?'':'none'; }); // Client-side searchable table.
});
