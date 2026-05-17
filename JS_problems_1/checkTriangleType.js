

function checkTriangleType(l1, l2, l3){
    if(l1 === l2 && l2 === l3){
        return "Equilateral"
    }else if(l1 === l2 || l2 === l3 || l1 === l3){
        return "Isosceles";
    }else{
        return "Scelene"
    }
}

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(5, 8, 6));