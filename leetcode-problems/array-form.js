function arrayForm(num, k) {
    let carry = k;
    let i = num.length - 1;
    let result = [];
    while(i >=0 || carry > 0){
        if(i >=0 ){
            carry += num[i];
            i--;
        }
        result.push(carry % 10);
        carry = Math.floor(carry / 10);
    }
    return result.reverse();
}

console.log(arrayForm([1, 2, 0, 0], 34)); //working[1, 2, 3, 4]
console.log(arrayForm([2, 7, 4], 181)); // working[ 3, 5, 5]
console.log(arrayForm([2, 1, 5], 806)); //working
console.log(arrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3], 516)); //Expected //[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,5,7,9]