const saludar1 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => `Hola, ${nombre}`;

const saludar3 = () => `Hola Mundo`;

console.log(saludar1('José'));
console.log(saludar2('Jesús'));
console.log(saludar3());

const getUser = () => ({
    uid: '123456',
    username: 'DiosGOD'
});

const user = getUser();

console.log(user);

//Tarea
//1. Funcion de Flecha
//2. Retornar objeto implícito
//3. Pruebas

/* Antes */

/*function getUsuarioActivo(nombre){
    return{
        uid:'123456',
        username:'yop'
    }
};

const usuarioActivo=getUsuarioActivo('José');
console.log(usuarioActivo);*/

/* Ahora */

const getUsuarioActivo=(nombre)=>({
    uid:'123456',
    username:nombre
});

const uActivo=getUsuarioActivo('José');
console.log(uActivo);