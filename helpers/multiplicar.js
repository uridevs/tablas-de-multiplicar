const fs = require('fs');
const colors = require('colors');


const crearTabla = async (base = 1, listar = false, hasta=10) => {

    const h = hasta;
    try{
        
        let salida, consola = '';

        for (let i = 1; i<h+1; i++){
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`
        }

        if (listar){
            console.log('================'.green)
            console.log('Tabla del: '.green + `${base}`.red )
            console.log('================\n'.green)
            console.log(consola)
        }

        fs.writeFileSync( `./output/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;

    }catch(err){
        throw err;
    }
}

module.exports = {
    crearTabla
}