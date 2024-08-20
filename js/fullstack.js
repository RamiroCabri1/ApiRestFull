const text = '{"nombre":"rama","dni":30388969, "fecha": "1893-08-07"}';

/*const obj = JSON.parse(text);

obj.fecha = Date(obj.fecha)*/


const obj = JSON.parse( text , function(key, value){

    if (key =="fecha"){

        return  Date(value)

    }else {

        return value
    }



})


console.table(obj)

for ( let key in obj) {

    console.log(key)
}

const objeto2 = {

    name : "rama",
    nickName : "dudemaster"

}
const texto2 = JSON.stringify(objeto2)

console.log(texto2)