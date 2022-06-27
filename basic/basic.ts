// type Age = number;
// // type Player = {
// //   readonly name: string; //readonly 속성을 지정할 수 있음
// //   age?: Age; //옵셔널타입 ? 으로 선택적으로 값을 줄수 있음
// // };

// // //자주 사용하는 타입을 빼서 Alias로 선언해줄수 있음
// // const jason: Player = {
// //   name: "jason",
// // };

// // const serena: Player = {
// //   name: "serena",
// //   age: 20,
// // };

// //argument 타입 설정
// //return 값의 타입 = Player
// // function playerMaker(name: string): Player {
// //   return {
// //     name: name,
// //   };
// // }

// // const playerSet = (name: string): Player => ({ name });

// // const jake = playerMaker("jake");
// // jake.age = 12;

// //tuple
// //정해진 갯수와 순서에 맞는 타입을 가져야 하는 배열을 지정할 수 있음
// const player: readonly [string, number, boolean] = ["jason", 1, true];

// //player[0] = 1; //typescript가 첫번째 인덱스는 항상 string이어야한다는 것을 알기 때문에 에러 발생

// //any 타입 => 타입스크립트의 모든 보호장치를 비활성화 시킴!
// //되도록이면 사용하지 않는 것이 좋음!!!
// const a: any[] = [1, 2, 3, 4];
// const b: any = true;
// a + b;

// //변수가 어떤 타입인지 모를때 사용하는 타입!
// let abc: unknown;

// //a가 number 타입일때만 아래의 코드를 실행하게하면 에러가 발생하지 않음
// if (typeof abc === "number") {
//   //해당 코드만 단독으로 사용하면 에러발생 => a가 unknown 타입으로 설정되어있기 때문!
//   let b = abc + 1;
// }
// if (typeof abc === "string") {
//   let c = abc.toUpperCase();
// }

// //아무것도 return 하지 않는 함수
// function hello() {
//   console.log("x");
// }

// //never은 함수가 절대 return 하지 않을때 발생함
// function helloworld(name: string | number) {
//   if (typeof name === "string") {
//     name; //string type
//   } else if (typeof name === "number") {
//     name; //number type
//   } else {
//     name; //never type
//   }
// }

// //Call Signatures
// //함수를 어떻게 호출해야하는지 보여주는 것. 함수의 반환타입도 보여줌. 마우스 올렸을때 보여지는 것!

// type Add = (a: number, b: number) => number;
// //이 경우에 인자의 타입을 지정할 필요가 없음! 위에서 타입을 지정해주었기 때문!
// const add: Add = (a, b) => a + b;

// //OverLoading = 여러개의  call signatures 가 있는 함수
// type Add1 = {
//   (a: number, b: number): number;
//   (a: number, b: string): number;
// };

// const add1: Add = (a, b) => {
//   if (typeof b === "string") return a;
//   return a + b;
// };

// type Add2 = {
//   (a: number, b: number): number;
//   (a: number, b: number, c: number): number;
// };

// const add2: Add2 = (a, b, c?: number) => {
//   if (c) return a + b + c;
//   return a + b;
// };

// add2(1, 2);
// add2(1, 2, 3);

// //Polymorphism

// type SuperPrint = {
//   //제네릭 타입 - 타입들의 placeholder (어떤 형태의 데이터를 받을지 모를때 사용할 수 있음)
//   //call signature 앞에 <> 제네릭 변수명을 넣고 타입에 제네릭 변수명을 선언하면 사용할수 있음!
//   //우리의 요청에 따라 csll signature을 생성한다는 의미!

//   //추가적인 제네릭타입을 설정해서 여러개의 파라미터를 받을 수 있음
//   <GenericType, V>(arr: GenericType[], b: V): GenericType;
// };

// const superPrint: SuperPrint = (arr) => arr[0];

// const e = superPrint([1, 2, 3], "a");
// const f = superPrint([true, false, true], 1);

// // type Player1<E> = {
// //   name: string;
// //   extraInfo: E; //extraInfo에 어떤 값이 올지 모르는 경우(object, boolean등 여러가지 값이 올수 있는 경우)에 타입 이름 옆에 제네릭을 선언해줘서 해당 변수에 사용 가능!
// // };

// // const sam: Player1<{ favFood: string }> = {
// //   name: "sam",
// //   extraInfo: {
// //     favFood: "pizza",
// //   },
// // };

// //추상클래스 - 다른 클래스가 상속받을 수 있는 클래스
// //하지만 해당 클래스에서는 직접 새로운 인스턴스를 만들수 없음!
// //오직 다른 곳에서 상속만 받을수 있는 클래스!
// // abstract class User {
// //   constructor(
// //     //private 일때는 인스턴스 밖에서 접근할 수 없고, 부모클래스를 상속받는 다른 자식 클래스에서도 접근할 수 없음. 오직 선언한 클래스에서만 사용가능
// //     //인스턴스나 메서드에서 접근이 가능하지만, 추상클래스여서 인스턴스화 할 수 없음

