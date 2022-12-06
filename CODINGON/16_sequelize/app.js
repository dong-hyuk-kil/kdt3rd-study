const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));
// 정적 파일 보관함 폴더 (static)
// css, js, img
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require('./routes');
app.use('/', indexRouter);

app.get('*', (req,res) => {
  res.render('404')
});



app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});