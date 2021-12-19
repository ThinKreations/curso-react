const activo = true;
/*
let message = '';

if(activo){
    mensaje='Activo';
}else{
    mensaje='Inactivo';
}
*/
//const mensaje = (activo)?'Activo':'Inactivo';
//const mensaje = (activo)?'Activo':null;
const mensaje = activo && 'Activo'
console.log(mensaje);