console.log ("using veet");

document.getElementById("gotoprofile").addEventListener("click", function(e) {
    console.log("click to profile")
    e.preventDefault();
    window.location.href = "profile.html";

});

//Add nav bar controls
document.getElementById("checkin").addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "checkin.html";
})
document.getElementById("calendar").addEventListener("click", function(e) {
    e.preventDefault();
    window.location.href = "calendar.html";
})