//클래스
//-객체를 생성하는 템플릿
// 클래스:붕어빵 틀
// 객체: 붕어빵

// class Cat {
//   // 생성자
//   constructor(name, age) {
//     //속성
//     this.name = name;
//     this.age = age;
//   }
//   mew() {
//     console.log("야옹");
//   }
//   eat() {
//     console.log("밥먹자");
//   }
// }

// let navi = new Cat("나비", 2);
// console.log(navi.name);
// navi.mew();

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }

  study() {
    return "공부하자!";
  }
}

const minj = new Person("민지", "여");
const minku = new Person("민규", "남");

console.log(minku);
console.log(minku.name);
console.log(minku.gender);
