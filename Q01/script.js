$(document).ready(function(){
    // Add button reads input value and creates a new task dynamically.
    $('#addBtn').click(function(){
        let taskText = $('#taskInput').val().trim();
        if(taskText === ''){ alert('Please enter a task'); return; }
        let task = $('<li class="task"><span>'+taskText+'</span> <button class="remove">Remove</button></li>');
        $('#taskList').append(task); // Adds the new task to the list.
        task.fadeIn(); // Required fadeIn animation when adding task.
        $('#taskInput').val('');
    });
    // Event delegation works even for tasks added after page load.
    $('#taskList').on('click','span',function(){ $(this).toggleClass('done'); });
    // Remove button fades out the task before deleting it from DOM.
    $('#taskList').on('click','.remove',function(){ $(this).parent().fadeOut(function(){ $(this).remove(); }); });
});
