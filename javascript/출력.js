var num = 10;
var sNum = "10";
console.log(num === sNum); // false
var num2; // undefined 는 false
console.log(!!num2) // false
/*
    !(not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리데이터로 변환하는 법
    var num = 10;
    !!num -> true
    num = 0;
    !!num -> false

    var str = "test";
    !!str -> true
    str = "";
    !!str -> false

    var array = [ 1, 2, 3 ];
    !!array -> true
    array = [];
    !!array -> true // 배열은 비어있어도 true
    !!array.length -> false // 길이로 확인
    array.length === 0 -> flase

*/
var num = 0;
console.log(!!num); // false
var str = " "; // 공백도 false
console.log(!!str); // false
var array = [];
console.log(!!array.length); // false
var a;
console.log(!!a); // false
var b = null;
console.log(!!b); // false
var c = 0 / 0; // NaN: 계산할 수 x
console.log(!!c); // false

if(!num) { // !num = num === 0. if를 기준으로 num2는 지역변수
    var num2 = 20;
    console.log("num은 0입니다.");
    if(!!num2) { // if를 기준으로 num2는 전역변수
        console.log("num2는 값이 있습니다.");
    }
}

if(!str) {
    console.log("빈 문자열입니다.")
}

if(!b) {
    console.log("Null입니다.")
}

