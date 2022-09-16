const sumAll = function(n, f) {
    let sum=0;
    if(n<f){
        if(n<0 || f<0 || typeof n != "number" || typeof f != "number"){
            return "ERROR";
        }else{
            for(let i=n; i<=f; i++){
                sum+=i;
            }
            return sum;
        } 
    } else {
        if(n<0 || f<0 || typeof n != "number" || typeof f != "number"){
            return "ERROR";
        }else{
            for(let i=f; i<=n; i++){
                sum+=i;
            }
            return sum;
        } 
    }

};

// Do not edit below this line
module.exports = sumAll;
