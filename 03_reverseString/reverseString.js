const reverseString = function(str){
    let arr=[];
    arr = str.split("");
    let revArr = [];
    revArr = arr.reverse();
    let revStr = revArr.join("");
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
