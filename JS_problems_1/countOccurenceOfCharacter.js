function countOccurenceOfCharacter(str, ch){
    let count = 0;

    for(let char of str){
        if(char === ch){
            count++;
        }
    }
    return count;
}

console.log(countOccurenceOfCharacter("MissIssippi", "i"))