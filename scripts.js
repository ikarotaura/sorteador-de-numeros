



function generatorNumber() {
    const entre = Math.ceil(document.querySelector(".input-entre").value)
    const e = Math.floor(document.querySelector(".input-e").value)
    
    if( entre >= e ){
        alert("o valor minimo tem que ser Menor que o valor maximo")
    }
    else{
        const result =  Math.floor(Math.random() * (e - entre + 1) + entre);
      
        alert (result)
    }

    
    
    
   
   
  



}
