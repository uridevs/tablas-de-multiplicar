const { crearTabla } = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors');

console.clear()

// console.log(argv)

// const [,,arg3= 'base=1'] = process.argv;
// const [, base = 1] = arg3.split('=')

crearTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))

