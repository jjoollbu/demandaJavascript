const tabela_corrigir = document.getElementById('corrigir')
const tabela_registrar = document.getElementById('registrar')
const botaoRegistrar = document.getElementById('botaoRegistrar');
const botaoExcluir = document.getElementById('botaoExcluir');
const botaoCorrigir = document.getElementById('botaoCorrigir');
const botaoMostrar = document.getElementById('botaoMostrar');
const tbody = document.getElementById('tbody')

//Criar Linha na tabela
botaoRegistrar.addEventListener('click', adicionar_tabela)




const registrarNome = document.getElementById('registrar__nome');
const registrarCpf = document.getElementById('regisrar__cpf');
const registrarEmail = document.getElementById('registrar__email');
const registrarTelefone = document.getElementById('registrar__telefone');

let contar = 2

function adicionar_tabela() {
    const linha = document.createElement('tr');
    linha.addEventListener('click', selecionar);

    const linhaHead = document.createElement('th');
    linhaHead.innerText = contar;
    contar++;

    const novoNome = criarCelula(registrarNome.value);
    const novoCpf = criarCelula(registrarCpf.value);
    const novoEmail = criarCelula(registrarEmail.value);
    const novoTelefone = criarCelula(registrarTelefone.value);

    linha.appendChild(linhaHead);
    linha.appendChild(novoNome);
    linha.appendChild(novoCpf);
    linha.appendChild(novoEmail);
    linha.appendChild(novoTelefone);
    
    tbody.appendChild(linha);


    function resetartxt(){
        
        registrarNome.value = '';
        registrarCpf.value = '';
        registrarEmail.value = '';
        registrarTelefone.value = '';
    }
        resetartxt()

    }
   

function criarCelula(valor) {
    const celula = document.createElement('td');
    celula.innerText = valor;
    return celula;
}


// function adicionar_tabela() {
//     const linha = document.createElement('tr');
//     const linhaHead = document.createElement('th');
    
//     const registrarNome = document.getElementById('registrar__nome');
//     const registrarCpf = document.getElementById('regisrar__cpf');
//     const registrarEmail = document.getElementById('registrar__email');
//     const registrarTelefone = document.getElementById('registrar__telefone');
//     const arrayRegistros = [registrarNome.value, registrarCpf.value, registrarEmail.value, registrarTelefone.value];
    

//     contar++

//     linha.appendChild(linhaHead)
    
//     for (i = 0; i < 4; i++) {
//         let registroLinha = arrayRegistros[i];
        
//         linhaCell = document.createElement('td');
        
//         linhaCell.innerHTML = registroLinha

//         linhaHead.innerHTML = contar

//         linha.appendChild(linhaCell)
//     }
//     return linha
// }

// let contar = 1
///////

//Selecionar tabela
const selecionarRegistros = document.querySelectorAll('tr');

selecionarRegistros.forEach((registro) => {
        for( let i = 0; i < selecionarRegistros.length; i++)
  registro.addEventListener('click', selecionar);
});

function selecionar() {

    this.classList.add('excluir_corrigir')
    selecionar_linha = this

    // corrigir.style.display.toggle = "none";
    // registrar.style.display.toggle = "flex";


    mudarRegistrarCorrigir()
}
//
//Excluir
botaoExcluir.addEventListener('click', excluirLinha)

function excluirLinha(){
    tbody.removeChild(selecionar_linha)
    mudarRegistrarCorrigir()
}
//
//corrigir
botaoCorrigir.addEventListener('click', corrigirLinha)

const alterarNome = document.getElementById('alterar__nome');
const alterarCpf = document.getElementById('alterar__cpf');
const alterarEmail = document.getElementById('alterar__email');
const alterarTelefone = document.getElementById('alterar__telefone');

function corrigirLinha() {
    const cells = selecionar_linha.getElementsByTagName('td');
    
    const inputs = [alterarNome, alterarCpf, alterarEmail, alterarTelefone];
    const cell_valores = [0, 1, 2, 3];
    
    for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const cell_valor = cell_valores[i];
    

    if (input.value.length > 0) {
      cells[cell_valor].innerHTML = input.value;
    }
    }
    
    function resetartxt() {
    inputs.forEach((input) => {
    input.value = '';
    });
    }
    
    
        resetartxt()
        mudarRegistrarCorrigir()
    }


//
// Mostrar/esconder tabela
botaoMostrar.addEventListener('click', esconderTabela)

function esconderTabela() {
    var table = document.getElementById("Registros_tabela");
    table.classList.toggle("esconder");
}    
// 

//Registrar/corrigir
function mudarRegistrarCorrigir(){
    tabela_corrigir.classList.toggle('esconder')
    
    tabela_registrar.classList.toggle('esconder')
    }
//