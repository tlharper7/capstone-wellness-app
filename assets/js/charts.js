
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Excited", "Happy", "Fine", "Sad", "Angry"],
        datasets: [{
            label: "Daily Emotions",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [5, 10, 10, 3, 2]
        }]
    },

    options: {
        title: {
            display: true,
            text: 'Daily Emotions in Number of Days'
        }
    }
});
new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        datasets: [{

            data: [16, 32, 64, 32, 12, 96, 64, 32, 32, 64, 64, 64, 64, 32, 16, 16, 24, 36, 48, 24, 32, 54, 12, 98, 78, 64, 72, 76, 80, 70],
            label: "Water",
            borderColor: "#c45850",
            fill: true
        }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Daily Water Intake (in Ounces)'
        }
    }
});
new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
        labels: ["Breakfast", "Lunch", "Dinner", "Snacks"],
        datasets: [
            {
                label: "Number of Meals Eaten (Days)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9"],
                data: [30, 7, 23, 30]
            }
        ]
    },
    options: {
        legend: { display: false },
        title: {
            display: true,
            text: 'Daily Meals'
        }
    }
});

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Yes", "No", "N/A"],
        datasets: [
            {
                label: "Medication (Days)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [25, 5, 0]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Daily Medication'
        }
    }
});