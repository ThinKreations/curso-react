const persona={
    nombre:'José',
    edad: 18,
    clave: 'Dios'
};

//const {nombre, edad, clave} = persona;

//console.log(nombre);
//console.log(edad);
//console.log(nombre);

const useContecst = ({nombre, edad, rango=`Dios`, clave}) => {

    //console.log(nombre, edad, rango);
    
    return{
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat: 35.3454,
            lng: -35.6969
        }
    }
    
}

const {nombreClave, anios, latlng:{lat, lng} } = useContecst(persona);

console.log(nombreClave, anios)
console.log(lat, lng)