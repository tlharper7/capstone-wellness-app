import { openDB } from 'idb';
import { getData } from '../js/database';

let currUser = localStorage.getItem('curremailid');
let userCheckin = [];
var checkIns = [];
console.log(currUser);
getData().then((response) => {
    
console.log(response);
response.forEach(checkin => {
    if(checkin.emailID === currUser+"_checkin"){ 
        userCheckin.push(checkin);
    }
}
);
console.log("from indexDB:",userCheckin);
}).then(() => {
    setUp();
});




const months = [ 
    "January", 
    "February", 
    "March", 
    "April", 
    "May", 
    "June", 
    "July", 
    "August", 
    "September", 
    "October", 
    "November", 
    "December" 
];

"use strict";

	// Setup the calendar with the current date
     function setUp (){
        var date = new Date();
        var today = date.getDate();
        // Set click handlers for DOM elements
        $(".right-button").click({date: date}, next_year);
        $(".left-button").click({date: date}, prev_year);
        $(".month").click({date: date}, month_click);
        // $("#add-button").click({date: date}, new_event);
        // Set current month as active
        $(".months-row").children().eq(date.getMonth()).addClass("active-month");
        init_calendar(date);
        // var checkIns = await checkForCheckin(today, date.getMonth()+1, date.getFullYear());
        // show_checkIns(checkIns, months[date.getMonth()], today);
    
     }

       // Checks if a specific date has any events


// console.log(checkIns);
    // Initialize the calendar by appending the HTML dates
function init_calendar(date) {
    $(".tbody").empty();
    $(".events-container").empty();
    var calendar_days = $(".tbody");
    var month = date.getMonth();
    var year = date.getFullYear();
    var day_count = days_in_month(month, year);
    var row = $("<tr class='table-row'></tr>");
    var today = date.getDate();
    // Set date to 1 to find the first day of the month
    date.setDate(1);
    var first_day = date.getDay();
    // 35+firstDay is the number of date elements to be added to the dates table
    // 35 is from (7 days in a week) * (up to 5 rows of dates in a month)
    for(var i=0; i<35+first_day; i++) {
        // Since some of the elements will be blank, 
        // need to calculate actual date from index
        var day = i-first_day+1;
        // If it is a sunday, make a new row
        if(i%7===0) {
            calendar_days.append(row);
            row = $("<tr class='table-row'></tr>");
        }
        // if current index isn't a day in this month, make it blank
        if(i < first_day || day > day_count) {
            var curr_date = $("<td class='table-date nil'>"+"</td>");
            row.append(curr_date);
        }   
        else {
            var curr_date = $("<td class='table-date'>"+day+"</td>");
            var events = checkForCheckin(day, month+1, year);
            console.log("events", events);
            if(today===day && $(".active-date").length===0) {
                curr_date.addClass("active-date");
                show_checkIns(events, months[month], day);
            }
            // If this date has any events, style it with .event-date
            if(events.length!==0) {
                curr_date.addClass("event-date");
            }
            // Set onClick handler for clicking a date
            curr_date.click({events: events, month: months[month], day:day}, date_click);
            row.append(curr_date);
        }
    }
    // Append the last row and set the current year
    calendar_days.append(row);
    $(".year").text(year);
};

// Get the number of days in a given month/year
function days_in_month(month, year) {
    var monthStart = new Date(year, month, 1);
    var monthEnd = new Date(year, month + 1, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
}

// Event handler for when a date is clicked
function date_click(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    $(".active-date").removeClass("active-date");
    $(this).addClass("active-date");
    show_checkIns(event.data.events, event.data.month, event.data.day);
};

// Event handler for when a month is clicked
function month_click(event) {
    $(".events-container").show(250);
    $("#dialog").hide(250);
    var date = event.data.date;
    $(".active-month").removeClass("active-month");
    $(this).addClass("active-month");
    var new_month = $(".month").index(this);
    date.setMonth(new_month);
    init_calendar(date);
}

// Event handler for when the year right-button is clicked
function next_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()+1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}

// Event handler for when the year left-button is clicked
function prev_year(event) {
    $("#dialog").hide(250);
    var date = event.data.date;
    var new_year = date.getFullYear()-1;
    $("year").html(new_year);
    date.setFullYear(new_year);
    init_calendar(date);
}




// Display all events of the selected date in card views
function show_checkIns(checkIns, month, day) {
    console.log("show checkin:", checkIns);
    // Clear the dates container
    $(".events-container").empty();
    $(".events-container").show(250);
    console.log(checkIns);
    // If there are no events for this date, notify the user
    if(checkIns.length===0) {
        var event_card = $("<div class='event-card'></div>");
        var event_name = $("<div class='event-name'>There are no check-ins for "+month+" "+day+".</div>");
        $(event_card).css({ "border-left": "10px solid #FF1744" });
        $(event_card).append(event_name);
        $(".events-container").append(event_card);
    }
    else {
        // Go through and add each event as a card to the events container
        for(var i=0; i<checkIns.length; i++) {
            var checkIn_card = $("<div class='event-card'></div>");
            var checkIn_date = $("<div class='event-name'>"+checkIns[i].checkinDate+"</div>");
            var checkIn_feedback = $("<div class='event-feedback'>Emotional Feedback:"+checkIns[i].feedback+"</div>");
            var checkIn_mealdata = $("<div class='event-mealdata'> Meals: "+ checkIns[i].mealdata+" </div>");
            var checkIn_waterIntake = $("<div class='event-water'> Water Intake: "+ checkIns[i].waterintake+" </div>");
            var checkIn_journal = $("<div class='event-journal'> Journal Entry: "+ checkIns[i].entry+" </div>");
           
            $(checkIn_card).append(checkIn_date).append(checkIn_feedback).append(checkIn_mealdata).append(checkIn_waterIntake).append(checkIn_journal);
            $(".events-container").append(checkIn_card);
        }
    }
};

function checkForCheckin(day, month, year) {
    
    console.log("userCheckin check outside loop", userCheckin);
    console.log("userCheckIn array",userCheckin.length);
    console.log("day:", day);
    console.log("month:", month);
    console.log("year:", year);
    var checkIn;
    // console.log("outside loop checkin:", checkIn)

    for(var i=0; i < userCheckin.length; i++) {
       
        console.log("usercheckIn inside loop:",userCheckin)
        console.log("in loop day:", day);
        console.log(" in loop month:", month);
        console.log(" in loop year:", year);

        if(userCheckin[i].day===day &&
            userCheckin[i].month===month &&
            userCheckin[i].year==year) {
                checkIns.push(userCheckin[i]);
        }else{
            checkIns =[];
        }
import { openDB } from 'idb';
import { getData } from '../js/database';
console.log(getData);


    

     }
     console.log("check4checkin:",checkIns) 
    return checkIns;
};