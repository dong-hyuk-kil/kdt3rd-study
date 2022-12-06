const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing (경로 설정)
app.get('/', function (req, res) {
  res.render('dynamic', { title: '동적 폼 실습' });
});

app.get('/practice29', function(req,res) {
  console.log(req.query);
  res.send(req.query);
})

const realId = 'banana';
const realPw = '4321'

app.post('/practice30', function(req,res) {
  console.log(req.body);

  if (realId === req.body.userId && realPw === req.body.userPw) {
    console.log('로그인성공');
    res.send({userInfo:req.body, isLogin:true});
  } else {
    console.log('로그인 실패');
    res.send({isLogin:false})
  }
})

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});