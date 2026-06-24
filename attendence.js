document.querySelector("button").onclick = function () {

let rows = document.querySelectorAll("#sheet tbody tr");

for(let i=0;i<rows.length;i++){

let inputs = rows[i].querySelectorAll("input");

let present = 0;
let absent = 0;

for(let j=0;j<inputs.length;j++){

let val = inputs[j].value.toUpperCase();

if(val === "P"){
present++;
}

if(val === "A"){
absent++;
}

}

let total = present + absent;
let percent = total === 0 ? 0 : (present / total) * 100;

rows[i].querySelector(".p").innerText = present;
rows[i].querySelector(".a").innerText = absent;
rows[i].querySelector(".per").innerText = percent.toFixed(2) + "%";

}

};