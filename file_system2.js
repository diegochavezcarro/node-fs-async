var fs = require('fs');
var contenido;
fs.readFile('./texto.txt', "utf8", function (er, data) {
    if (er) throw er;
    contenido = data;
});
setTimeout(escribir, 3000);
function escribir() {
    fs.writeFile('./nuevo.txt', contenido, 'utf8', function (err) {
        if (err) throw err;
        //console.log(data);
        console.log('Guardado.');
    });
};