function startLoading() {

    let span = document.getElementsByClassName('load')[0];
    span.classList.add('loading');
    document.getElementById('status').innerHTML = 'cargando'


}

function eliminar(id){


}

function editar(id){
    let row = document.getElementById(id)
    console.log(row)
    for (let i = 1; i <= 3; i ++){
        row.children[i].contentEditable = true;
        row.children[i].classList.toggle('editing');

    }
    row.children[4].innerHTML = `<td>
                                
                                <button  onclick="guardar(${id})">Guardar</button>
                                <button  onclick="eliminar(${id})" disabled>Eliminar</button>
                                </td>`
                                //aun por implementar la funcion guardar//
}

function guardar (id){
    let row = document.getElementById(id)
    for (let i = 1; i <= 3; i ++){
        row.children[i].contentEditable = false;
        row.children[i].classList.toggle('editing');

    }
    row.children[4].innerHTML = `<td>
                                
                                <button  onclick="guardar(${id})">Editar</button>
                                <button  onclick="eliminar(${id})" >Eliminar</button>
                                </td>`
    const datos = row.children;
    const person = {

        name: datos[1].textContent,
        lastname: datos[2].textContent,
        dni:datos[3].textContent

    }
    
    const requestOpttion = {

        method : 'PUT',
        headers : {'Content-Type' : 'application/json' },
        body: JSON.stringify(person)

    }
    fetch(`https://66c4eb8eb026f3cc6cf110cb.mockapi.io/v1/person/${id}`, requestOpttion)
        .then(response => handleResponse(response))
        .then( data =>{

            console.log(data)
        })
        .catch((valor) => { console.log('hola error', valor) })
        .finally( () => { 
            console.log('hola vvv');
            stopLoading() 
        })
    
}

function stopLoading() {

    let span = document.getElementsByClassName('load')[0];
    span.classList.remove('loading');
    document.getElementById('status').innerHTML = 'finalizado'


}

function handleResponse(response) {


    if (!response.ok) {

        return Promise.reject;
    }
    else {

        return response.json();

    }


}


function getAll() {
    startLoading();

    const requestOpttion = {

        method : 'GET',
        headers : {'Content-Type' : 'application/json' }


    }
    fetch('https://66c4eb8eb026f3cc6cf110cb.mockapi.io/v1/person', requestOpttion)

        .then(response => handleResponse(response))

        .then((data) => {

            console.log(data);
            const table = document.getElementById('all-persons');
            let list = ``;
            data.forEach(person => {
                let fila = ` <tr id="${person.id}">
                    <td> ${person.id} </td>
                    <td> ${person.name}</td>
                    <td> ${person.lastname}</td>
                    <td> ${person.dni} </td>
                    <td>
                    <button  onclick="editar(${person.id})">Editar</button>
                    <button  onclick="eliminar(${person.id})">Eliminar</button>
                    </td>
                </tr> ` 
                list += fila;
            });
            table.innerHTML = list
        })


        .catch((valor) => { console.log('hola error', valor) })
        .finally( () => { 
            console.log('hola finalmente');
            stopLoading() 
        })
}

