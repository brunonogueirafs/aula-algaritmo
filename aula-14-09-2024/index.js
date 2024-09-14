const inputCep = document.getElementById('cep');
const inputLogradouro = document.getElementById('logradouro')
const inputBairro = document.getElementById('bairro')
const inputEstado = document.getElementById('estado')
const inputCidade = document.getElementById('cidade')

inputCep.addEventListener('keyup', async (event) => {
    const cep = event.target.value;

    if (cep.length === 8) {
        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const responseJson = await response.json();

            inputLogradouro.value = responseJson.logradouro
            inputBairro.value = responseJson.bairro
            inputEstado.value = responseJson.estado
            inputCidade.value = responseJson.localidade
            
        } catch {
            
        
        } finally {    

        }

       

    }

})

