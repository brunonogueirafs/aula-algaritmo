const select = document.getElementById('regioes')

 select.onchange = (event) => buscarEstados(event.target.value)


function buscarRegioes(){
    console.log("s")
    fetch (`https://servicodados.ibge.gov.br/api/v1/localidades/regioes`)
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            for(let i = 0; i < response.length; i++) {
                const regiao = response[i]
                console.log(response[i])
                select.innerHTML += `
                    <option value="${regiao.id}">${regiao.nome}</option>
                `
            }
    })
}



const selectEstados = document.getElementById('estados')
selectEstados.onchange = (event) => buscarMunicipios(event.target.value)
function buscarEstados(idRegiao){
    selectEstados.innerHTML = ''
    fetch (`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${idRegiao}/estados`)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        for(let i = 0; i < response.length; i++) {
            const estado = response[i]
            console.log(response[i])
            selectEstados.innerHTML += `
                <option value="${estado.id}">${estado.nome}</option>
            `
        }
    })
}

const selectMunicipios = document.getElementById('municipios')
function buscarMunicipios(idEstado){
    selectMunicipios.innerHTML = ''
    fetch (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${idEstado}/municipios`)
    .then((response) => response.json())
    .then((response) => {
        console.log(response)
        for(let i = 0; i < response.length; i++) {
            const municipio = response[i]
            console.log(response[i])
            selectMunicipios.innerHTML += `
                <option value="${municipio.id}">${municipio.nome}</option>
            `
        }
    })
}
buscarRegioes()