console.log('!');
// 이벤트 객체
// event
// 이벤트 발생; 브라우저는 발생한 이벤트에 대한 정보를 담은
// 이벤트 객체(event object)를 이벤틀 리스터에게 전달


const clickMe = document.querySelector('#clickme')
clickMe.addEventListener('click', function (event) {
    console.log(event);
    // event: 이벤트 객체에 대한 정보를 담고 있음
})

const todoForm = document.querySelector('#todo-form');
const ul = document.querySelector('.todos')

todoForm.addEventListener('submit', function(event){
    event.preventDefault();
    // preventDefault: 브라우저에서 구현된 기본 동작 취소
    // 폼 이벤트 : 폼이 제출되면 새로 고침되는 기본동작을 취소
    // form의 submit 이벤트는 제출되는 것이 기본 동작
    // 제출 : 새로고침
    // console.log('Add 버튼 클릭');
    const todoInput = document.querySelector('input[name="todo"]');
    console.log(todoInput);
    console.dir(todoInput); // 객체를 트리구조로 보여주는 명령어
    console.log(todoInput.value);
    let todo = todoInput.value; // 사용자가 input에 입력한 값

    // li 태그를 만들어서, li태그의 content로 input.value 값이 담기도록
    const newTodo = document.createElement('li'); //<li></li>
    newTodo.textContent = todo; //<li>사용자가 입력한 input 값 </li>

    ul.append(newTodo) //<ul> <li>사용자가 입력한 input 값 </li> </ul>
    todoInput.value = ''; // input의 value를 빈 문자열로 설정해 초기화
})

const chginput = document.querySelector('#change_input')
console.log(chginput);
chginput.addEventListener('input', function() {
    // 입력창에 변경이 일어나는 순간을 계속 감지
    
    console.log('change')
    
    const div = document.querySelector('.intro');
    div.textContent = chginput.value;

})

const keyInput = document.querySelector('#key-input');
keyInput.addEventListener('keydown', function(event) {
    //keydown 
    console.log(event);
    console.log(event.code);

    if (event.code === 'ArrowUp') {
        console.log('UP!')
    } else if (event.code === 'ArrowRight') {
        console.log('RIGHT') 
    } else if (event.code === 'ArrowLeft') {
        console.log('LEFT')
    } else if (event.code === 'ArrowDown' ) {
        console.log('down')
    } else {
        console.log('other')
    }
});