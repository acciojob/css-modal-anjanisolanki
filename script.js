//your JS code here. If required.
// This listens to every click on the webpage and checks what was clicked
document.addEventListener('click', function(event) {
    const modal = document.querySelector('.modal');
    
    // 1. If they clicked the Open Button...
    if (event.target.id === 'openModal') {
        modal.style.display = "block";
    }
    
    // 2. If they clicked the 'X' Close Button...
    if (event.target.classList.contains('close-modal')) {
        modal.style.display = "none";
    }
    
    // 3. If they clicked outside the box (on the dark background)...
    if (event.target === modal) {
        modal.style.display = "none";
    }
});