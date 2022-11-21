import { openDB } from 'idb';
import { addData } from '../js/database';


document.getElementById("submitcheck").addEventListener("click", function(e) {
    e.preventDefault();
    
    //function to log emotions
    var emotions = document.getElementsByName('feedback');
    for (var i=0; i < emotions.length; i++) {
        if (emotions[i].checked) {
            var emotionsvalue = emotions[i].value;
        }
    }
    console.log(emotionsvalue);

    //log for water consumption
    var wAter = document.getElementById("wAter").value;
    console.log(wAter);

     //function for logging meals
    var mealTotal = [];
    var dailyMeals = document.getElementsByClassName('mealType');
    console.log(dailyMeals);
    for(var i=0; i<dailyMeals.length; i++){
        if(dailyMeals[i].checked){
            mealTotal.push( dailyMeals[i].value);
        }
    }
    console.log(mealTotal);

    //function to log medications
    var medications = document.getElementsByName('meds');
    for (var i=0; i < medications.length; i++) {
        if (medications[i].checked) {
            var medicationsvalue = medications[i].value;
        }
    }
    console.log(medicationsvalue);

    //function for reminders
    var followup = document.getElementById('reminders');
    var reminds;
    if (followup.checked) {
        reminds = true;
    }else{
        reminds = false;
        }
    console.log(reminds);
    
    //log for journal entry
    var eNtry = document.getElementById("eNtry").value;
    console.log(eAddy);

    console.log(eNtry);
    var eAddy = localStorage.getItem("curremailid");
        var fullDate = new Date()
        console.log(fullDate);
        var year = fullDate.getFullYear();
        var date = fullDate.getDate();
        var month = 1 + fullDate.getMonth();
        var dateDb = `${month}/${date}/${year}`;
        console.log(dateDb)

  
   
    var data = { "emailID": eAddy + "_checkin", "feedback": emotionsvalue, "waterintake": wAter, "mealdata": mealTotal.join(","), "meds": medicationsvalue, "reminders": reminds, "entry": eNtry, "checkinDate": dateDb };
    addData(data)
    window.location.href = "calendar.html";
})