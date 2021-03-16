/*

Duração <= 6 horas:

Carne: 2500g , Linguiça: 100g , Frango: 50g , Cerveja: 1.2 litros , Refrigerante: 1.0 litro;

Duração > 6 horas:

Carne: 400g , Linguiça: 150g , Frango: 100g , Cerveja: 2.0 litros , Refrigerante: 1.5 litros;

Crianças valem 0.5;

*/

let inputAdultos = document.getElementById("adultos");
let intputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = intputCriancas.value;
    let duracao = inputDuracao.value;


    let totalCarne = carne(duracao) * adultos + (carne(duracao) / 2) * criancas;
    let totalLinguica = linguica(duracao) * adultos + (linguica(duracao) / 2) * criancas;
    let totalFrango = frango(duracao) * adultos + (frango(duracao) / 2) * criancas;
    let totalCerveja = cerveja(duracao) * adultos;
    let totalRefrigerante = refrigerante(duracao) * adultos + (refrigerante(duracao) / 2) * criancas;

    resultado.innerHTML = `<p>${totalCarne/1000} kg de carne </p>`;
    resultado.innerHTML += `<p>${totalLinguica/1000} kg de linguiça</p>`;
    resultado.innerHTML += `<p>${totalFrango/1000} kg de frango</p>`;
    resultado.innerHTML += `<p>${totalCerveja/1000} litros de cerveja</p>`;
    resultado.innerHTML += `<p>${totalRefrigerante/1000} litros de refrigerante</p>`;

}

function carne(duracao) {

    if (duracao < 6) {
        return 250;
    } else{
        return 400
    }
}

function linguica(duracao) {

    if (duracao < 6) {
        return 100;
    } else{
        return 150
    }
}

function frango(duracao) {

    if (duracao < 6) {
        return 50;
    } else{
        return 100
    }
}

function cerveja(duracao) {

    if (duracao < 6) {
        return 1200;
    } else{
        return 2000
    }
}

function refrigerante(duracao) {

    if (duracao < 6) {
        return 1000;
    } else{
        return 1500
    }
}