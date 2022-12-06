const comment = require('../model/Comment');

const comments = [
    {
      id: 1,
      userid: 'helloworld',
      date: '2022-10-31',
      comment: '안녕하세요 ^~^',
    },
    {
      id: 2,
      userid: 'happy',
      date: '2022-11-01',
      comment: '반가워유',
    },
    {
      id: 3,
      userid: 'lucky',
      date: '2022-11-02',
      comment: '오 신기하군',
    },
    {
      id: 4,
      userid: 'bestpart',
      date: '2022-11-02',
      comment: '첫 댓글입니당ㅎㅎ',
    },
  ];
  
  exports.main = (req, res) => {
    res.render('index');
  };
  
  exports.comments = (req, res) => {
    console.log(comment.commentInfos()); // 댓글 목록 확인용
    // { commentInfos: [ {}, {}, {}, {} ]}
    res.render('comments', { commentInfos: comment.commentInfos() });
  };
  
  exports.comment = (req, res) => {
    console.log(req.params); // 라우트 매개변수(:id)에 대한 정보 담겨있음
    console.log(req.params.id); // id 값 추출
  
    const comments = comment.commentInfos();
    const commentId = req.params.id; // 댓글 id: url로 들어온 매개변수
    console.log(comments[commentId - 1]); // 댓글 목록에서 특정 댓글 정보 추출
  
    if (commentId < 1 || commentId > comments.length) {
      return res.render('404');
    }
  
    if (isNaN(commentId)) {
      return res.render('404');
    }
  
    res.render('comment', { commentInfo: comments[commentId - 1] });
  };