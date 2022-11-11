document.getElementById("profilesub").addEventListener("click", function(e) {
    e.preventDefault();
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var eAddy = document.getElementById('eAddy').value;
    var bDate = document.getElementById("bDate").value;
    console.log(bDate);
    window.location.href = "checkin.html";
})