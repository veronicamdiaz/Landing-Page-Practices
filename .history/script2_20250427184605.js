// Get the modal
const modal = document.getElementById("popupModal");

// Get the icon that opens the modal
const icon = document.getElementById("profileIcon");

// Get the <span> element that closes the modal
const closeButton = document.getElementById("closeButton");

// When the user clicks on the icon, open the modal
icon.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}