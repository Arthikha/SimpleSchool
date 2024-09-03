function showAlert() {
    alert("Welcome to Our School!");
}

function dropDown() {
    document.getElementById("admissionDropDown").classList.toggle("show");
}
  
  
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        var admissionDropDown = document.getElementById("admissionDropDown");
        if (admissionDropDown.classList.contains('show')) {
            admissionDropDown.classList.remove('show');
        }
    }
}

// hgghg