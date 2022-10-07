console.log('connected!')

//조건문
//어떤 조건에 따라 논리 구조를 분기(나눔)
//->조건에 따라 서로 다른 문장을 실행

//연산자
//동등 연산자: ==,!=
console.log(1 == 1);
console.log(1 == 2 );
console.log(1 != 1 );
console.log(1 != 2 );

console.log('1' == 1 );
console.log('2' != 1);
//==. !=: 타입(자료형)이 달라도 괜찮음! 값만 비교

console.log(1 === 1);
console.log(1 === 2 );
console.log(1 !== 1 );
console.log(1 !== 2 );

console.log('1' === 1 );
console.log('2' !== 1);


//비교 연산자
//>, <, >=, <=
console.log('---');
console.log(2>1);
console.log(2<1);
console.log(1>=1);
console.log(1<=1);

//논리 연산자
//&& : and
//||:or
//!:not

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false ||  false);
console.log(!true);
console.log(!false);
console.log(!!false);

console.log('---')
console.log((2 > 1) && (-2 < 1));
console.log((2 > 1) && (-2 < 1) || (5 > 2));


//=====================================================

if (5 > 3) {
    console.log('bigger!')
}


function isBig() {
    if (5 > 3) {
        return 'bigger';
    }
}
console.log(isBig());

//if-else


if ( 5 > 3) {
    console.log('bigger');
} else {
    console.log('smaller..');
}

//if-else if
//else if 키워드 : 여러 개 가능

if ( 5 < 3) {
    console. log('smaller..')
} else if (5 > 3 ) {
    console.log('bigger!1')
} else if ( 5 == 3) {
    console.log('same')
}

if ( 5 < 3) {
    console. log('smaller..')
} else if (5 > 3 ) {
    console.log('bigger!1')
} else {
    console.log('same');
}

// 퀴즈
let score = 30;
//90 이상이면 A 
//80 이상이면 B
//70 이상이면 C 
//60 이상이면 D 
//50 미만이면 E 

if ( score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C');
} else if (score >= 60) {
    console.log('D');
} else {
    console.log('F')
}

let usrId = 'user';
let usrPw = '1234';
let inputId = 'user';
let inputPw = '1234';

if ( usrId == inputId) {
   //조건문 중첩
    if (usrPw == inputPw) {
        console.log(`${usrId}님 하이`);
        console.log(usrId,'님 하이')
    } else {
        console.log('비밀번호 틀림')
    }

} else {
    console.log('아이디 없음');
}

//step1.
var num = 6;
if (num%2 == 0 ) {
    console.log("짝수");
} else {
    console.log("홀수")
}

//step2.

function isEven(x) {
    if(x%2 == 0) {
    return true;
} else {
    return false;
}
}


console.log(isEven(2))

// ======================================
// Q. 바로 위에 문제에서 조건 추가!!
// 비밀번호 확인 조건이 추가되었습니다.
// - pw1은 길이가 5 이상이고 8이 이하라면,
//      - pw1과 pw2가 같다면, ''비밀번호 일치~' 반환
//      - pw1과 pw2가 같지 않다면, ''비밀번호 불일치..' 반환
// - pw1의 길이가 5 미만이거나 8 초과라면, '비밀번호는 5자리 이상 8자리 이하!!!' 반환
function isValidate2(pw1,pw2) {
    if(pw1.length >=5 && pw1.length <=8) {
        if(pw1 == pw2) {
            return '비밀번호 일치~'

        } else {
            return '비밀번호 불일치..'
        }

        
    } else {
        return '비밀번호는 5자리 이상 8자리 이하!!!'
    }
    // 함수 내부 채워주세요.
}
console.log(isValidate2('1234','4567'));
console.log(isValidate2('123456789', '123456789'))
console.log(isValidate2('12345', '12345'));
console.log(isValidate2('12345', '12345!!'));

   
   // 브라우저 콘솔창 확인 결과
//    isValidate2('1234', '1234'); // '비밀번호는 5~8자리만 가능!!!'
   // isValidate2('123456789', '123456789'); // '비밀번호는 5~8자리만 가능!!!'
   // isValidate2('12345', '12345'); // '비밀번호 일치~'
   // isValidate2('12345', '12345!!'); // '비밀번호 불일치..'


   //============================================================
   //switch 문
   //-하나 이상의 case 문으로 구성
   //-default 문이 있는데 필수는 아님 -> 작성 권장
   //-break 키워드 : 블록(중괄호, {})을 빠져나갈 때 사용하는 키워드


   /*

switch 문의 기본 구조
switch(x) {
    case 값:// if (x === 값)
    break; // x가 값과 같을 때의 문장을 실행 -> 블록을 빠져나옴
}
    case 값2: // if(x === 값2)
        // x가 값2와 같을 때 실행할 문장
        break; // x가 값2와 같을 때의 문장을 실행 -> 블록을 빠져나옴
    default: //else
        // x가 case에 있는 어떤 것과도 일치하지 않았을 때 실행할 문장
        break; // 블록을 빠져나옴

   */


    let a = 2+2;
    switch(a) {
        case 4:
            console.log('비교하려는 값과 일치합니다.');
            break;
        case 5 :
            console.log('비교하려는 값보다 큽니다.');
            break;
           default:
            console.log('어떤 값인지 파악 안됨');
            break;
    }
    let b = 3+3;
    switch(b) {
        case 6:
            console.log('비교하려는 값과 일치');
            break;
        case 7:
            console.log('비교하려는 값보다 큽니다.');
            break;
            default:
                console.log('어떤 값인지 파악 안됨');
            break;
    }

    if(a === 3) {
        console.log('비교하려는 값보다 작습니다.');

    } else if (a === 4) {
        console.log('비교하려는 값과 일치합니다.');
    } else if (a === 5) {
        console.log('비교하려는 값보다 큽니다');


    } else {
        console.log('어떤 값인지 파악 안됨')
    }

    let c= 'green';
    switch(c) {
        case 'green':
            console.log('비교하려는 값과 일치');
            break;
        case 'blue':
            console.log('비교하려는 값보다 큽니다.');
            break;
            default:
                console.log('어떤 값인지 파악 안됨');
            break;
    }

    var grade = '0';
    switch(grade) {
        case 'A':
            console.log('학점 A')
            break;
        case 'B':
            console.log('학점 B')
            break;
        case 'C':
            console.log('학점 C')
            break;
        case 'D':
            console.log('학점 D')
            break;

        case 'F':
            console.log('학점 F')
            break;
        default:
            console.log('오류 발생')
            break;
    }

    //여러 개의 case 문을 묶을 수 있음

    switch(a) {
        case 4:
            console.log('비교하려는 값과 일치합니다.');
            break;
        case 5 :
            console.log('비교하려는 값보다 큽니다.');
            break;
           default:
            console.log('어떤 값인지 파악 안됨');
            break;
    }

    //#####
    // 삼항 연산자
    //- 3개의 피연산자를 필요로 함
    // 조건식 ? (참일 때 실행할 코드) : (거짓일 때 실행할 코드)


    //짝홀 구별
    var num = 3;
    if (num % 2 === 0) {
        console.log('짝수');
    } else {
        console.log('홀수');
    }

    var result = (num % 2 == 0) ? '짝수' : '홀수';
    console.log(result);
    console.log(3 > 1 ? 'bigger' : 'smaller');

    //퀴즈)

    let hour = 10;
    console.log(hour < 13 ? '오전입니다' : '오후입니다');

  var today = new Date();

console.log(new Date);

