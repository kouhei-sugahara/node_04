const express = require('express')
//models/item.jsを読み込む
const homeController = require('./controllers/HomeController')
const item = require('./models/item')
const router = express.Router()


const default_login_name = process.env.LOGIN_NAME
const default_password = process.env.PASSWORD

router.get('/login',(req,res) =>{
    res.render('login/index.ejs')
})

router.post('/auth',(req,res) => {
    let message = 'ログインできません'
    const login_name = req.body.login_name
    const password = req.body.password
    console.log(login_name)
    console.log(password)

    if(login_name == default_login_name
        && password == default_password){
            message = 'ログインしました'
    }
    res.send(message)
})

router.get('/',homeController.index)
router.get('/profile',homeController.profile)

router.get('/item/:id',(req,res) => {
    const id = req.params.id
    console.log(id)
    let data = {}
    data.item = item.find(id)
    //console.log(item)
    res.render('item/show.ejs',data)
})

//router.post('/update',(req,res) => {
//    res.send('更新しました')
//})
module.exports = router