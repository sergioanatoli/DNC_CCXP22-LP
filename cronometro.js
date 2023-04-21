const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("min");
const segundo = document.getElementById("seg");

const lanzamiento = "31 dec 2023"

function countdown(){
    const dataLanz = new Date(lanzamiento);
    const hoje = new Date();

    const segTotal = (dataLanz - hoje) / 1000;
    const dias = Math.floor(segTotal / 3600 / 24);
    const horas = Math.floor(segTotal / 3600) % 24;
    const minutos = Math.floor(segTotal / 60) % 60;
    const segundos = Math.floor(segTotal % 60);

    dia.innerHTML = `<strong>${dias}D</strong>`
    hora.innerHTML = `<strong>${horas}H</strong>`
    minuto.innerHTML = `<strong>${minutos}M</strong>`
    segundo.innerHTML = `<strong>${segundos}S</strong>`
}

countdown();

setInterval(countdown, 1000);