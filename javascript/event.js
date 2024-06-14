function handleButtonClick(e) {
    console.log({event: e});
    e.target.innerHTML = "취소";
}

function handleInputChange(e) {
    // console.log(e); // 엔터키 번호 확인용
    if(e.ctrlKey && (e.keyCode === 13 || e.key === "Enter")) {
        alert(e.target.value);
    }
}

function handleInputFocus(e) {
    if(!!e.target.value) {
        e.target.value = "";
    }
}

function handlerInputBlur(e) {
    if(!e.target.value) {
        alert("값을 입력해주세요.")
    }
}