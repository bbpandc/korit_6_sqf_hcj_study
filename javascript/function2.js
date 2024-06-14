const USERNAME = "admin";
const PASSWORD = "1234";

function login(username, password) {
    if(USERNAME === username && PASSWORD === password) {
        console.log("로그인 성공");
        return;
    }
    console.log("로그인 실패");
}

const login2 = login; // 변수에 함수 대입 가능(함수의 주소가 대입됨)

login2("admin", "1234"); // 로그인 성공

const add2 = function add(x, y) { // 함수 자체를 변수에 넣을 수 있음
    return x + y;
}

console.log(add2(10, 20)); // 30

// 익명 함수
const sub2 = function (x, y) {
    return x - y;
}

console.log(sub2(20, 10)); // 10

// 화살표 함수(람다)
let div = (x, y) => {
    return !x || !y ? 0 : x / y; // x or y 가 0이면 0리턴
}

console.log(div(10, 2)); // 5

// 화살표 함수(명령이 한줄)
div = (x, y) => !x || !y ? 0 : x / y;

console.log(div(10, 2)); // 5

// 화살표 함수(매개변수가 하나면 괄호생략 가능)
const print = data => console.log(data);

print("출력!"); // 출력!

function main() {
    const test = () => { // 함수 안에 함수를 정의 할 수 있음(화살표 함수 사용)
        console.log("테스트 함수 호출");
    }

    test();
}

main(); // 테스트 함수 호출
// test(); // main 함수 안에서만 사용가능