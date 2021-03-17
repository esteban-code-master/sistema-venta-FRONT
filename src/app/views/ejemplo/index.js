import React from 'react'
import {Productos,ProductosCreate} from '../../api/ejemplo/index'
import "core-js/stable";
import "regenerator-runtime/runtime";

export const Tabla =  () => { 
    Productos()  
    .then((resp)=>{
      const data = resp.data    
      let lista = '';  
            for (let index = 0; index < data.length; index++) {
                lista += `
                        <p class = "list-producto">
                            ${data[index].name}
                        </p>
                    `                
            }    
            console.log(lista);
        document.getElementById('root-template').innerHTML = lista     
    })
    return <div></div>
}

export const Tabla2 =  () => { 
    return (
        <div>
           <div className = "productos" id = "productos">
           <input id ="photo" type="text"  name="name" placeholder="ingresa una foto" />
            <input id ="code" type="text"  name="name" placeholder="ingresa un code" />
            <input id ="name" type="text"  name="name" placeholder="ingresa un name" />
            <input id ="descrip" type="text"name ="name" placeholder="ingresa un descripcion" />
            <input id ="price" type="text" name="name" placeholder="ingresa un price" />           
           </div>
           <div className = "productos__enviar">
                <button onClick ={jalarDataInput} >ENVIAR</button>
           </div>
        </div>
    )
}


 const jalarDataInput = async ()=>{
    const photo =  document.getElementById('photo').value;
    const code =  document.getElementById('code').value;
    const name =  document.getElementById('name').value;
    const descrip =  document.getElementById('descrip').value;
    const price =  document.getElementById('price').value;
    
    const data = {
        urlImage : photo,
        code : code,
        name : name,
        description :  descrip,
        price: price,
        existence : 0,
        id_category: 3    
    }
   
    await ProductosCreate(data)    
}



