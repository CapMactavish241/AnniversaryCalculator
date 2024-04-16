let userInput = document.getElementById("date")
let result = document.getElementById("result")
// Prevents users from selecting future date
userInput.max = new Date().toISOString().split("T")[0];

// Define the particular date you want to select
var desiredDate = new Date('2024-03-24'); // Format: YYYY-MM-DD

// Set the minimum selectable date to the desired date
userInput.min = desiredDate.toISOString().split("T")[0];

// Set the minimum selectable date to the desired date
userInput.max = desiredDate.toISOString().split("T")[0];

// Set the value of the input field to the desired date
userInput.value = desiredDate.toISOString().split("T")[0];

function calculateAge()
{
    let StartDate = new Date(userInput.value);

    let d1 = StartDate.getDate();
    let m1 = StartDate.getMonth() + 1;
    let y1 = StartDate.getFullYear();


    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3,m3,y3;
    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }else
    {
        y3--;
        m3 = 12 + m2 - m1;
    }
    if (d2 >= d1)
    {
        d3 = d2 - d1;
    }else{
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if(m3 < 0)
    {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `Helena and Benedict Your Journey so Far is: <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days`
}

function getDaysInMonth(year, month)
{
    return new Date(year, month, 0).getDate();
}
