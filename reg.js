function generateResult(){

let name=document.getElementById("name").value;
let roll=document.getElementById("roll").value;

let s1=Number(document.getElementById("sub1").value);
let s2=Number(document.getElementById("sub2").value);
let s3=Number(document.getElementById("sub3").value);
let s4=Number(document.getElementById("sub4").value);
let s5=Number(document.getElementById("sub5").value);

let total=s1+s2+s3+s4+s5;
let avg=total/5;
let per=(total/500)*100;

let grade="";
let status="";

if(s1>=40 && s2>=40 && s3>=40 && s4>=40 && s5>=40){

    status="PASS";

    if(per>=90) grade="A+";
    else if(per>=80) grade="A";
    else if(per>=70) grade="B";
    else if(per>=60) grade="C";
    else grade="D";

}else{
    status="FAIL";
    grade="F";
}

document.getElementById("result").innerHTML=`

<h2>Result Card</h2>

<table>
<tr>
<th>Name</th>
<th>Roll No</th>
<th>Total</th>
<th>Average</th>
<th>Percentage</th>
<th>Grade</th>
<th>Status</th>
</tr>

<tr>
<td>${name}</td>
<td>${roll}</td>
<td>${total}</td>
<td>${avg.toFixed(2)}</td>
<td>${per.toFixed(2)}%</td>
<td>${grade}</td>
<td class="${status==='PASS'?'pass':'fail'}">${status}</td>
</tr>
</table>

<h3>Progress</h3>

<div class="progress">
<div class="bar" id="bar">${per.toFixed(1)}%</div>
</div>

`;

setTimeout(()=>{
document.getElementById("bar").style.width=per+"%";
},100);

}