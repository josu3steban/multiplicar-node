const argv = require('./config/yargs').argv;
const { listar, crearArchivo } = require('./multiplicar/multiplicar');


const comando   = argv._[0];
const base      = argv.base;
const limite    = argv.limite;

console.log(argv);

switch( comando ) {

    case 'listar':
        listar( base, limite );
    break;

    case 'crear':
        crearArchivo( base, limite )
            .then( (archivo) => { console.log(`Archivo creado: ${archivo}`);})
            .catch(e => console.log(e));
    break;

    default:
        console.log('Comando no reconocido');
}

