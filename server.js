const express = require('express') /* กำหนดวิธีการเก็บตัวแปล ประกาศตัวแปร เก็บแล้วไม่สามารถแก้ไขได้เลย เราตั้งชื่อตัวแปรว่า express*/
   
const { twig } = require('twig')

const app = express () /* เอาตัวแปร express เข้ามาเพื่อเก็บไปไว้ที่ app*/

app.set('view engine','twig')

const homeController = require('./controllers/home.controllers')
const newsController = require('./controllers/news.controllers')

app.get('/', homeController.index)
app.get('/news', newsController.index)

app.use('/assets', express.static(__dirname+'/static/assets', {
	maxAge:86400000
}))

app.listen(8000,function(err) { /* 8000 คือ port ตัวเลข4ตัวที่ดูจากเราทำเซฺฟเวอจำลอง */ 
	console.log('Server is running on port 8000')
} )
