console.log('connected');


// 변수
// -변할 수 있는 수. 정해진 값이 아닌 수. varaible
// -데이터 보관함
// 어떤 값을 저장하기 위한 메모리 공간을 식별하고자 붙인 이름

// 단계
// 1.변수 선언
// 2. 값 할당

// var 키워드
var a;      
// 선언
console.log(a);  // undefined : 값을 할당하지 않은 경우
a=2;
console.log(a); 
var a=3;
console.log(a);
a=4;
console.log(a);
a=10
console.log(a);


let c; //선언
console.log(c);
c = 4; 
console.log(c);
c=5 ;
console.log(c);


const b=3;
console.log(b)


//####

console.log('------------');

//자료형
//-데이터의 종류 (data type)
// 1. 기본형
// 2. 객체
// -string
// -number
//-boolean
//-null
//-undefiend

var text = '안녕하세요!';
var text2 = "하이!";
var gender = "남자";
var address = '서울';

console.log(text);
console.log(text2);
console.log(gender)
console.log(address)

console.log(text+text2+gender+address)

// console.log(`${text} 저는 홍길동입니다. 저는 ${gender}이고, ${adress}에 거주하고 있습니다.`)


var num=100;
var num2=0.12;
var result = 100-2
console.log(result);

var result ='apple'-3;
console.log(result);


var isWater = true;
var isApple = false;


var y=null;
console.log(y);

var x;
console.log(x);

console.log('----------------------')
console.log(typeof('문자'));
console.log(typeof(245));
console.log(typeof(true));
console.log(typeof(null));

var str1=true;
var str2=123;
var str3=null;

var n1 = true;
var n2 = false;
var n3 = 123;
var n4 = '123';

console.log(typeof Number(n1));
console.log(typeof Number(n2));
console.log(typeof Number(n3));
console.log(typeof Number(n4));
console. log(typeof parseInt(n3))
console. log(typeof parseInt(n4))

console.log(1+2);
console.log(1-2);
console.log(1*2);
console.log(1/2);
console.log(3**2);
console.log(2**10);

