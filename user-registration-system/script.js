// Browser-side validation before PHP receives the form.
document.getElementById('regForm').addEventListener('submit',function(e){
    let phone=document.getElementById('phone').value.trim();
    if(!/^\d{10}$/.test(phone)){ e.preventDefault(); alert('Phone number must be exactly 10 digits'); }
});
