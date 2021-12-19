/*
const getImagenPromesa = () => {
    return new Promise(resolve=>{
        resolve('https://xd.com');
    });
}
getImagenPromesa().then(console.log);
*/

//ASYNC

const getImage=async()=>{
    try{
     
        const apiKey = 'MYRlwEecklZvQn3wfZKTdBSgBNOcf2OF'
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        //Tarea: Imprimir la imagen en el HTML
        const {data} = await resp.json();
        const {url}=data.images.original
        console.log(url)

        const img=document.createElement('img');
        img.src=url;

        document.body.append(img);
   
    }catch(error){
        console.warn(error)
    }
}

getImage();