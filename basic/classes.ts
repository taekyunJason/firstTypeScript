// Classes
// 추상(abstract) 클래스
// 추상 클래스는 오직 다른 클래스가 상속받을 수 있는 클래스이다.
// 하지만 직접 새로운 인스턴스를 만들 수는 없다.
// ```
// abstract class User{
// constructor(
// private firstname:string,
// private lastname:string,
// public nickname:string
// ){
// abstract getNickname():void
// }
// }

// class Player extends User{
// // 추상 메서드는 추상 클래스를 상속받는 클래스들이 반드시 구현(implement)해야하는 메서드이다.
// getNickname(){
// console.log(this.nickname)
// }
// }
// ```
// public: 모든 클래스에서 접근 가능
// private: 해당 클래스 내에서만 접근 가능 (자식 클래스에서도 접근 불가)
// protected: 해당 클래스와 자식 클래스에서 접근 가능

// https://www.typescriptlang.org/docs/handbook/2/classes.html

//추상클래스 = 다른 클래스가 상속받을 수 있는 클래스
//하지만 직접 새로운 인스턴스 생성 불가능
abstract class User {
  constructor(
    //private 접근자는 인스턴스 밖에서 접근할 수 없고, 다른 자식 클래스에서도 접근 불가능
    private firstName: string,
    //protected 접근자는 클래스 밖에서는 접근 불가능하지만, 다른 자식 클래스에서는 접근 가능
    protected lastName: string,
    public nickName: string
  ) {}
  //추상 메서드 = 추상클래스를 상속받는 모든 것들이 반드시 구현해야 하는 메서드
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

//추상클래스 User를 상속받으려면, 포함된 추상 메서드 getNickName를 구현해야함!
class Player extends User {
  getNickName() {
    //추상 메서드를 구현했을때, 추상메서드에서 작성한 프로퍼티가 private라면, 추상클래스를 상속했더라도 해당 프로퍼티에 접근할 수 없음
    console.log(this.nickName);
    console.log(this.lastName);
  }
}

const jason = new Player("jason", "kim", "tae");

//private modifier로 작성된 변수에 접근하면 에러 발생
// jason.firstName;

//추상클래스 안에서 만든 추상 메서드도 접근가능(private/ protected/ public)
jason.getFullName();

// 📌접근 가능한 위치
// 구분　　　    선언한 클래스 내　  상속받은 클래스 내   　  인스턴스
// private 　 　 　　⭕　　　　     　　　❌　　       　　　❌
// protected 　　 　⭕　　　　　　     　⭕　　　　       　❌
// public　　　  　　⭕　　　　　　　     ⭕　　　　       　⭕
