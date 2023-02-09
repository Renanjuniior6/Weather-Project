

let key = "ee4a8bb8cf473d564d69c0383677bfc5"

function colocaNaTela (dados) {

    if (dados.name === undefined) {
        document.querySelector(".cidade").innerHTML = "Sem resultados da Busca"
        document.querySelector(".temp").innerHTML = ""
        document.querySelector(".descricao").innerHTML = ""
        document.querySelector(".umidade").innerHTML = ""
        document.querySelector(".icone").innerHTML = ""
    } 
    else { 

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name 
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "umidade: " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"

}
}


async function buscarCidade (cidade) {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + 
        cidade + 
        "&appid=" + 
        key +
        "&lang=pt_br" + 
        "&units=metric"
    ).then( resposta => resposta.json() )

  
    

    colocaNaTela(dados)
    console.log(dados)
}



function cliqueiNoBotao () {
    let cidade = document.querySelector(".input-cidade").value
    
    buscarCidade(cidade)
}

