// ye file saare item specific routes ko store karegi


const express = require('express')
const router = express.Router()

// middleware that is specific to this router
// const timeLog = (req, res, next) => {
//   console.log('Time: ', Date.now())
//   next()
// }
// router.use(timeLog)

// define the home page route

router.get('/', (req,res) => {
    res.send("Got a GET Request")
    // res.sendFile('./dummy.html', {root:__dirname});
});
router.post('/items', (req,res) => {
    // res.send("Got a POST Request")
    res.json({a:1, b:2, c:3, d:4});
});
router.put('/items/:id', (req,res) => {
    res.send("Got a PUT Request")
});
router.delete('/items/:id', (req,res) => {
    res.send("Got a DELETE Request")
});

// router.get('/', (req, res) => {
//   res.send('Birds home page')
// })
// define the about route
// router.get('/about', (req, res) => {
//   res.send('About birds')
// })

module.exports = router
