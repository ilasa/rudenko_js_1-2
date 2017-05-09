var num = prompt('Введите целое число');
var degree = prompt('Степень для целого числа');

console.log('number:', num);
console.log('degree:', degree);

if(isNumber(num) && isNumber(degree)){
    var result = pow(num, degree);
    alert('result = ' + result);
    console.log('result =', result);
} else {
    console.log('Введены неправильные значения!!');
    alert('Введены неправильные значения!!')
}

function pow(num, degree) {
    var temp = num;
    for (var i = 0; i < degree-1; i++){
        temp = temp*num;
    }
    return temp;
}

function isNumber(value) {
    return value % 1 === 0;
}


