// JavaScript para funcionalidades interativas

let pontos = 0;
let intervalo;
let tempoRestante = 10;

function iniciarJogo() {
    pontos = 0;
    tempoRestante = 10;
    document.getElementById("pontuacao").textContent = `Tempo: ${tempoRestante}s | Pontos: ${pontos}`;
    document.getElementById("botao-iniciar").style.display = "none";
    document.getElementById("area-jogo").style.display = "block";

    intervalo = setInterval(() => {
        tempoRestante--;
        document.getElementById("pontuacao").textContent = `Tempo: ${tempoRestante}s | Pontos: ${pontos}`;
        if (tempoRestante <= 0) {
            finalizarJogo();
        }
    }, 1000);
}

function clicarCoracao() {
    pontos++;
    document.getElementById("pontuacao").textContent = `Tempo: ${tempoRestante}s | Pontos: ${pontos}`;

    // Move o botão para uma posição aleatória
    const botao = document.querySelector(".coracao");
    randomPosition(botao);
}

function randomPosition(element) {
    element.style.position = "absolute";
    element.style.left = Math.random() * 80 + "%";
    element.style.top = Math.random() * 80 + "%";
}

function finalizarJogo() {
    clearInterval(intervalo);
    document.getElementById("area-jogo").style.display = "none";
    document.getElementById("botao-iniciar").style.display = "block";

    const resultado = document.createElement('p');
    resultado.textContent = `pontos. Bora querer melhorar?`;
    resultado.style.color = '#015c91';
    resultado.style.fontWeight = 'bold';
    resultado.style.textAlign = 'center';
    document.getElementById("jogo-coracao").appendChild(resultado);
}

function obterSurpresa() {
    const surpresas = [
        { frase: "Você tem o sorriso mais lindo que já vi.", imagem: "img/sorriso.jpg" },
        { frase: "Teu cabelo é o mais bonito, o ++", imagem: "img/cabelo.jpg" },
        { frase: "Você é simplesmente inesquecível.", imagem: "img/inesquecivel.jpg" },
        { frase: "Teu jeito é muito legal", imagem: "img/jeito.jpg" },
        { frase: "Tu é maravilhosa", imagem: "img/maravilhosa.jpg" }
    ];

    // Escolhe uma surpresa aleatória
    const surpresaAleatoria = surpresas[Math.floor(Math.random() * surpresas.length)];

    // Atualiza a frase e a imagem
    document.getElementById("surpresa").textContent = surpresaAleatoria.frase;
    const imagemSurpresa = document.getElementById("imagem-surpresa");
    imagemSurpresa.src = surpresaAleatoria.imagem;
    imagemSurpresa.style.display = "block";
}

