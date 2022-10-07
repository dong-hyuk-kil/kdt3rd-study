console.log('!');

// JS 표준 내장 객체
// 기본적으로 (이미) 가지고 있는 객체
// String, Number, Array, Date, Math, ....

//=================================
//Date 객체
//시간, 날짜에 대한 정보를 얻기 위함

let now = new Date();
console.log(now);

//ms
//
console.log(new Date(0)); //1970-01-01 09:00:00 를 기준
console.log(new Date(80000)); //Thu Han 01 1970 09:01:20

// new Date(y, m, d, m, s, ms)
// year : 4자리
// month: 0(1월) ~ 11(12월) -> 주의!!
// date: 1~31 -> 생략하면, 1으로 처리
// hour, minutes, second, ms
console.log(new Date(2018, 2, 2));
console.log(new Date(2018, 2, 2, 18, 20, 30));
console.log(new Date(2022, 8, 30, 10, 53))

// Date 객체 메서드
// 메서드를 이용해서 년, 월, 일 등의 값을 얻기

console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()); // 0(1월)~11(12월)
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getUTCMilliseconds());
console.log(now.getDay()); // 요일 : 0(일) ~ 6(토)

// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고,
// switch-case문과 if문으로 오늘이 평일/주말 구별해보자
// if 문

console.log(now.getDay());
switch(now.getDay()) {
    case 0:
    case 6:
        console.log('주말');
        break;
    default:
        console.log('주중');
        break;


}

if (now.getDay()=== 0 || now.getDay() === 6 ) {
    console.log('주말')
} else {
    console.log('평일')
}
// console.log(now.getDay());

// Math 객체
// 수학적인 상수와 함수를 위한 속성과 메서드

// 속성
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT2);
// 메서드
console.log(Math.min(100, 200, 30, 7));
console.log(Math.max(100, 200, 30, 7));
console.log(Math.round(6.5)); // 반올림
console.log(Math.round(6.3)); // 반올림
console.log(Math.floor(6.3)); // 내림
console.log(Math.ceil(6.3)); // 올림

console.log(Math.floor(Math.max(1.1, 2.2, 3.3, 7.7)));
console.log(Math.floor(7.7));
console.log(7);
console.log(Math.random()); // 0 <= x < 1 범위의 난수

// 0 <= 10x < 10
console.log(Math.floor(Math.random()*10+1));

// 퀴즈) Returns a random integer from 1 to 10:
console.log(Math.floor(Math.random()*100)+1);
console.log(Math.floor(Math.random()*3)+20);








