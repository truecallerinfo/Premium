import { db } from "./firebase.js";
import { ref, get, set, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 🔍 SEARCH NUMBER
window.searchNumber = async () => {

const number = document.getElementById("number").value;
const result = document.getElementById("result");

const snap = await get(ref(db, "numbers/" + number));

if(snap.exists()){
const data = snap.val();

result.innerHTML = `
<h3>${number}</h3>
<p>Type: ${data.type}</p>
<p>Reports: ${data.reports}</p>
<p>Risk: ${data.risk}</p>
`;

}else{
result.innerHTML = "No Data Found";
}
};

// ⚠ REPORT NUMBER
window.reportNumber = async () => {

const number = document.getElementById("rnumber").value;
const type = document.getElementById("rtype").value;
const comment = document.getElementById("rcomment").value;

const refData = ref(db,"numbers/"+number);
const snap = await get(refData);

if(snap.exists()){

const old = snap.val();

await update(refData,{
reports: (old.reports||0)+1,
type:type,
comment:comment,
risk:"medium"
});

}else{

await set(refData,{ 
reports:1,
type:type,
comment:comment,
risk:"low"
});

}

alert("Report Submitted");
};
