//Question -  Given an array of bird where every element represents a bird type id, determine the ids of the most
// frequently and least frequently sighted type. If more than 1 type has been spotted that maximum
// amount, return the smallest of their ids & If more than 1 type has been spotted that minimum amount,
// return the smallest of their ids

function Birds(arr) {
    let obj = {};
    let max = 0;
    let min = 0;
    let maxId = 0;
    let minId = 0;
    for(let i = 0; i < arr.length; i++){
        if(obj[arr[i]]){
            obj[arr[i]]++;
        }else{
            obj[arr[i]] = 1;
        }
    }
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key];
            maxId = key;
        }
    }
    min = max;
    for(let key in obj){
        if(obj[key] < min){
            min = obj[key];
            minId = key;
        }
    }
    return minId;
}

let birdArray  = [1,1,2,2,4,4,4,4,5];
let birdArray1 = [2,2,2,2,4,4,4,4,5];
let birdArray2 = [1,2,2,4,4,4,4,5];

console.log(Birds(birdArray));

console.log(Birds(birdArray1));

console.log(Birds(birdArray2));