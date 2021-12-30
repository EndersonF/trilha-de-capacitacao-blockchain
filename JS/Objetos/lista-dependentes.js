const cliente = {
    nome: 'Gabriel',
    idade: '31',
    cpf: '12345678945',
    email: 'gabriel@email.com',
    fones: ['55699924565','5569992656936'],
    dependentes: [{
        nome: 'Gabriela Amaral',
        parentesco: 'filha',
        dataNascimento: '25/06/2019'
    }]
}

cliente.dependentes.push({
    nome: 'Isabela Amaral',
    parentesco:'Irmã',
    dataNascimento: '14/06/1997'
})

// console.log(cliente)

const pessoaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento ==='25/06/2019')

console.log(pessoaMaisNova[0].nome)
