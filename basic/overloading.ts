// Function Overloads

// 동일한 이름에 매개 변수와 매개 변수 타입 또는 리턴 타입이 다른 여러 버전의 함수를 만드는 것을 말합니다.
//TypeScript에서는 오버로드 signatures을 작성하여 "다양한 방식으로 호출할 수 있는 함수"를 지정할 수 있습니다.
// ```
// type Add={
// (a:number,b:number):number;
// (a:number,b:number,c:number):number;
// }

// const add:Add=(a,b,c?:number)=>{
// return a+b;
// }
// add(1,2)
// add(1,2,3)
// ```
// https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads

type Add = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add: Add = (a: number, b: number, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add(1, 2);
add(1, 2, 3);
