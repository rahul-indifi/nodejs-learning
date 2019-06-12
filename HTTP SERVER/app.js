let http = require('http');
let fs = require('fs');



http.createServer( function(req, res){

    if(req.url === '/'){
        res.writeHead(200, { 'Content-Type' : 'text/html' });
        let data = fs.readFileSync( __dirname + '/index.html', 'utf8');
  
        //using template to replace something dynamically in the html file
        let message = 'Rahul Pandey';
        data = data.replace('{message}',message);
        res.end(data);

        //streaming the content of a file to the server
        //fs.createReadStream(__dirname + '/index.html').pipe(res);
    }

    if(req.url === '/api'){

        //code for outputting JSON to the server
        res.writeHead(200, { 'Content-Type' : 'text/html' });
	    let data = {
		    firstname : 'Rahul',
		    lastname : 'Pandey'
	    }
	    res.end(JSON.stringify(data));
    }
    
    res.writeHead(404);
    res.end();

}).listen(3000, (err)=>{
    
});