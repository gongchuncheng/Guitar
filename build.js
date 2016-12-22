var fs = require("fs");
var path = require('path');
var basePath = __dirname;
var versionCode = "";
fs.readdir("./static/dist/",function(err, files){
   if (err) {
       return console.error(err);
   }
   files.forEach( function (file){
   		if(file.split("-")[1]){
   			outPutJsp(file.split("-")[1].split(".")[0]);
   		}
   });
});
function outPutJsp(versionCode){
	var staticEjs = '<!DOCTYPE html>'
                  +'<html lang="en">'
                  +'<head>'
                    +'<meta charset="UTF-8">'
                    +'<title>Guitar</title>'
                  +'</head>'
                  +'<body>'
                    +'<div id="root"></div>'
                    +'<script src="dist/bundle-'+versionCode+'.js"></script>'
                  +'</body>'
                  +'</html>';
	var ejsPath = path.resolve(basePath, './static/index.html');
	fs.writeFileSync(ejsPath, staticEjs, 'utf8');
	console.info('static version success.');
}