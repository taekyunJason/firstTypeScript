//call signature : 함수등에서 입력받는 인자의 타입과 리턴타입을 보여줌

type Add = (a: number, b: number) => number;
//         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ => 이것들이 call signature

const add: Add = (a, b) => a + b;
