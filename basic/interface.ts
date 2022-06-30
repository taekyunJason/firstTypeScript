//특정 값만을 받고 싶을때 이와 같이 설정 가능
type TeamColor = "red" | "blue" | "yellow";

//interface : type 키워드와 같이 객체의 모양을 지정하기 위해 사용함 (하지만 type 키워드가 활용도가 더 높음)
//하지만 인터페이스는 객체의 모양을 지정하는 한가지의 목적만을 가짐
//인터페이스는 프로퍼티를 축적할 수 있음 (type 으로는 불가능!)
interface Player {
  nickname: string;
  healthBar: number;
  team: TeamColor;
}

const jason: Player = {
  nickname: "pizzaboy",
  healthBar: 100,
  team: "red",
};

interface User {
  name: string;
}
interface User {
  health: number;
}
interface User {
  weight: number;
}

interface Player1 extends User {}

const json: Player1 = {
  name: "jason",
  health: 100,
  weight: 80,
};

// implements

// implements을 사용하여 클래스가 특정 인터페이스를 충족하는지 확인할 수 있습니다.
// 클래스를 올바르게 구현하지 못하면 오류가 발생합니다.
// implements 절은 클래스가 인터페이스 유형으로 처리될 수 있는지 확인하는 것입니다. 클래스의 유형이나 메서드는 전혀 변경하지 않습니다.
// 또한 클래스는 여러 인터페이스를 구현할 수도 있습니다. 클래스 C는 A, B를 구현합니다.
// ex) class C implements A, B { }
// ```
// interface Pingable {
// ping(): void;
// }

// // Sonar클래스는 Pingable인터페이스를 implement했기 때문에 Pingable가 가진 ping메서드를 구현해줘야 합니다.
// class Sonar implements Pingable {
// ping() {
// console.log("ping!");
// }
// }
// ```
// https://www.typescriptlang.org/docs/handbook/2/classes.html#implements-clauses

interface User1 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

class Player2 implements User1 {
  constructor(public firstName: string, public lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

//특정 인터페이스를 타입으로 사용 가능
function makeUser(user: User1) {
  return "hi";
}

makeUser({
  firstName: "tae",
  lastName: "kim",
  fullName: () => "fullName",
  sayHi: (name) => "string",
});

// Type Aliases과 Interfaces의 차이점

// Type Aliases과 인터페이스는 매우 유사하며 많은 경우 자유롭게 선택할 수 있습니다. 인터페이스의 거의 모든 기능은 type에서 사용할 수 있으며, 주요 차이점은 type을 다시 열어 새 속성을 추가할 수 없는 것입니다. 반면 인터페이스는 항상 확장 가능합니다.

// 결론: 대부분의 경우 개인 취향에 따라 선택 가능
// (인터페이스 사용을 조금 더 추천)

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
