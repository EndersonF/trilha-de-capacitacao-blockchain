const cliente = {
    nome: 'Gabriel',
    idade: '31',
    cpf: '12345678945',
    email: 'gabriel@email.com',
    fones: ['55699924565','5569992656936'],
    dependentes: [
        {
        nome: 'Gabriela Amaral',
        parentesco: 'filha',
        dataNascimento: '25/06/2019'},
        {
        nome: 'Isabela Amaral',
        parentesco:'Irmã',
        dataNascimento: '14/06/1997'
        }
    ],

    saldo: 100, //funcao para depositar
    depositar: function(valor){
        this.saldo += valor
    }
}

let relatorio = "";
for (let info in cliente){
    if(typeof cliente[info] ==="object" || typeof cliente[info] ==="function")
    {
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
}

console.log(relatorio)