// Classe
class Produto{

    // Atributo
    private nome:string;
    private valor:number;

    // Construtor
    public constructor(nome:string, valor:number){
        this.nome = nome;
        this.valor = valor;

        this.mensagem();
    }

    // Método para exibir uma mensagem
    private mensagem(){
        console.log(`O produto ${this.nome} custa R$ ${this.valor}`);
    }

}

// Instanciar objeto da classe Produto
const p1 = new Produto('iPhone 15', 7000);
const p2 = new Produto('Notebook Dell Inspiron', 3400);