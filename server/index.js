var http = require('http')
  , ecstatic = require('ecstatic')

http.createServer(ecstatic(__dirname + '/../app/', {
    autoIndex: true
  , defaultExt: 'html'
})).listen(process.env.PORT || 8080, function (){
  console.log('Revls running on %d', this.address().port)
})


