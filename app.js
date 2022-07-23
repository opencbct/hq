//imports
const express = require('express')
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))


// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

// app.engine('html', require('ejs').renderFile)
// app.set('views', path.join(__dirname, 'views'))
//swap jade for ejs etc

app.get('', (req, res) => {
    res.render('index', { text: 'This is EJS'})
    // res.render('index', { __dirname + '/views/index.ejs'})
})


// Listen on port 3000
app.listen(port, () => console.info('Listening on port ${port}'))