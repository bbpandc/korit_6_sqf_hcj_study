// 비구조 할당, 구조 분해
function main() {
    const user = {
        username: 'admin',
        password: "1234",
        name: "김해민",
        email: "aaa@gmail.com"
    }

    const names = [ "박현주", "이성희", "권오광", "권혁진" ];

    // user 객체에서 3가지 키를 들고옴
    const { username, password, email } = user;
    console.log(username); // admin
    console.log(password); // 1234
    console.log(email); // aaa@gmail.com

    // names 배열의 0번 인덱스부터 들고옴
    const [ a, b ] = names;
    console.log(a); // 박현주
    console.log(b); // 이성희

    // user 객체에서 name을 제외한 나머지 값들을 들고옴
    const { name, ...newUser } = user;
    console.log(newUser); // { username: 'admin', password: '1234', email: 'aaa@gmail.com' }
    console.log(name); // 김해민

    // names 배열에서 1번 인덱스부터 3번 인덱스 전까지 들고옴
    console.log(names.slice(1, 3)); // [ '이성희', '권오광' ]
}

main();