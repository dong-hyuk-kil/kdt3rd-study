console.log('!!');

// 반복문
// - for 문
// - while 문

// for 문

/*

for (초기값 ;조건식 ; 증감값 ;) {
 // 반복할 코드
}
   

/ */

//i++
//i=i+1

//i--
//i=i-1

for (let i = 0; i < 5 ; i++) { //i:0 
console.log(i) // 0 1 2 3 4 
}
console.log('반복문 끝')

for (let i = 1; i < 6 ; i++) { //i:0 
    console.log(i) // 0 1 2 3 4
}
console.log('반복문 끝')

for(let g = 3; g <10 ; g++ ) {
    console.log(g)

}
console.log('a')

//case3. 5부터 1까지 출력
for(let i=5;i>0;i--) {
    console.log(i);
}
console.log('반복문 끝')

//case4 1부터 10까지 출력 (단, 짝수만)
//반복 1부터 10까지 + 2로 나눈 나머지가 0일 때만 출력


for(let i=1;i<=10;i++) {
   if(i % 2 === 0) {
    console.log(i);
   }
   
   
}
console.log('반복문 끝');

for(let i = 2;i<=10;i=i+2) {
    console.log((i))
}
console.log('반복문 끝')

// 퀴즈) 1부터 10까지 합 구하기

let sum = 0; // 합을 저장할 변수 생성
for(let i=1 ; i<=5;i++) {
   sum = sum + i

}
console.log(`1~10까지 모두 더한 값: ${sum}`);


sum = 0; // 합을 저장할 변수 생성

for(let i=1 ; i<=10;i++) {
    if (i%2!==0) { //i%2==0
        sum = sum + i
        
    }
   

}
console.log(`1~10까지 모두 더한 값: ${sum}`);


//########################################fo
// while 문 
/*

while (조건식) {
    //반복할 코드

}
=> 조건식 만족; 블럭({}) 내부 코드 실행
=> 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
    -if문; 조건식 true; 블럭 내부 코드 1번 실행
    =while문; 조건식이 true; "계속" 반복
=> 조건식 false; 블럭을 빠져나옴(=반복 종료)
*/

//case1. 1~5 반복
var n = 1 ; // 반복 변수 초기값 설정
while (n <=5 ) {    // 조건식
    console.log(n);
    n = n+1;    //n++;// 증감값
}   
console.log('반복문 끝');

//퀴즈)
//case2. 9부터 4까지 while 문으로 반복

 n =9 ;
while(n>=4 ) {
    console.log(n);
    n = n-1;
}
console.log('반복문 끝');

//case3. 1부터10까지 짝수 출력
//case4. 10부터 1까지 홀수 출력

n=1;
while (n<=10) {
    if(n%2 == 0) {
        console.log(n);
    }
    n=n+1
}
console.log('반복문 끝') 

//ver

n=2;
while(n<=10) {
    console.log(n);
    n=n+2;
}
console.log('반복문 끝');

n=10;
while (n>=1) {
    if (n%2 ===1) {
        console.log(n);

    }
n=n-1;
}
console.log('반복문 끝');

//ver2

n=9;
while (n>=1) {
 console.log(n)
 n=n-2
}

//========
//무한 루프
// : 반복문에서 조건식의 결과가 항상 참이되어 반복문을 탈출하지 못하는 상태
// 의도적으로 무한루프를 만들어서 
//특정 조건이 만족될 때까지 반복하여서 코드를 작성하기도 함


let go = confirm('계속 진행할까요?')
console.log(go);

var count = 0;
while (true) {

    if(confirm("걔속 진행하시겠습니까?") === true) {
        alert(`${count}번째 반복입니다!`);
        count = count +1;

    } else {
        break;
    }
}
console.log('무한루프 탈출 성공!');


