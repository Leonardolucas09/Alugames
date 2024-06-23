let gamesAlugados = 0;

function alterarStatus(id) {
    let gameEscolhido = document.getElementById(`game-${id}`);
    let gameImagem = gameEscolhido.querySelector(".dashboard__item__img");
    let gameBotao = gameEscolhido.querySelector(".dashboard__item__button");
    let gameNome = gameEscolhido.querySelector(".dashboard__item__name");
    // alert(gameNome.innerHTML);

    if (gameBotao.classList.contains("dashboard__item__button--return")){
        if (confirm(`Você tem certeza que deseja devolver o jogo ${gameNome.innerHTML}?`)){

            gameBotao.classList.remove("dashboard__item__button--return");
            gameImagem.classList.remove("dashboard__item__img--rented");
            
            gameBotao.textContent = "Alugar";
            gamesAlugados--;
        }
    }

    else{
        gameBotao.classList.add("dashboard__item__button--return")
        gameImagem.classList.add("dashboard__item__img--rented");
        
        gameBotao.textContent = "Devolver";
        gamesAlugados++;
    }
    contaGamesAlugados();
}

function contaGamesAlugados() {
    console.log(`Total de jogos alugados: ${gamesAlugados}`);
}

document.addEventListener("DOMContentLoaded", function() {
    gamesAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contaGamesAlugados();
})