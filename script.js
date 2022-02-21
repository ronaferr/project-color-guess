window.onload = function jogoDaCor() {

    //Mudar cores dos circulos ao recarregar
    let cores = document.getElementsByClassName('ball');
    let textoResposta = document.querySelector('#answer');
    let corPraAdvinhar = document.querySelector('#rgb-color');
    let certaResposta = 'Acertou!';
    let respostaErrada = 'Errou! Tente novamente!';

    //definir cor pra advinhar
    let r = parseInt(Math.random() * 255);
    let g = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    corPraAdvinhar.innerHTML = `(${r}, ${g}, ${b})`;
    let rgbCerto = `rgb${corPraAdvinhar.textContent}`;
    //definir qual div será pintada com a cor certa
    let certa = parseInt(Math.random() * cores.length);
    cores[certa].style.backgroundColor = rgbCerto;
    //pintar outras divs
    for (let i = 0; i < cores.length; i += 1) {
        let r = parseInt(Math.random() * 255);
        let g = parseInt(Math.random() * 255);
        let b = parseInt(Math.random() * 255);
        /* conteudo pesquisado ein: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript#:~:text=Gerando%20cores%20RGBA&text=A%20fun%C3%A7%C3%A3o%20Math.,ser%C3%A1%20a%20opacidade%20da%20cor. */
        if (cores[i].style.backgroundColor !== rgbCerto) {
            cores[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
        //processo no jogo
        cores[i].addEventListener('click', function () {
            if (cores[i].style.backgroundColor === rgbCerto) {
                textoResposta.innerHTML = certaResposta;
            } else {
                textoResposta.innerHTML = respostaErrada;
            }
        })
    }
    let botaoReset = document.querySelector('#reset-game');
    botaoReset.addEventListener('click', function () {
        textoResposta.innerHTML = 'Escolha uma cor';
        jogoDaCor();
    });
}