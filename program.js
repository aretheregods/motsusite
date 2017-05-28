const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

const port = process.env.PORT || 3000;

app.use(serve(__dirname + '/public'));

app.listen(port);

console.log('Listening on port', port);
