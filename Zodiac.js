let btn = document.getElementById("btn");

btn.addEventListener("click", function () {

    let month = document.getElementById("month").value;
    let date = Number(document.getElementById("date").value);

    let zodiac = "";

    if ((month === "March" && date >= 21) || (month === "April" && date <= 19)) {
        zodiac = "Aries ♈";
    }
    else if ((month === "April" && date >= 20) || (month === "May" && date <= 20)) {
        zodiac = "Taurus ♉";
    }
    else if ((month === "May" && date >= 21) || (month === "June" && date <= 20)) {
        zodiac = "Gemini ♊";
    }
    else if ((month === "June" && date >= 21) || (month === "July" && date <= 22)) {
        zodiac = "Cancer ♋";
    }
    else if ((month === "July" && date >= 23) || (month === "August" && date <= 22)) {
        zodiac = "Leo ♌";
    }
    else if ((month === "August" && date >= 23) || (month === "September" && date <= 22)) {
        zodiac = "Virgo ♍";
    }
    else if ((month === "September" && date >= 23) || (month === "October" && date <= 22)) {
        zodiac = "Libra ♎";
    }
    else if ((month === "October" && date >= 23) || (month === "November" && date <= 21)) {
        zodiac = "Scorpio ♏";
    }
    else if ((month === "November" && date >= 22) || (month === "December" && date <= 21)) {
        zodiac = "Sagittarius ♐";
    }
    else if ((month === "December" && date >= 22) || (month === "January" && date <= 19)) {
        zodiac = "Capricorn ♑";
    }
    else if ((month === "January" && date >= 20) || (month === "February" && date <= 18)) {
        zodiac = "Aquarius ♒";
    }
    else if ((month === "February" && date >= 19) || (month === "March" && date <= 20)) {
        zodiac = "Pisces ♓";
    }

    document.getElementById("result").innerHTML =
        "Your Zodiac Sign is: " + zodiac;
});