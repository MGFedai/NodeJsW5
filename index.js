const http = require('http');

const server = http.createServer((req, res)=>{
    const url = req.url;
    if(url=== '/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>index sayfasina hosgeldiniz</h2>')
    }
    else if (url === '/hakkimda'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h2>hakkimda sayfasina hosgeldiniz</h2>')
    }
    else if (url === '/iletisim'){
        console.log('girdi')
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h2>iletisim sayfasina hosgeldiniz</h2>")
    }
    
    else {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write("<h3>404 SAYFA BULUNAMADI</h3>");
    }

    // console.log(url);
    // console.log('bir istek gönderildi');
    
    res.end();
});

const port=5000;
server.listen(port,()=>{
    console.log(`sunucu port ${port} de baslatıldı`);
});