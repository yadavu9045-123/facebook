let month = prompt("Enter Month (January to December)");
let date = Number(prompt("Enter Date"));

let zodiac = "";
if (
    (month === "February" && (date < 1 || date > 28)) ||
    ((month === "April" || month === "June" || month === "September" || month === "November") && (date < 1 || date > 30)) ||
    ((month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") && (date < 1 || date > 31))
) {
    alert("Invalid Date!");
}
else if ((month === "March" && date >= 21 && date <= 31) || (month === "April" && date >= 1 && date <= 19)) {
    zodiac = "Aries ♈";
}
else if ((month === "April" && date >= 20 && date <= 30) || (month === "May" && date >= 1 && date <= 20)) {
    zodiac = "Taurus ♉";
}
else if ((month === "May" && date >= 21 && date <= 31) || (month === "June" && date >= 1 && date <= 20)) {
    zodiac = "Gemini ♊";
}
else if ((month === "June" && date >= 21 && date <= 30) || (month === "July" && date >= 1 && date <= 22)) {
    zodiac = "Cancer ♋";
}
else if ((month === "July" && date >= 23 && date <= 31) || (month === "August" && date >= 1 && date <= 22)) {
    zodiac = "Leo ♌";
}
else if ((month === "August" && date >= 23 && date <= 31) || (month === "September" && date >= 1 && date <= 22)) {
    zodiac = "Virgo ♍";
}
else if ((month === "September" && date >= 23 && date <= 30) || (month === "October" && date >= 1 && date <= 22)) {
    zodiac = "Libra ♎";
}
else if ((month === "October" && date >= 23 && date <= 31) || (month === "November" && date >= 1 && date <= 21)) {
    zodiac = "Scorpio ♏";
}
else if ((month === "November" && date >= 22 && date <= 30) || (month === "December" && date >= 1 && date <= 21)) {
    zodiac = "Sagittarius ♐";
}
else if ((month === "December" && date >= 22 && date <= 31) || (month === "January" && date >= 1 && date <= 19)) {
    zodiac = "Capricorn ♑";
}
else if ((month === "January" && date >= 20 && date <= 31) || (month === "February" && date >= 1 && date <= 18)) {
    zodiac = "Aquarius ♒";
}
else if ((month === "February" && date >= 19 && date <= 28) || (month === "March" && date >= 1 && date <= 20)) {
    zodiac = "Pisces ♓";
}
else {
    zodiac = "Invalid Month!";
}

alert("Your Zodiac Sign is: " + zodiac);
