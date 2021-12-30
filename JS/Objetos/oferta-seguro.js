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

    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

// console.log(propsCliente)

function oferecerSeguro(obj){
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}
// console.log(Object.entries(cliente)) MÉTODOS DE CONVERSÃO
// console.log(Object.values(cliente))  MÉTODOS DE CONVERSÃO
oferecerSeguro(cliente)