// //     //protected 일때는 클래스 밖에서 여기에 접근할 수 없음
// //     protected firstName: string,
// //     protected lastName: string,
// //     protected nickName: string
// //   ) {}
// //추상 메서드는 추상 클래스를 상속받는 모든 것들이 구현해야하는 메서드
// //구현이 되어있지 않은 (코드가 없는) 메서드
// //call signature만 가지고 있는데, 함수의 이름과 argument를 안받을 때도 있지만
// //argument를 받을 경우 argument의 이름과 타입 그리고 함수의 리턴타입을 정의하고 있음
// //   abstract getNickName(): void;
// //   //메서드는 클래스 안에 존재하는 함수
// //   getFullName() {
// //     return `${this.firstName} ${this.lastName}`;
// //   }
// // }

// // //추상클래스를 상속받았기 때문에 그 안에 있는 추상 메서드를 구현해야 에러가 없음!
// // class Player2 extends User {
// //   getNickName() {
// //     //추상클래스를 상속하면 그 안에 있는 protected 프로퍼티는 사용이 가능함!
// //     console.log(this.nickName);
// //   }
// // }

// // const jason1 = new Player2("jason", "kim", "pizzaboy");

// //modifier를 private로 설정하면 외부에서 접근이 불가능함.
// //이는 변수/ 함수 모두 적용 가능함!
// //Property 'firstName' is private and only accessible within class 'Player2'.
// //jason1.firstName;
// //jason1.nickName;

// // jason1.getFullName();

// //Words라는 이름을 가진 새로운 타입 선언 -> 제한된 양의 프로퍼티/키를 가지는 타입을 정의해 주는 방법!
// //string만을 property로 가지는 오브젝트 타입
// //해당 오브젝트는 제한된 양의 프로퍼티만을 가질 수 있고, 해당 프로퍼티의 타입만 알고 사용가능!
// type Words = {
//   [key: string]: string;
// };

// //그럼 이렇게 생성할 수 있음, 위의 타입을 만족하기 때문에 생성 가능!
// // let dict: Words = {
// //   potato: "food",
// // };

// class Dict {
//   private words: Words;
//   constructor() {
//     this.words = {};
//   }
//   //사전에 추가하는 메서드
//   add(word: Word) {
//     if (this.words[word.term] === undefined) {
//       this.words[word.term] = word.deff;
//     }
//   }

//   //검색하는 메서드
//   def(term: string) {
//     return this.words[term];
//   }

//   //업데이트 메서드
//   update(word: Word) {
//     if (this.words[word.term] !== undefined) {
//       this.words[word.term] = word.deff;
//     } else {
//       console.log("no word");
//     }
//   }

//   //삭제하는 메서드
//   del(word: Word) {
//     if (this.words[word.term]) {
//       delete this.words[word.term];
//     } else {
//       console.log("no word");
//     }
//   }
// }

// class Word {
//   constructor(public readonly term: string, public readonly deff: string) {}
// }

// const kimchi = new Word("kimcki", "한국의 전통 음식");

// const dict = new Dict();

// dict.add(kimchi);
// dict.def("kimchi");

// type Nickname = string;
// type Health = 1 | 5 | 10;

// //타입스크립트에서는 오브젝트의 모양을 알려주는 두가지 방법이 있음
// //1. type = {} 안에 오브젝트의 모양을 작성하는 방법 -> 타입이 좀더 사용할 수 있는 목적이 많음!
// //2. interface {} 로 오브젝트의 모양을 작성하는 방법
// //인터페이스는 오브젝트의 모양을 특정하기 위한 하나의 목적만을 가짐!
// //같은 인터페이스에 다른 프로퍼티를 생성하면, 하나의 인터페이스로 합쳐줌!
// interface gamePlayer {
//   nickName: Nickname;
//   healthBar: Health;
// }

// const jacob: gamePlayer = {
//   nickName: "jacob",
//   healthBar: 1,
// };

// type Food = string;
// const pizza: Food = "awesome";

// interface User {
//   name: string;
// }

// //추상화 클래스에서는 새로운 인스턴스를 생성할 수 없음
// abstract class User {
//   constructor(protected firstName: string, protected lastName: string) {}
//   abstract sayHi(name: string): string;
//   abstract fullName(): string;
// }
// //추상 클래스 상속 방법
// class Player extends User {
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }

//   sayHi(name: string) {
//     return `Hello ${name}. My name is ${this.fullName}`;
//   }
// }

// interface User1 {
//   firstName: string;
//   lastName: string;
//   sayHi(name: string): string;
//   fullName(): string;
// }

// // class Player1 implements User1 {
// //   constructor() {
// //     private firstName: string
// //   private lastName: string
// //   }
// // }

// //Type Aliases과 Interfaces의 차이점

// //Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다.

// //결론: 대부분의 경우 개인 취향에 따라 선택 가능
// //(인터페이스 사용을 조금 더 추천)
