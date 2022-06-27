// 1. 공통적으로 사용되는 타입/코드를 모아서 alias로 만들 수 있음
type Player = {
  name: string;
  age?: number;
  // 2. ?를  통해서 지정한 타입 || undefined 가 가능한 옵셔널 타입으로 설정가능
  // 3. readonly 속성을 통해 특정 프로퍼티를 읽기전용으로 설정가능 -> push등으로 변경 불가능/ 조회는 가능!
};

//위에서 선언했던 alias를 가져와서 쉽게 생성 가능
const player: Player = {
  name: "jason",
};

// 4. 옵셔널 타입은 undefined가 나올수 있기 때문에, 해당 값이 있는 경우에만 조건설정 하도록 해야 함!
if (player.age && player.age < 10) {
}

// 5. 함수뒤에 리턴 타입을 지정해줌으로써, 리턴 타입이 가지고 있는 프로퍼티에 접근가능
function playerMaker(name: string): Player {
  return {
    name,
  };
}
//화살표함수에서도 리턴타입을 지정해줌으로써, 리턴 타입이 가지고 있는 프로퍼티에 접근가능
const playerMaker1 = (name: string): Player => ({ name });

const serena = playerMaker("serena");
serena.age = 15;

// 6. Tuple - 포함된 요소의 수와 특정 위치에 포함된 유형을 정확히 알고 있어야 하는 유형
//항상 정해진 갯수의 요소를 가져야하는 배열 지정 + 순서에 맞는 타입을 가져야 함
const player1: [string, number, boolean] = ["jason", 20, true];

//player1[0] = 1;
//       ^^ string 타입 데이터를 number 타입 데이터로 바꾸려면 에러발생
// readonly 속성이 있으면 조회만 가능

// 7. unknown 타입 : 특정 데이터의 타입을 모를때 사용가능
let a: unknown;
//사용할때는 해당 변수의 타입을 확인한 이후에 사용가능!
if (typeof a === "number") {
  let b = a + 1;
}
if (typeof a === "string") {
  let b = a.toUpperCase();
}

// 8. void : 리턴값이 없는 타입
// 9. never : 리턴하지 않는 타입/ 에러 발생은 가능!

function hello(name: string | number) {
  if (typeof name === "string") {
    //name = string type
    name;
  } else if (typeof name === "number") {
    //name = number type
    name;
  } else {
    //name = never type
    name;
  }
}

//void
// void는 값을 반환하지 않는 함수의 반환 값을 나타냅니다. 함수에 return 문이 없거나 해당 return 문에서 명시적 값을 반환하지 않을 때 항상 유추되는 타입입니다.
// ```
// // The inferred return type is void
// function noop() {
// return;
// }
// ```
// unknown
// unknown타입은 모든 값을 나타냅니다. 이것은 any타입과 비슷하지만 any보다 unknown이 더 안전합니다. 이유는 unknown값으로 작업을 수행하는 것은 합법적이지 않기 때문입니다.
// ```
// function hello(a: any) {
// a.b(); // OK
// }

// function hello2(a: unknown) {
// a.b(); // 에러: Object is of type 'unknown'.
// }
// ```
// never
// 일부 함수는 값을 반환하지 않습니다.
// 이는 함수가 예외를 throw하거나 프로그램 실행을 종료함을 의미합니다.
// ```
// function fail(msg: string): never {
// throw new Error(msg);
// }
