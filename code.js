function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function newGame(){
	shuffle(dictionary)
	nextMove()
}

var position = 0
var isTranslated=false

function nextMove(){
	let text = dictionary[position] + ''
	let translations = text.split(" - ")
	if(translations.length == 2){	
		document.getElementById("est").textContent=translations[0].trim();
		document.getElementById('rus').textContent=translations[1].trim();
	}
	if(translations.length == 3){
		document.getElementById("est").textContent=translations[1].trim();
		document.getElementById('rus').textContent=translations[2].trim();
	}
    if(isTranslated){
		document.getElementById('est').style.color='black'
        isTranslated=false;
        if(position==dictionary.length-1){
            position=0
        }
        else {
            position++
        }
	    
    }
    else{
		document.getElementById('est').style.color='transparent'
        isTranslated=true;
    }
	
}