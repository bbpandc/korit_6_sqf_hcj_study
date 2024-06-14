function add(x, y) {
    return x + y;
}

const result = add(10, 20); // z 값을 안줘서 undefined
console.log(result); // 리턴값이 없어서 result는 undefined

function add(x, y, z) { // 함수의 호이스팅(js는 오버로딩이 없음)
    console.log(x);
    console.log(y);
    console.log(z);
}

add(10, 20, 30);