import { getHeroeById } from '../bases/08-imp-exp';

/*

const promesa = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        //Tarea
        //Importar getHeroeById();

        const heroe = getHeroeById(2);
        //console.log(heroe);
        resolve(heroe);
        //reject('No se pudo encontrar el héroe');
    }, 2000);

});

promesa.then((heroe)=>{
    console.log('heroe: ',heroe);
}).catch(err=>console.warn(err));

*/

const getHeroeByIdAsync = (id) =>{
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            const p1 = getHeroeById(id);
            //console.log(heroe);
            if(p1){
                resolve(p1);
            }else{
                reject('No se pudo encontrar el héroe');
            }
            
        }, 2000);
    
    });
    
}

getHeroeByIdAsync(1).then(console.log)
.catch(console.warn);