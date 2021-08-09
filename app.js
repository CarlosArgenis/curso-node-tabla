
//const { argv, options } = require('yargs');
const {crearArchivo} = require('./utilerias/multiplicar')
const argv  = require('./config/yargs');
require('colors');

console.clear();

crearArchivo(argv.b,argv.l,argv.hasta)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));

//console.log(process.argv);
//console.log(argv);
//console.log('base: yargs',argv.b);

//const [,,arg3 = 'base=9'] = process.argv;
//const [,base = 5] = arg3.split('=');

//console.log(base);
//const base = 5;

















/*
console.log('=======================');
console.log(`     Tabla del: ${num} `);
console.log('=======================');


let salida = '';

for(var i = 1; i <= 10; i++){
    //console.log('Hola');
    //console.log(`${num} x ${i} = ${num*i} `)
    salida +=`${num} x ${i} = ${num*i} \n`;
}

console.log(salida);*/
/*
fs.writeFileSync(`tabla-${num}.txt`,salida,(err)=>{
    if(err) throw err;

    console.log(`tabla-${num}.txt creada`)
})*/

/*fs.writeFileSync(`tabla-${num}.txt`,salida);

console.log(`tabla-${num}.txt creada`)*/
//console.log(salida);