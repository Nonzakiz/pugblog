const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) =>{
  Article.find((err, docs)=>{
    res.render('index', { docs });
   });
});

router.get('/add', (req, res, next) =>{
  res.render('add');
  });

router.post('/save',  (req, res)=> {
    const myData = new Article(req.body);
    myData.save()
    .then(item => {
    res.render('save',{title:'เพิ่มบทความเรียบร้อย!'});
  })
})
router.get('/show/:id',(req, res)=>{
  const id = req.params.id

      Article.findOne({_id: id},(err, docs)=>{
     res.render('layout', { idtitle:docs._id,title:docs.title,detail:docs.detail });
      });
  });
module.exports = router;
