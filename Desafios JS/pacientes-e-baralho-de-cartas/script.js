let pac = ["Marcos", "Marcelo", 'Julia', "Lívia", "Ângelo"]
console.log(pac);
console.log(
    `1. Novo paciente. 
     2. Consultar paciente
     3.Sair` 
)
let opc = 3;

function novoPaciente () {
    pac.push("Maria");
    console.log(pac);
}

function consultarPaciente () {
    console.log("Paciente já consultado: " + pac.shift())
}

if (opc == 1) {
    novoPaciente();
} else if (opc == 2) {
    consultarPaciente();
} else if (opc == 3) {
    console.log("Sessões de terapia encerradas por hoje!");
}


