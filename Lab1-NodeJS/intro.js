//import the module into the file
var mathLib = require('./myMath');

function inint(){
    console.log("Intro");


    var res = mathLib.sum(11,16);
    console.log("Result: " +res);

    var smaller = mathLib.smaller(23, 24);
    console.log("Result:" + smaller);

    var greater = mathLib.greater(10, 45, 23);
    console.log("Result:" + greater);
    
    var mult = mathLib.multiply(4, 4);
    console.log("Result:" + mult);

    var div = mathLib.divide(5,0); //if you divide by 0, show ERROR
    console.log("Result:" + div);
    
    var e = mathLib.evenNum(55);
    console.log("Result:" + e);
    var e = mathLib.evenNum(44);
    console.log("Result:" + e);

    var o = mathLib.oddNum(99);
    console.log("Result:" + o);

}




inint();