// Selecionando os elementos relevantes
const quadrados = document.querySelectorAll('.quadrado');
const percentualSpan = document.getElementById('percentual');

// Inicializando o percentual
let percentual = 0;

// Função para atualizar o percentual de carregamento
function atualizarPercentual() {
    if (percentual < 100) {
        percentual += 10; // Aumenta o percentual em 10%
        percentualSpan.textContent = percentual + '%';
    }else{
        carregamentoCompleto = true;
        clearInterval(percentualIntervalo);
        clearInterval(carregamentoIntervalo);
        setTimeout(function() {
            $('.pagina').html('<p class="inicializacao-texto">Bem-vindo(a) !</p> <script src="js/inicializacao.js"></script>');}, 1000); // Coloque o tempo dentro da função setTimeout        
    }
}

const textoCarregamento = document.getElementById('textoCarregamento');

let carregamento = 'Loading'

let carregamentoCompleto = false

function animarCarregamento() {
    if (carregamento !== 'Loading...' && carregamentoCompleto == false){
        carregamento += '.';
        textoCarregamento.textContent = carregamento;
    }else{
        carregamento = 'Loading';
        textoCarregamento.textContent = carregamento;
    }
}

percentualIntervalo = setInterval(atualizarPercentual, 200);
carregamentoIntervalo = setInterval(animarCarregamento, 300);