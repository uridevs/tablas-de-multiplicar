const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check( (argv, options) => {
        console.log('yargs', argv)
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número'
        }
        return true;
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola al ser creada'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Hasta que número se debe crear la tabla'
    })
    .argv;


module.exports = argv;