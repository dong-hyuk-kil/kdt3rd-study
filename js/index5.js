console.log('!')

function addNode() {
    
    let div = document.getElementById('div1')
    let p = document.createElement('p')
    p.innerText = '버튼을 눌러 만들어진 p 태그';

    div.appendChild(p);
    p.style.fontWeight = '700';
    p.classList.add('append-p');
    div.append(p, '2번 추가');
    div.append(p)
}

//노드 생성/추가/삭제
// 1. 노드 생성
// createElement()

// 2. 노드 추가
// appendChild() : 노드 객체만 추가, 한 번에 한 개
// append() : 노드 or 텍스트 추가, 한 번에 여러 개 가능

function removeNode() {

    let div = document.querySelector('#div1')
let p =document.querySelector('#div1 > p');

// div.removeChild(p);
 p.remove();


}

let ul = document.querySelector('ul');
let li = document.createElement('li');
li.innerText = '오렌지'; 

ul.append(li)

let container = document.querySelector('.container');
let img = document.createElement('img');
img.setAttribute('src','./puppy.jpg');
let title = document.createElement('div');
title.innerText = '강아지입니다'
// container.appendChild(img)



container.append(img);
// container.append(title);