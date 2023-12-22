let numeroDeAlugueis = 0;
function alterarStatus(id){
    let gameButton = "game-" + id.toString();
    let buttonText = document.getElementById(gameButton).getElementsByClassName("dashboard__item__button")[0].textContent;
    let getButton = document.getElementById(gameButton).getElementsByClassName("dashboard__item__button")[0];
    //document.getElementById(gameButton).getElementsByClassName("dashboard__item__button")[0].textContent = buttonText == "Alugar" ? "Devoler" : "Alugar";

    if(buttonText == "Alugar"){
        getButton.textContent = "Devolver";
        document.getElementById(gameButton).children[0].classList.add("dashboard__item__img--rented");
        getButton.classList.add("dashboard__item__button--return");
        numeroDeAlugueis++
        console.log(`Número de jogos alugados até agora é ${numeroDeAlugueis}`)
    }else{
        getButton.textContent = "Alugar";
        document.getElementById(gameButton).children[0].classList.remove("dashboard__item__img--rented");
        getButton.classList.remove("dashboard__item__button--return");
    }
}