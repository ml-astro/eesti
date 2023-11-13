const wordCount = Object.keys(dictionary).length
var isTranslated=false
const wordArray=[]
let positions = []

for (let index = 0; index < wordCount; index++) {
    positions.push(index);
}

shuffleArray(positions)

function shuffleArray(positions) {
    for (var i = positions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = positions[i];
        positions[i] = positions[j];
        positions[j] = temp;
    }
}

let position = 0

function nextMove(){
    if(!isTranslated){
        document.getElementById("est").textContent=(Object.keys(dictionary)[positions[position]]).toUpperCase();
        document.getElementById('rus').textContent=Object.values(dictionary)[positions[position]].toUpperCase();
        document.getElementById('est').style.color='transparent'
        isTranslated=true;
    }
    else{
        document.getElementById("est").textContent=(Object.keys(dictionary)[positions[position]]).toUpperCase();
        document.getElementById('rus').textContent=Object.values(dictionary)[positions[position]].toUpperCase();
        document.getElementById('est').style.color='white'
        isTranslated=false;
        if(position==positions.length-1){
            position=0
        }
        else {
            position++
        }
    }
}
