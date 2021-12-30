const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '15534675071',
    email: 'andre@email.com',
    fones: ['5569992452565','5569992548569']
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'filha',
    dataNascimento: '20/03/2011'
}

console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)
