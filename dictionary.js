function showAll(){
	document.getElementById("table").innerHTML="<table>"
	for (const element of dictionary) {
		let text = element + ''
		let translation = text.split(" - ")
		document.getElementById("table").innerHTML+=`<tr><td>${translation[0]}</td><td>${translation[1]}</td></tr>`
	}
	document.getElementById("table").innerHTML+="</table>"
	document.getElementById("table").style.textAlign="left"
}