/* 

class Array {
    constructor(){
        this.length = 0;
        this.ptr = memory.allocate(this.length)
    }
    push(value){
        this._resize(this.length + 1)
        this.set(this.ptr + this.length, value)
        this.length++

    }
    _resize(size) {
        const oldPtr = this.ptr;
        this.ptr = memory.allocate(size);
        if (this.ptr === null) {
            throw new Error('Out of memory');
        }
        memory.copy(this.ptr, oldPtr, this.length);
        memory.free(oldPtr);
        this._capacity = size;
    }
    get(index){
        if(index < 0 || index >= this.length){
            throw new Error('Index error');
        }
        return memory.get(this.ptr + index);
    }
    pop() {
        if (this.length == 0) {
            throw new Error('Index error');
        }
        const value = memory.get(this.ptr + this.length - 1);
        this.length--;
        return value;
    }
    insert(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }

        if (this.length >= this._capacity) {
            this._resize((this.length + 1) * Array.SIZE_RATIO);
        }

        memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
        memory.set(this.ptr + index, value);
        this.length++;
    }
    remove(index) {
        if (index < 0 || index >= this.length) {
            throw new Error('Index error');
        }
        memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
        this.length--;
    }

}
Array.SIZE_RATIO = 3;


function main(){

    Array.SIZE_RATIO = 3;

   
    let arr = new Array();

    
    arr.push(3);

    console.log(arr);
}

main() */

//5. URLify a string

const fillSpace = (string) =>{
    var correctedString = "";
    for(let i=0;string.length>i;i++){
        if (string[i] == " "){
            correctedString += "%20"
        }
        else{
            correctedString += string[i]
        }
    }
    return correctedString
}
//console.log(fillSpace('www.thinkful.com /tauh ida parv een'))


//6. Filtering an array

const filter = (array) =>{
    var filteredArray =[];
    for(let i=0;i<array.length;i++){
        if(array[i] >= 5){
            filteredArray.push(array[i])
        }
    }
    return filteredArray;
}

//console.log(filter([1,2,3,4,5,6,7,8,9,10]))

//7. Max sum in the array

const maxSum = (arr) =>{
    var sum = 0;
    var maxSum = 0;
    
    for(let i=0;i<arr.length;i++){
          maxSum = maxSum + arr[i]
          sum = Math.max( maxSum, sum)
         
          
          
         /*  if((arr[i] + sum) > sum){} */
        
       /*  console.log(sum)
        console.log(currentArr) */
        console.log(sum)
    }
    return sum
}

console.log(maxSum([4, 6, -3, 5, -2, 1]))


//8. Merge arrays

const mergeArrays = (arr1, arr2) =>{
    var mergedArr = []
    mergedArr = [...arr1, ...arr2]


    mergedArr.sort(function(a, b){return a-b})

    return mergedArr ;
}

console.log(mergeArrays([1,2,3,4,5], [2,7,1,9,10]))


//9.Remove characters

const removeCharacters = (string, charsToRemove) =>{
    var equalto = 0;
    var changedString = '';
    for(let i=1; i<=string.length; i++){
        if (equalto == 0){
            changedString += string[i-1]
        }
        equalto = 0;
        for(let j=0; j<charsToRemove.length; j++){
            if(string[i] == charsToRemove[j]){
                equalto++;
            }
        }
        console.log(changedString)
    }
    return changedString

}
//console.log(removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))


//10. Products