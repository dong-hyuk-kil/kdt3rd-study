console.log('connected')


/*function helloWorld() { // 정의 
	console.log('helloworld!!');
}
helloWorld(); // 호출
*/

function helloWorld() {
    console.log ('helloworld!!');
}

helloWorld();

// 함수 표현식
/*const helloWorld2 = function () { // 정의 
	console.log('helloworld!!22');
}
helloWorld2(); // 호출
*/

const helloWorld2 = function () {
    console.log('hellowrold!!22')
}
helloWorld2();

function helloWorld3() {
    return "helloworld!!3"
}

console.log(helloWorld3());

const helloWorld4 = function () {
    return "helloworld!!4"
}
console.log(helloWorld4())


function countnum() {
 let count =7;
 console.log('count 값:', count);

}

countnum();

let color='red';
console.log(color);
function printColor() {
let color = 'green';
console.log(color);
}
printColor();
console.log(color);

let animal = 'dog';
function who() {
    let animal = 'cat';
    console.log(animal);
}

who()
console.log(animal);

//======================================
//문자열 속성과 메서드(함수)
//:자바스크립트에서 기본제공하는
// 문자열(string)에서 사용 가능한 편리한 기능

console.log('--------')
//속성
// length: 문자열 길이

var song = "Strawberry Moon     ";
var song2 = "Strawberry Moon!!";
console.log(song.length)
console.log(song2.length)

//xx.method() 형태
//-toUpperCase() 대문자로 변경
//-toLowerCase(): 소문자로 변경
//-trim()


var msg = 'Happy Birthday~' ;
var userID = '    user123';


console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(userID.length);
console.log(userID.trim());
console.log(userID.trim().length);

var msg2 = ' hello world! !!       ';
console.log(msg2.trim().toUpperCase());
console.log(msg2.toUpperCase());

console.log(song);
console.log(song[0]);
console.log(song[1]);
console.log(typeof(song[2]));
console.log(song[1]+song[7]);
console.log(song[0].toLowerCase());
var song2 = 'strawberry moon';
console.log(song[0].toUpperCase()+song[13]+song[14]+song[14]+song[9]);

var fruit = 'applemango';
var msg = 'Wow~ It is so amazing~~~~!!';

console.log(fruit.indexOf('a'));
console.log(fruit.slice(-1));
console.log(msg.replace('Wow', 'Hey'));
console.log(msg.replaceAll('a','A'));

let date ='2022.9.26';
console.log(date);
console.log(date.replaceAll('.','-'));
console.log(date.replaceAll('.','-').replace('2022','22'));
console.log(date.replaceAll('.','-').slice(2));









