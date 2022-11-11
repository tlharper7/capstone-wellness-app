console.log ("using veet");

document.getElementById("gotoprofile").addEventListener("click", function(e) {
    console.log("click to profile")
    e.preventDefault();
    window.location.href = "profile.html";

});