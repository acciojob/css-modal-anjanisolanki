//your JS code here. If required.
const modal = document.querySelector('.modal');
const openBtn = document.getElementById('openModal');
const closeBtn = document.querySelector('.close-modal');

openBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}