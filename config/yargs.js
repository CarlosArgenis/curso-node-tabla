const { describe } = require('yargs');

const argv = require('yargs')
    .option('b',{
        alias:'base',
        type:'number',
        demandOption:true,
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias:'listar',
        type:'boolean',
        default:false,
        demandOption:false,
        describe:'Muestra la tabla en consolta'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default: 10,
        describe:'Muestra la tabla en consolta'
    })
    .check((argv,options)=>{
        if(isNaN(argv.b)){
            console.clear();
            throw 'Valor limite de la multiplicación'
        }
        return true;
    })
    .argv;

module.exports = argv;
