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

type SuperPrint = {
  <T>(arr: T[]): T;
  //  ^^이렇게 작성하고 타입에 선언한 형태를 적어줌 -> 제네릭 사용방법!
};

const superPrint: SuperPrint = (arr) => arr[0];

//위에서 설정한 call signature 에 해당하는 형태만 허용됨
superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c"]);
superPrint(["abc", true, 1]);

//generic을 사용하는 이유 - call signature를 작성할때, 들어올 확실한 타입을 모를 때 사용
//타입의 placeholder같은 개념 => 실제로 들어오는 입력값에 따라 타입이 정해짐!
