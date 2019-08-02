// let promessa = new Promise(function(){

// });


let dia = prompt ("digite o dia da semana")
let callback =(resolve , reject) =>{
    if(dia == "sextou"){
        resolve("Acertou mizeravi");
    }else{
        reject("Errouuuuuuu");
    }
}
let promessa = new Promise(callback);

promessa
    .then(function(){
    alert("acertouuuuuu")
    })
    .catch(function(){
        alert("errrouuuuuuuu")
    })
    
    // promessa
//   .then(console.log)
//   .catch(console.log)
  