let opc = 6;
console.log(`1. Listar vagas disponíveis.
2. Criar uma nova vaga.
3. Visualizar uma vaga.
4. Inscrever um candidato em uma vaga.
5. Excluir uma vaga.
6. Sair
`)

let inscritos = {
    nome: ["Bob", "Andressa", "Henry", "Alex", "LittleStep"]
}
switch (opc) {
    case 1: 
    for (let i = 0; i < 5; i++) {
    console.log(`   ${inscritos.nome[i]} [${i}]`)
    }
    console.log(`Vagas preenchidas: ${inscritos.nome.length}`)
    break
    case 2: 
    function newVacancy() {
        let vaga = {
            name: "Gilberto",
            area: "Dev Front-End", 
            description: "Abertura de mais uma vaga para Front-End",
            limitData: "25/08/2023"
        }
        let opc2 = 1;
        console.log(`       ${vaga.name}
        ${vaga.area}
        ${vaga.description}
        ${vaga.limitData}
        Confirmar informações?
        1. Sim
        2. Não`) 
        if (opc2 == 1) {
            console.log("Informações salvas!")
        }
    }

    newVacancy();
    break
    case 3:
    function viweVacancy () {
        for (let i = 0; i < 5; i++) {
            let view = i;
            if (view == 0) {
                let info = {
                    indice: 0,
                    nome: inscritos.nome[0],
                    area: "Dev Back-end",
                    descricao: "Candidatura de vaga para Back-end",
                    dataLimite: "29/08/2023",
                    qtdCand: 3,
                    candidatos: ["Bob", "Andressa", "Henry"]
                }
                console.log(`${info.indice}
                ${info.nome}
                ${info.area}
                ${info.descricao}
                ${info.dataLimite}
                ${info.qtdCand}
                ${info.candidatos}`)
            }
        }
        
    }

    viweVacancy();
    break
    case 4:
    let subscribe = {
        position: 2,
        person: "Matheus"
    }
    let opc3 = 1;
    console.log(` ${subscribe.position}
    ${subscribe.person}
    Deseja confirmar as informações?
    1.Sim
    2.Não`)
    if (opc3 == 1) {
        console.log("Informações confirmadas!")
    }
    break
    case 5:
    let exVaga = 1;
    console.log("Qual vaga você deseja excluir?");
    if (exVaga == 1) {
        inscritos.nome.splice(1)
        console.log(`${inscritos.nome[0]} removido`)
    } else if (exVaga == 2) {
        inscritos.nome.splice(2)
        console.log(`${inscritos.nome[1]} removida`)
    } else if (exVaga == 3) {
        inscritos.nome.splice(3)
        console.log(`${inscritos.nome[2]} removido`)
    } else if (exVaga == 4) {
        inscritos.nome.splice(4)
        console.log(`${inscritos.nome[3]} removido`)
    } else {
        inscritos.nome.splice(5)
        console.log(`${inscritos.nome[4]} removido`)
    }
    break

    default:
    console.log(`Programa encerrado!`)
    break
}

    