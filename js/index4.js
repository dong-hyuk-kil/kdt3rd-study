console.log('!')

// document 요소 다루기 (읽고 쓰기)

// 1. html 요소 내용(content)을 읽고 쓰기
let div1 = document.getElementById('div1');
console.log('div1');

//innerHTML 속성
// : 요소 안의 "코드"를 가져오거나 수정
console.log(div1.innerHTML);
div1.innerHTML = '여기는 <b>첫번째 /<b> 태그입니다. &hearts;'

// innnerText 속성
// 요소 안의 "텍스트를" 가져오거나 수정
// => 입력된 문자열을 그대로!!
// 읽기: 요소.innerText
// 쓰기: 요소.innerText = 수정하려는 텍스트
console.log(div1.innerText); //읽기
div1.innerText = '여기는 <b>첫번째 /<b> 태그입니다. &hearts;'
div1.innerText = '안녕하세요';


// textcontent 속성
// : innerText와 마찬가지로 텍스트 정보를 표시
// console.log(div1.textContent); //읽기
// div1.textContent = '안녕하세요2222!!!!!';

// let div2 = document.getElementById('div2');
// console.log(div2);

// div2.innerHTML = '여기는 <b>첫번째 /<b> 태그입니다. &hearts;'
// console.log(div2.innerHTML);
// // 2. 속성, 접근
// // 요소. 속성명
// 2
let beach = document.getElementById('beach');
console.log(beach);
console.log(beach.id);
console.log(beach.src);
console.log(beach.width);
console.log(beach.alt);
let google = document.getElementById('google');
console.log( document.getElementById('google'));
// console.log(google.href);


// console.log(google.setAtrribute('href', 'https://www.naver.com'));

// console.log(beach.getAtrribute('src','JAVASCRIPT_OBJECT\drink6.jpg' ))
// beach.setAttribute('src','JAVASCRIPT_OBJECT\drink6.jpg');

// 3. 스타일(css) 제어
// : javascript로 css 설정 가능!

let h1 = document.querySelector('h1');
// console.log(h1);
// console.log(h1.style);
// console.log(h1.style.fontSize);

// h1.style.color = 'limegreen'
// h1.style.backgroundColor = 'skyblue';
// h1.style.border = '4px solid brown';
// h1.style.textShadow = '2px 2px 10px #f005';

let lis = document.querySelectorAll('li');
// console.log(lis);
// // 반복문을 이용해서 여러 요소 스타일을 한번에 설정
// for (let i=0;i < lis.length;i++) {
//     console.log(lis[i]);
//     lis[i].style.color = 'rgb(0,100,200)';
//     lis[i].style.fontSize = '20px';
//     lis[i].style.backgroundColor = '#ddd';

// }

// // for....of 반복문 
// const mylists = ['a', 'b', 'c', 'd'];
// for (let list of mylists) {
//     console.log(list);
   
// }

// for(let li of lis) {
//     console.log(li);
//     li.style.color = 'rgb(0,100,200';
//     li.style.fontSize = '20px';
//     li.style.backgroundColor = '#ddd'
// }

// 3-2 클래스 제어 방식

console.log(h1);
console.log(h1.classList.add('header-color'));
console.log(h1.classList);

for (let i=0; i < lis.length;i++) {
    console.log(lis[i]);
    lis[i].classList.add('list-style')

    
}
console.log(h1.classList);
h1.classList.remove('title');
console.log(h1.classList);
h1.classList.toggle('happy');
h1.classList.toggle('happy');

// contains()
console.log(h1.classList.contains('header-color'))
console.log(h1.classList.contains('lucky'))

/////

const apple = document.querySelector('li')
const fruits = document.querySelector('ul')

console.log(apple.parentElement);
console.log(apple.parentElement.parentElement);

console.log(fruits.children);
console.log(fruits.children[0])
console.log(fruits.children[1])
console.log(fruits.children[2])
console.log(fruits.children[3])

// 3. 형제 노드
const lists = document.querySelectorAll('li');
console.log(lists);
const listOrange = lists[2]
console.log(listOrange.previousElementSibling);
console.log(listOrange.nextElementSibling);

const numbers = document.querySelector('.numbers');
console.log(numbers); // ol 
const numbersTwo = numbers.
console.log(numbersTwo);
console.log(numbersTwo.previousElementSibling);
