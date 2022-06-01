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

//tuple
//정해진 갯수와 순서에 맞는 타입을 가져야 하는 배열을 지정할 수 있음
const player: readonly [string, number, boolean] = ["jason", 1, true];

//player[0] = 1; //typescript가 첫번째 인덱스는 항상 string이어야한다는 것을 알기 때문에 에러 발생

//any 타입 => 타입스크립트의 모든 보호장치를 비활성화 시킴!
//되도록이면 사용하지 않는 것이 좋음!!!
const a: any[] = [1, 2, 3, 4];
const b: any = true;
a + b;

//변수가 어떤 타입인지 모를때 사용하는 타입!
let abc: unknown;

//a가 number 타입일때만 아래의 코드를 실행하게하면 에러가 발생하지 않음
if (typeof abc === "number") {
  //해당 코드만 단독으로 사용하면 에러발생 => a가 unknown 타입으로 설정되어있기 때문!
  let b = abc + 1;
}
if (typeof abc === "string") {
  let c = abc.toUpperCase();
}
