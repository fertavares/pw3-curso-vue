var app = new Vue({
    el: '#desafio',
    data: {
        idade: '16',
        nome: 'Fernando',
        sobrenome: 'Tavares',
        valor: '',
        imagem: 'https://th.bing.com/th/id/R.8b6b3321c302bd2388dfbfd52c864f99?rik=f7gjJo3DmB1dbw&pid=ImgRaw&r=0',

    }, methods: {
        nomeCompletoIdade() {
            console.log(this);
            return `Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} de idade`
        },
        random(){
           return Math.random();
        },
        alerta(){
            window.alert('isso é um alerta!');
        },
        valorRec(event){
           this.valor = event.target.value;
        },
        valorRec2(event){
            this.valor = event.target.value;
        },
        resultado(){
            return  this.valor = 37 ? "Valor Igual" : "Valor Diferente" 
        }
    }, watch: {
        contador(valor) { //nome deve ser exatamente igual à um data ou computed q deseja verificar
            console.log(`Valor Antigo: ${valorAntigo}`);
            console.log(`Valor Novo: ${valorNovo}`);
            setTimeout(() => {
                this.contador = 0;
            }, 5000)
        }
    },
}
)