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
