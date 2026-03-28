//your JS code here. If required.
// 1. Grab all the elements from the HTML
const modal = document.querySelector('.modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

// 2. When the user clicks the button, show the modal
openBtn.onclick = function() {
    modal.style.display = "block";
}

// 3. When the user clicks the 'X', hide the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// 4. When the user clicks anywhere outside the white box, hide the modal
window.onclick = function(event) {
    // If the thing they clicked was the dark background overlay...
    if (event.target === modal) {
        modal.style.display = "none";
    }
}