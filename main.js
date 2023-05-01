const form = document.getElementById('form-agenda');
const nome = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('telefone-contato');
    const inputnumeroRegiao = document.getElementById('regiao');

    if (!validaNomeCompleto(inputNome)) {
        alert("O nome não está completo");
        return;
    }

    if (nome.includes(inputNome.value)) {
        alert(`O nome: ${inputNome.value} já foi inserido`);
        return;
    } else if (numero.includes(inputNumero.value)) {
        alert(`O número: ${inputNumero.value} já foi inserido`);
        return;
    }

    adicionaLinha();
    atualizaTabela();

    nome.push(inputNome.value);
    numero.push(inputNumero.value);

    inputNome.value = '';
    inputNumero.value = '';
    inputnumeroRegiao.value = '';
});

function validaNomeCompleto(inputNome) {
    const nomeCompleto = inputNome.value.trim();
    const nomeComoArray = nomeCompleto.split(' ');
    return nomeComoArray.length >= 2;
}

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('telefone-contato');
    const inputnumeroRegiao = document.getElementById('regiao');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputnumeroRegiao.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};