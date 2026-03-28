//your JS code here. If required.
const modal = document.querySelector('.modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

// Open the modal
openBtn.onclick = function() {
    modal.style.display = "block";
}

// Close the modal with the 'X'
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close the modal by clicking the dark background
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}