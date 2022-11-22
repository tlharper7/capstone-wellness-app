import { addData, getDataById, deleteDataById, getData,profileDataList } from "../js/database";


document.getElementById("profilesub").addEventListener("click", function(e) {
    e.preventDefault();
    console.log("on profile page");
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var eAddy = document.getElementById('eAddy').value;
    var bDate = document.getElementById("bDate").value;
    console.log(bDate);
    localStorage.setItem("curremailid", eAddy);
    var data = { "emailID": eAddy+"_profile", "fname": fName, "lname": lName, "bdate": bDate };
    console.log(data);
    profileDataList.set(eAddy, data); 
    addData(data)
    window.location.href = "checkin.html";
  
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

