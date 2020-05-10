var express = require('express')
var app = express()

app.get('/', function (_req: any, res: { send: (arg0: string) => void }) {
  res.send('Hello ds!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
