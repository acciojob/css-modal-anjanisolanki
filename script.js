//your JS code here. If required.
// 1. Grab all the elements from the HTML
const modal = document.querySelector('.modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

// 2. Open modal when the trigger button is clicked
openBtn.onclick = function() {
    modal.style.display = "block";
}

// 3. Close modal when the 'X' is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 4. Close modal when clicking on the dark background
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}