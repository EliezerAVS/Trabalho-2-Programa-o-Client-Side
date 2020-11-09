let maxima = 0;
let velocidade = 0;
let calcular = document.getElementById('calcular');
calcular.addEventListener('click', calculo);
function calculo(){
    let result = 0;
    maxima = document.getElementById('velocidadeMaxima').value;
    velocidade = document.getElementById('velocidade').value;
    result = velocidade - maxima;
    if(result > 0 && result <= 7){
        document.getElementById('resultado').innerHTML =
        `${result} km/h acima da velocidade permitida pela via.<br/>Advertência!`;
    }
    else if(result > 7 && result <=20){
        document.getElementById('resultado').innerHTML =
        `${result} km/h acima da velocidade permitida pela via.<br/>
        Infração Grave! Multa de R$130,16 e 4 pontos na carteira.`;
    }
    else if(result > 20 && result <=50){
        document.getElementById('resultado').innerHTML =
        `${result} km/h acima da velocidade permitida pela via.<br/>
        Infração gravíssima! Multa de R$195,23 e 5 pontos na carteira.`;
    }
    else if(result > 50){
        document.getElementById('resultado').innerHTML =
        `${result} km/h acima da velocidade permitida pela via.<br/>
        Infração gravíssima! Penalidade de suspensão do direito de dirigir!
        Multa de R$880,41 e 7 pontos na carteira.`;
    }
    else{
        document.getElementById('resultado').innerHTML =
        `Dentro da velicidade permitida!`;
    }
}
let gerarImpressao = document.getElementById('gerarImpressao');
gerarImpressao.addEventListener('click', tabela);
function tabela(){
    let nomeCondutor = document.getElementById('nomeCondutor').value;
    document.getElementById('nomeCondutorTabela').innerHTML = nomeCondutor;
    let habilitacao = document.getElementById('habilitacao').value;
    document.getElementById('habilitacaoTabela').innerHTML = habilitacao;
    maxima = document.getElementById('velocidadeMaxima').value;
    document.getElementById('maximaTabela').innerHTML = `${maxima} Km/h`;
    velocidade = document.getElementById('velocidade').value;
    document.getElementById('velocidadeTabela').innerHTML = `${velocidade} Km/h`;
    let resultadoVerificacao = document.getElementById('resultado').value;
    document.getElementById('resultadoTabela').innerHTML = resultadoVerificacao;
}