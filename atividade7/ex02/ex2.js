class Cliente {
    constructor(nome, telefone, renda,email){
        this.nome = nome
        this.telefone = telefone
        this.renda = renda
        this.email = email
    }

        VerificarCredito (renda){
            return new Promisse (resolve,reject) => (
                if(renda >= 2000){
                    resolve ("Credito aprovado")
                }

                else if(renda < 2000){
                    reject ("Credito rejeitado")},1000)
                }
            }
            
            const pessoa = new Cliente("Filipe","33998833", 1300,"filipe@gmail.com")
            console.log(pessoa)

            pessoa.VerificarCredito(pessoa.renda)
        
