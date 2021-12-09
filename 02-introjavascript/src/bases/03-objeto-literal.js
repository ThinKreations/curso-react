const persona = {
    nombre: 'José',
    apellido: 'Nápoles',
    edad: 18,
    dirección:{
        ciudad: 'CDMX',
        pc: 98765,
        lat: 12.654,
        lng: 65.654
    } 
};

const persona2 = {...persona};
persona2.nombre = 'Jesús';

console.log(persona);
console.log(persona2);