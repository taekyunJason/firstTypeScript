let str = "hello";
//  ^^^ 자동으로 타입을 string으로 추론해줌

//str = 1
//^^^ string 변수에 number타입의 값이 들어가서 에러 발생

let arr = [1, 2, 3];
//  ^^^ array[num]으로 자동 추론해줌
let array: number[] = [];
//이렇게 명시적으로 타입을 지정해줄 수 도 있음

//arr.push("5");
//위와 같이 number 타입의 배열에 string 타입의 데이터를 넣으려고 하면 에러 발생

const userPlayer = {
  name: "jason",
};
//위와 같은 형태도 가능
