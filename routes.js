const express = require('express')
//models/item.jsを読み込む
const homeController = require('./controllers/HomeController')
const loginController = require('./controllers/LoginController')
const itemController = require('./controllers/ItemController')
//const item = require('./models/item')
const router = express.Router()

router.get('/',homeController.index)
router.get('/profile',homeController.profile)

router.get('/login',loginController.index)
router.post('/auth',loginController.auth)

router.get('/item',itemController.index)
router.get('/item/:id',itemController.show)

//router.get('/login',(req,res) =>{
//    res.render('login/index.ejs')
//})

//router.post('/update',(req,res) => {
//    res.send('更新しました')
//})
module.exports = router