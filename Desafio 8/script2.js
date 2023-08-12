let pers1 = "Digimon";
let pers2 = "Pikachu"
let atk1 = 50;
let def2 = 60;
let hp2 = 80;
let escudo2 = "Sim";
let dano;
Number(dano);

if (atk1 > def2 && escudo2 != "Sim") {
     dano = atk1 - def2;
} else if (atk1 > def2 && escudo2 == "Sim") {
    dano = (atk1 - def2) / 2;
} else if (atk1 <= def2) {
    dano = 0;
}
    console.log(`
    Personagem 1: ${pers1}
    Poder de ataque: ${atk1}
    Dano feito: ${dano}
    Personagem 2: ${pers2}
    Poder de defesa: ${def2}
    Dano sofrido: -${dano}
    HP atual: ${hp2 - dano}
    `)
