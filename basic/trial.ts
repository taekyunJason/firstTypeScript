//인터페이스에서 제네릭을 받아서
interface SStorage<T> {
  //제네릭을 사용함
  [key: string]: T;
}

//localStorage를 초기화 할때 제네릭을 받을 계획이라고 알려주고,
//제네릭을 클래스에 보내줌
class LocalStorage<T> {
  //같은 제네릭을 인터페이스로 전달
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    //API
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  //string을 보내주면 T(제네릭)를 받음
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringStorage = new LocalStorage<string>();
stringStorage.get("key");
