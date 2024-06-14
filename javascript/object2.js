function createUser(username, password, name, email) {
    return {
        // key와 value의 이름이 같을 때 key에 ""를 붙이는 방법.
        "username": username,
        "password": password,
        "name": name,
        "email": email
    }
}

function createUser2(username, password, name, email) {
    return {
        // key와 value의 이름이 같을 때 key에 "",[]를 붙이는 방법.
        ["username"]: username,
        ["password"]: password,
        ["name"]: name,
        ["email"]: email
    }
}

function createUser3(username, password, name, email) {
    return {
        // key와 value의 이름이 같을 때 하나만 쓰는 방법
        username,
        password,
        name,
        email
    }
}

function main() {
    const username = "admin";
    const password = "1234";
    const name = "김해민";
    const email = "aaa@gmail.com";

    let user = createUser(username, password, name, email);
    let user2 = createUser(username, password, name, email);
    let user3 = createUser(username, password, name, email);

    console.log(user);
    console.log(user2);
    console.log(user3);
}

main();