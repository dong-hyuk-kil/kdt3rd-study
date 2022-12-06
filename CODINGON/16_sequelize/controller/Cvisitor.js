
const models = require('../models');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  models.Visitor.findAll().then((result) => {
    console.log('findAll >> ', result);
    res.render('visitor', {data:result});
  });
  };

exports.getVisitor = (req, res) => {
  models.Visitor.findOne({
    where: {id: req.query.id },
  }).then((result) => {
    console.log('findOne >> ', result);
    res.send(result);
  })
};

exports.postVisitor = (req, res) => {
  models.Visitor.create({
    name: req.body.name,
    comment: req.body.comment,
  }).then((result) => {
    console.log('create >> ', result );
    res.send(result);
  })
  };
  


exports.patchVisitor = (req,res) => {
models.Visitor.update({
name:req.body.name,
comment:req.body.comment,
},
{
  where: {
    id:req.body.id,

  },
}
). then((result) => {
console.log('update >> ', result);
res.send('수정 성공 !!');
});
  };

exports.deleteVisitor = (req, res) => {
 models.Visitor.destroy({
  where: {id: req.body.id},

 }).then((result) => {
  console.log('destroy >> ', result);
  res.send('삭제성공')
 });
  };