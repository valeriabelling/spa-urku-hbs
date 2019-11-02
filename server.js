const express = require('express')
const app = express();
const hbs = require('hbs')

app.use(express.static(__dirname + '/public'))

// Express HBS engine
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/parciales')


// llamamos al render de home
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/blog', (req, res) => {
    res.render('blog')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/portfolio', (req, res) => {
    res.render('portfolio')
})

app.get('/data', (req, res) => {
    res.send('hola nueva ruta')
})

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
    //listen recibe un callback, le paaso una funcion
})