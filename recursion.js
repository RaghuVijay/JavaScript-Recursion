function addNumbers(limit){
    if(limit){
        result = result + limit
        addNumbers(limit - 1);
    }
    return result;
}

let result = 0;
console.log(addNumbers(20));