console.log(a); // 순서: 2

var a; // 순서: 1 호이스팅: 컴파일 될 때 선언, 정의가 먼저 된다. 대입은 x

a = 10; // 순서: 3

var b = 10;
console.log(b);

var b = 20; // var: 호이스팅, 재선언, (자료형이 달라도)재할당이 가능
console.log(b);

let c = 30; 
console.log(c);
c = "40"; // let: 호이스팅 x, 재할당만 가능

const d = 50; // const: 상수
console.log(d);
// d = 60; // const: 호이스팅, 재션언, 재할당 x
// console.log(d);