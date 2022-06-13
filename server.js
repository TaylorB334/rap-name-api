const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
    'age' : 29 ,
    'birthName' : 'Shéyaa Bin Abraham-Joseph' ,
    'birthLocation' : 'London, England'
    },
    'eminem':{
    'age' : 49 ,
    'birthName' : 'Marshall Mathers' ,
    'birthLocation' : 'Saint Joseph, Missouri'
     },
    'unknown':{
    'age' : 0 ,
    'birthName' : 'Unknown' ,
    'birthLocation' : 'Unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers [rapperName]){
        response.json(rappers[rapperName])
    }
    
})

app.listen (PORT, ()=>{
    console.log(`The server is now running on port ${PORT}!`)
})