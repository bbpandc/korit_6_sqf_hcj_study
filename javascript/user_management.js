const names = ["김준일", "김준이", "김준삼"];
console.log(names.join());

let userList = [];
let emptyUser = {
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username, password}, index) => { // 반복 돌리기
        return `
            <tr>
                <td>${index + 1}</td>
                <td>${username}</td>
                <td>${password}</td>
            </tr>
        `;
    }).join(""); // 리스트의 쉼표를 없애줌. 기본형은 .join(",")
}

function handleUserInputKeyDown(e) {
    // input에 입력 할 때마다 새로운 객체 생성
    user = {
        ...user,
        [e.target.name]: e.target.value
    }

    console.log(user);

    if(e.keyCode === 13) {
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");

        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user } ];

            renderTable();

            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;

            usernameInput.focus();
        }
    }
    console.log(e.target.name);
}