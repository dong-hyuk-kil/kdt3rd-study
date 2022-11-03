const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing (경로 설정)
app.get('/', function (req, res) {
  res.render('index', { title: '파일 업로드 실습31' });
});



app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});