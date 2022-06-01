type Player = {
  name: string;
  age?: number; //옵셔널타입 ? 으로 선택적으로 값을 줄수 있음
};

//자주 사용하는 타입을 빼서 선언해줄수 있음
const jason: Player = {
  name: "jason",
};

const serena: Player = {
  name: "serena",
  age: 20,
};
