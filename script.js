//your JS code here. If required.
let h1 = document.querySelector("h1");

window.addEventListener("resize",()=>{
	let h = window.innerHeight;
	let w = window.innerWidth;
	h1.innerText = `Width: ${w} and Height: ${h}`
})