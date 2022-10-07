// i=1;
// while (i<100) {
//     if(i%2===0) {
//         console.log(i);
//     }
//    sum=sum+i
// }
// console.log('반복문 끝')

sum=0;
for(let i=1; i<100;i++) {
    if (i%2==0 || i%3==0) {
        sum=sum+i
    }
}

console.log(sum);


for(let i=2; i<=9; i++) {
    console.log("")
    for (let j=1; j<=9; j++) {
        console.log(`${i}*${j}=${i*j}`)
    }
}