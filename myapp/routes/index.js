const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Nonzakiz' });
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

module.exports = router;
