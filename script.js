let adultos = document.getElementById("adultos");
let criancas = document.getElementById("criancas");
let duracao = document.getElementById("duracao");

let resultado = document.getElementById('resultado');

function calcular(){

    let qtAdulto = adultos.value;
    let qtCrianca = criancas.value;
    let qtDuracao = duracao.value;
    let qtBebem = adultosBebem.value;

    let quantCarne = qtAdulto * carnepp(qtDuracao) + (carnepp(qtDuracao)/2 * qtCrianca);
    console.log(quantCarne);

    let quantBebida = qtAdulto * bebidapp(qtDuracao) + (bebidapp(qtDuracao)/2 * qtCrianca);
    console.log(quantBebida);

    let quantCeva = qtBebem * cevapp(qtDuracao);
    console.log(quantCeva);

    resultado.innerHTML = `<p>${quantCarne/1000} quilos de carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(quantCeva/1000)} litros de cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(quantBebida/1000)} litros de bebida</p>`;

}

//pp = por pessoa

function carnepp(duracao){
    if(duracao >= 6){
        return carne = 650;
    }else{
        return carne = 400;
    }
}

function cevapp(duracao){
    if(duracao >= 6){
        return ceva = 2000;
    }else{
        return ceva = 1200;
    }
}

function bebidapp(duracao){
    if(duracao >= 6){
        return ceva = 1500;
    }else{
        return ceva = 100;
    }
}