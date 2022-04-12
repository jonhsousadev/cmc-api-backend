const backend = require('./backend/index')
const express = require('express')
const app = express()
const port = 3000
// firstSample.testApi()

app.set('view engine','ejs')
app.set('views','./views')

app.get('/',(req,res) => {
  res.render('home')
})

app.get('/key-info',(req,res) => {
  try{
    const result = backend.keyInfo()
    result.then(val => res.render('keyInfo',{plan: val.data.plan}))
    // result.then((value)=> res.render('keyInfo',{ keyInfo: value }))
  } catch (err) {
    res.render('err')
  }

})

app.get('/crypto-currency', (req,res) => {
  try {
    const result = backend.cryptoCurrency()
    result.then(val => res.render('cryptoCurrency',{currencies: val.data}))
  } catch (err) {
    res.render('err')
  }
})

app.listen(port,()=>{
  console.log(`Executando servidor na porta: ${port}`)
})


