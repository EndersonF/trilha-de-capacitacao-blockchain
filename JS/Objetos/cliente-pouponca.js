function Cliente (nome,cpf,email,saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePouponca (nome,cpf,email,saldo,saldoPoup){
    Cliente.call (this,nome,cpf,email,saldo)
    this.saldoPoup = saldoPoup
}

const ju = new ClientePouponca("Ju","55886945854854712","@juemail.com",100,200)

console.log(ju)

ClientePouponca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

ju.depositarPoup(30)
console.log(ju.saldoPoup)