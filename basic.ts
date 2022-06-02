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

//아무것도 return 하지 않는 함수
function hello() {
  console.log("x");
}

//never은 함수가 절대 return 하지 않을때 발생함
function helloworld(name: string | number) {
  if (typeof name === "string") {
    name; //string type
  } else if (typeof name === "number") {
    name; //number type
  } else {
    name; //never type
  }
}

//Call Signatures
//함수를 어떻게 호출해야하는지 보여주는 것. 함수의 반환타입도 보여줌. 마우스 올렸을때 보여지는 것!

type Add = (a: number, b: number) => number;
//이 경우에 인자의 타입을 지정할 필요가 없음! 위에서 타입을 지정해주었기 때문!
const add: Add = (a, b) => a + b;

//OverLoading = 여러개의  call signatures 가 있는 함수
type Add1 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add1: Add = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add2: Add2 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add2(1, 2);
add2(1, 2, 3);

//Polymorphism

type SuperPrint = {
  //제네릭 타입 - 타입들의 placeholder (어떤 형태의 데이터를 받을지 모를때 사용할 수 있음)
  //call signature 앞에 <> 제네릭 변수명을 넣고 타입에 제네릭 변수명을 선언하면 사용할수 있음!
  //우리의 요청에 따라 csll signature을 생성한다는 의미!

  //추가적인 제네릭타입을 설정해서 여러개의 파라미터를 받을 수 있음
  <GenericType, V>(arr: GenericType[], b: V): GenericType;
};

const superPrint: SuperPrint = (arr) => arr[0];

const e = superPrint([1, 2, 3], "a");
const f = superPrint([true, false, true], 1);

type Player1<E> = {
  name: string;
  extraInfo: E; //extraInfo에 어떤 값이 올지 모르는 경우(object, boolean등 여러가지 값이 올수 있는 경우)에 타입 이름 옆에 제네릭을 선언해줘서 해당 변수에 사용 가능!
};

const sam: Player1<{ favFood: string }> = {
  name: "sam",
  extraInfo: {
    favFood: "pizza",
  },
};

//추상클래스 - 다른 클래스가 상속받을 수 있는 클래스
//하지만 해당 클래스에서는 직접 새로운 인스턴스를 만들수 없음!
//오직 다른 곳에서 상속만 받을수 있는 클래스!
abstract class User {
  constructor(
    //private 일때는 인스턴스 밖에서 접근할 수 없고, 부모클래스를 상속받는 다른 자식 클래스에서도 접근할 수 없음
    //인스턴스나 메서드에서 접근이 가능하지만, 추상클래스여서 인스턴스화 할 수 없음

    //protected 일때는 클래스 밖에서 여기에 접근할 수 없음
    protected firstName: string,
    protected lastName: string,
    protected nickName: string
  ) {}
  //추상 메서드는 추상 클래스를 상속받는 모든 것들이 구현해야하는 메서드
  abstract getNickName(): void;
  //메서드는 클래스 안에 존재하는 함수
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//추상클래스를 상속받았기 때문에 그 안에 있는 추상 메서드를 구현해야 에러가 없음!
class Player2 extends User {
  getNickName() {
    //추상클래스를 상속하면 그 안에 있는 protected 프로퍼티는 사용이 가능함!
    console.log(this.nickName);
  }
}

const jason1 = new Player2("jason", "kim", "pizzaboy");

//modifier를 private로 설정하면 외부에서 접근이 불가능함.
//이는 변수/ 함수 모두 적용 가능함!
//Property 'firstName' is private and only accessible within class 'Player2'.
//jason1.firstName;
jason1.nickName;

jason1.getFullName();
