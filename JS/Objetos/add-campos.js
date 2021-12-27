const cliente = {
    nome: 'André',
    idade: 36,
    cpf: '15534675071',
    email: 'andre@email.com'
}
console.log(cliente)
cliente.fone = '992402565'//Adicionando uma nova propriedade fone para o objeto cliente e passando um valor para a propriedade fone.
console.log(cliente)

const objPersonagem = {
    nome: 'Gandalf',
    classe: 'mago',
    nivel: '20',
    aliado: {
        nome: 'Saruman',
        classe: 'mago'
    },
    status: 'desaparecido'
}
delete objPersonagem.aliado //Removendo propriedade aliado
delete objPersonagem['status'] //Removendo propriedade status, mas com notação de colchetes.

console.log(objPersonagem)

//FAÇA COMO EU FIZ

const pessoa = {
    nome:"Peter Parker",
    dataNascimento:"25/05/1989",
    carteiraIdentidade:"999362-1",
    email:"peterparker@email.com",
    telefone:"+552711112222",
    cidade:"Cariacica",
    estado:"ES"
 }

 pessoa.cpf = "11111111122"


