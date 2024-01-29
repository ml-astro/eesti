function showAll(){
	document.getElementById("table").innerHTML="<table>"
	for (const element of dictionary) {
		let text = element + ''
		let translation = text.split(" - ")
		document.getElementById("table").innerHTML+=`<tr><td><a href="https://www.eki.ee/dict/evs/index.cgi?Q=${translation[0]}" target="_blank">${translation[0]}</a></td><td>${translation[1]}</td></tr>`
	}
	document.getElementById("table").innerHTML+="</table>"
	document.getElementById("table").style.textAlign="left"
}