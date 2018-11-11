const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) =>{
  Article.find((err, docs)=>{
    res.render('index', { docs });
   });
});

/* GET add form. */
router.get('/add', (req, res, next) =>{
  res.render('add');
  });

/* POST data. */
router.post('/save',  (req, res)=> {
    const myData = new Article(req.body);
    myData.save()
    .then(item => {
    res.render('save',{title:'เพิ่มบทความเรียบร้อย!'});
  })
})

/* GET show data by id. */
router.get('/show/:id',(req, res)=>{
  const id = req.params.id
      Article.findOne({_id: id},(err, docs)=>{
      res.render('show', { idtitle:docs._id,title:docs.title,detail:docs.detail });
      });
  });
/* GET delete data by id. */
router.get('/delete/:id', (req, res)=>{
  const id = req.params.id
      Article.deleteOne({_id: id},(err, docs)=>{
      res.render('layout',{title:'ลบบทความเรียบร้อย!'});
      });
  });
/* GET show data by id. */
router.get('/edit/:id', (req, res)=>{
    const id = req.params.id
        Article.findOne({_id: id},(err, docs)=>{
       res.render('edit', { idtitle:docs._id,title:docs.title,detail:docs.detail });
        });
    });
/* GET update data by id. */
router.post('/update/:id',   (req, res)=> {
  const json = req.body;
  const id = req.params.id
      Article.updateOne({_id: id},json,(err, docs)=>{
        res.render('layout',{title:'แก้ไขบทความเรียบร้อย!'});
      });
  });
module.exports = router;
