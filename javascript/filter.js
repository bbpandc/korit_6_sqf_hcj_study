let names = ["김준일", "김준이", "김준삼"];

console.log(names);

// map                // 두번째 매개변수는 무조건 index
names = names.map((name, index) => {return name + "님"}); // ["김준일님", "김준이님", "김준삼님"]
console.log(names);

// filter                           // 람다. {}, return 생략
names = names.filter((name, index) => index !== 1); // 조건이 참인 것만 들어감('김준이님'만 뺴고 들어감)
console.log(names)
