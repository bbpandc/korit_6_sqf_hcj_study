function modifyUser(user, target, value) {
    const newUser = {
        ...user, // 스프레드. user 객체의 키,밸류 값들이 그대로 복사됨
        // 객체의 값을 덮어씀
        [target]: value // = ["username"]: value. target: value 라고 하면 target이라는 키가 새로 생기게됨
    };
    return newUser;
}

function main() {
    const user = {
        username: "admin",
        password: "1234"
    }

    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111");
    console.log(newUser2);

    const userList = [ user, newUser ];
    const newUserList = [ ...userList, newUser2 ]; // userList 안에 있는 요소들을 복사. 기존의 userList와 주소가 다른 새로운 배열.
    console.log(newUserList);

    // 스프레드 -> 깊은 복사 (안의 요소(값)들만 복사)

    const userList2 = userList; // 얕은 복사 // userList와 userList2의 주소가 같음.
}

main();