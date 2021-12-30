const clientes = [
{
    nome: 'Gabriel',
    cpf: '12345678945',
    dependentes: [
        {
        nome: 'Gabriela Amaral',
        parentesco: 'filha',
        dataNascimento: '25/06/2019'},
        {
        nome: 'Isabela Amaral',
        parentesco:'Irmã',
        dataNascimento: '14/06/1997'
        }],
    },
    {
        nome: 'Juliana Amaral',
        cpf: '56489723145',
        dependentes: [{
            nome: 'Sophia Amaral',
            parentesco: 'filha',
            dataNascimento: '30/08/2020'
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
console.table(listaDependentes) //TABELA

