class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar (valor){
        this.saldo += valor
    }
    exibirSaldo (){
        console.log(this.saldo)
    }
}


class ClientePouponca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
        super(nome,email,cpf,saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePouponca("Andre","a@emai.com","12345698787",100,200)

console.log(andre)

andre.depositar(50)
andre.depositarPoupanca(50)
console.log(andre)