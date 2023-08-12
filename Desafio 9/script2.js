let opc = 1;

console.log(`
    1. Adicionar uma carta
    2. Puxar uma carta
    3. Sair
`)

let addCard = (cards = []) => {
    cards = ["K", "Q", "J", 10, 9, 8, 7, 6, 5, 4, 3, 2, "A"];
    const randomElement = cards[Math.floor(Math.random() * cards.length)];
    cards.unshift(randomElement); 
    console.log(`"${randomElement}" Carta adicionada.`);
    console.log(`Novo baralho: ${cards}`)

    function pullCard () {
        console.log(`"${cards.shift()}" Carta puxada.`)
        console.log(`Novo baralho: ${cards}`)
    }
    let opc2 = 1;
    console.log(`Deseja puxar a carta?
    1. Sim
    2. Não`)
    if (opc2 == 1) {
        pullCard();
    }
    
}

if (opc == 1) { 
    addCard(cards = []);
} else if (opc == 3) {
    console.log("Partida encerrada!")
}