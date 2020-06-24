module.exports = {
    sum: function (num1, num2) {
        return num1 + num2;
    },
    smaller: function(num1, num2) {
        //return the lower value (smaller)
        if(num1 < num2) {
            return num1;//do not need curly braces if you have one instruction
        }
        else{
            return num2;
        }
    },

    greater: function(num1,num2, num3) {
        if(num1> num2 && num1> num3) return num1;
        if(num2> num1 && num2>num3) return num2;
        return num3;
    },

    multiply: function(num1, num2) {
        return num1 * num2;
    },

    divide: function(num1, num2) {
        if(num2 ==0) {
            console.log("ERROR.......");
            return 0;
        }

        return num1 /num2; 
    },

    evenNum: function(num) {
        var res = num % 2; //divide by 2 , get the residue(not the result)
        //if (res ==0) return true;
       //return false; or.......
       return res == 0;



        //or....return (num %2)==0; the cpu reads inside/out
    },

    oddNum: function(num) {
        var res = num % 2;
        return res == 1;
    }

};
