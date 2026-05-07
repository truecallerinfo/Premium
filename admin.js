import { db } from "./firebase.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const snap = await get(ref(db,"numbers"));

const data = snap.val();

document.getElementById("data").innerHTML =
Object.keys(data).map(n=>`
<div>
<h3>${n}</h3>
<p>${data[n].type}</p>
<p>${data[n].reports}</p>
</div>
`).join("");
