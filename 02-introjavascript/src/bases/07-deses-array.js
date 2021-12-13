const tucanes = ['Ithan','Nápoles','Fetuccini','Sergio','Rafiki'];
const [,p2,,p4,] = tucanes;
console.log(p2,p4)

const retornaArreglo=()=>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1. 1er [] = nombre
//2. 2do = setNombre
const useState = (valor) => {
    return [valor, ()=>{console.log('Q onda')}];
}

const [nombre, setNombre] = useState ('José');
console.log(nombre);
setNombre();