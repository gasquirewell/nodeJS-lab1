
console.log("Hello JS");


var name = "Gerry";
var lastName = "Squirewell";
var age = 30;
var found = false;
var average = 12.3211;

if (age < 60){
    console.log("You are still young");
}
else{
    console.log("Sorry, you are getting old");
}

//print numbers from 3 to 12, except 9
for(let i=3;i< 13; i++){
    if(i != 9){
        console.log(i);
    }
}


//arrays
var names = [];
names.push("Terri");
names.push("Nora");
names.push("Gerry");
names.push("Briun");

console.log(names[0]); //first element

for(var j=0; j < names.length;j++) { //list all names
    console.log(names[j]);
}

for(var j=names.length -1; j >= 0; j--) { //list names in reverse order
    console.log(names[j]);
}

//terminal
//node filename | node server.js
//mac: clear
//windows: CLS
//win (alternate): CMDER