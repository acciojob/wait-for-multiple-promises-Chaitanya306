//your JS code here. If required.

const output=document.getElementById('output')
let p1=new Promise((res,rej)=>{ setTimeout(()=>res(Math.ceil(Math.random()*3)),1000) })
let p2=new Promise((res,rej)=>{ setTimeout(()=>res(Math.ceil(Math.random()*3)),1000) })
let p3=new Promise((res,rej)=>{ setTimeout(()=>res(Math.ceil(Math.random()*3)),1000) })
output.innerHTML+=`<tr id='loading'><td>Loading...</td></tr>`
Promise.all([p1,p2,p3]).then((x) => {
	output.innerHTML=''
	output.innerHTML+=`<tr><td>Promise 1</td><td>${x[0]}</td></tr>`
	output.innerHTML+=`<tr><td>Promise 2</td><td>${x[1]}</td></tr>`
	output.innerHTML+=`<tr><td>Promise 3</td><td>${x[2]}</td></tr>`
});