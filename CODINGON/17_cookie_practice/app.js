const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); 

const cookieConfig = {
    httpOnly:true, // 웹 서버를 통해서만 쿠키 접근 가능 (js에서 접근 불가능)
    maxAge:24*60*60*1000,
  }


app.get('/', (req, res) => {
  res.render('index', {popup: req.cookies.popup});
});

app.post('/setCookie', (req,res) => {
    res.cookie('popup', 'hide', cookieConfig);
    res.send('쿠키 설정 완료~')

})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});