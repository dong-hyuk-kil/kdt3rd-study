const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const comments = [{
    id: 1,
    userid: 'hellowWorld',
    date: '2022-10-31',
    comment: '안녕하세요 ^-^',
}, 
{
    id: 2,
    userid: 'happy',
    date: '2022-10-31',
    comment: '반가워유',

}, {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
}, 

{
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니닿ㅎ',
},

{
    id: 5,
    userid: 'bestpart22',
    date: '2022-11-02',
    comment: '첫 댓글입니닿ㅎ22',
},

{
    id: 5,
    userid: 'bestpart22',
    date: '2022-11-02',
    comment: '첫 댓글입니닿ㅎ22',
},

]

// Routing (경로 설정)
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/comments', (req,res) => {
    console.log(comments)
    res.render('comments', {commentInfos: comments});
});

app.get('/comment/:id', (req,res) => {
    console.log(req.params); // 라우트 매개 변수(:id)에 대한 정보 담겨 있음 
    console.log(req.params.id)

    const commentId = req.params.id;
    console.log(comments[commentId-1]);
    if (commentId < 1 || commentId > comments.length) {
       return res.render('404');

    
    }
    if (isNaN(commentId)) {
        return res.send('잘못된 접근입니다!!');
    }
    res.render('comment', {commentInfo: comments[commentId-1]});
})

app.get('*', (req,res) => {
    return res.render('404');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});