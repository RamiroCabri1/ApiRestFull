fetch("https://66c4eb8eb026f3cc6cf110cb.mockapi.io/v1/person85")
.then((valor)=> {console.log("hola rama", valor)})
.catch((valor)=> {console.log("hola error", valor)})
.finally(()=> {console.log("hola finalmente")})