type Age = number;
type Player = {
  readonly name: string; //readonly 속성을 지정할 수 있음
  age?: Age; //옵셔널타입 ? 으로 선택적으로 값을 줄수 있음
};

//자주 사용하는 타입을 빼서 Alias로 선언해줄수 있음
const jason: Player = {
  name: "jason",
};

const serena: Player = {
  name: "serena",
  age: 20,
};

//argument 타입 설정
//return 값의 타입 = Player
function playerMaker(name: string): Player {
  return {
    name: name,
  };
}

const playerSet = (name: string): Player => ({ name });

const jake = playerMaker("jake");
jake.age = 12;
