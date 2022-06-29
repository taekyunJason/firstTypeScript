// Polymorphism (다형성)

// 다형성이란, 여러 타입을 받아들임으로써 여러 형태를 가지는 것을 의미합니다.
// ```
// type SuperPrint={
// (arr:T[]):T;
// }

// const superPrint:SuperPrint=(arr)=>{
// return arr[0]
// }

// const a=superPrint([1,2,3])
// const b=superPrint([true,false,true])
// const c=superPrint(["a","b"])
// const d=superPrint([1,2,"a","b",true])
// ```

// Generics
// https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content

// type SuperPrint = {
//   <T, G>(arr: T[], b: G): T;
//   //  ^^이렇게 작성하고 타입에 선언한 형태를 적어줌 -> 제네릭 사용방법!
// };

// const superPrint: SuperPrint = (arr) => arr[0];

function superPrint<V, G>(a: V[], b: G) {
  return a[0];
}

//위에서 설정한 call signature 에 해당하는 형태만 허용됨
//직접 타입을 설정할 수도 있지만, 추론하도록 하는 것이 좋음
const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true], 1);
const c = superPrint(["a", "b", "c"], true);
const d = superPrint(["abc", true, 1], [1]);

// if (typeof d === "string") {
//   d.toUpperCase();
// }

//generic을 사용하는 이유 - call signature를 작성할때, 들어올 확실한 타입을 모를 때 사용
//타입의 placeholder같은 개념 => 실제로 들어오는 입력값에 따라 타입이 정해짐!

//any를 사용하지 않는 이유
//-> 입력받는 데이터 형태를 any로 받는데, 해당 데이터가 여러가지 형태일때 위의 경우에는 배열의 첫번째 원소를 리턴하는데
// d의 경우에는 number로 인식함 => 이후에 d.toUpperCase()를 사용하면 에러가 발생함.

//any와 가장 큰 차이는 타스의 타입 체커로부터 보호를 못받는다는 것이다

// Generics
// 제네릭은 C#이나 Java와 같은 언어에서 재사용 가능한 컴포넌트를 만들기 위해 사용하는 기법입니다. 단일 타입이 아닌 다양한 타입에서 작동할 수 있는 컴포넌트를 생성할 수 있습니다.
// (구체적인 타입을 지정하지 않고 다양한 인수와 리턴 값에 대한 타입을 처리할 수 있다.)
// 타입스크립트에서 제네릭을 통해 인터페이스, 함수 등의 재사용성을 높일 수 있습니다.
// ```
// function identity< Type >(arg: Type): Type {
// return arg;
// }

// // 제네릭 화살표 함수 (tsx기준)
// const identity=< Type extends {} >(arg: Type):Type => {
// return arg;
// }

// let output = identity< string >("myString"); // 첫 번째 방법
// let output = identity("myString"); // 두 번째 방법
// // 두 번째 방법은 type argument inference(타입 인수 유추)를 사용합니다. 즉, 컴파일러가 전달하는 인수 유형에 따라 자동으로 Type 값을 설정하기를 원합니다.
// ```
// https://www.typescriptlang.org/docs/handbook/2/generics.html

//아래처럼 커스텀 및 확장 가능
type Player<E> = {
  name: string;
  extraInfo: E;
};

type JasonExtra = {
  favFood: string;
};

type JasonData = Player<JasonExtra>;

const jason: JasonData = {
  name: "jason",
  extraInfo: {
    favFood: "pizza",
  },
};

const serena: Player<null> = {
  name: "serena",
  extraInfo: null,
};

type A = Array<number>;
let arr: A = [1, 2, 3, 4];
