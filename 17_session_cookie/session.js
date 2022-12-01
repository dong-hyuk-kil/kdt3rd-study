const express = require('express');
const session = require('express-session');
const { get } = require('http');
const app = express();
const PORT = 8000;

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized:true,
    name: 'my-session'

}))

app.get('/', (req, res) => {
    req.session.name  = '홍길동'
    res.send('세션 설정 완료')
})

app.get('/name', (req, res) => {
    res.send(req.session.name);
})

app.get('/destroy', (req,res) => {
    req.session.destroy((err) => {
        if (err) {
            throw err;
        }
        res.res('세션 삭제 완료!')
        // res.redirect('/')
    })
})

app.listen(PORT, (req,res) => {
    console.log(`http://localhost:${PORT}`);
})