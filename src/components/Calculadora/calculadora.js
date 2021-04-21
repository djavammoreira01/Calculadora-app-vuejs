
export default{
  /* eslint-disable */ 
  data(){
     return{
      valorInicial: '',
      numeroAnterior: null,
      operador: null,
      operadorClicado: false,
    }
},
  methods: {
    limpar() {
      this.valorInicial = '';
    },
    sinal() {
      this.valorInicial = this.valorInicial.charAt(0) === '-'
        ? this.valorInicial.slice(1)
        : `-${this.valorInicial}`;
    },
    juntarNumeros(numero) {
      if (this.operadorClicado){
        this.valorInicial = '';
        this.operadorClicado = false;
}

      this.valorInicial = `${this.valorInicial}${numero}`;
      },
    ponto() {
        if (this.valorInicial.indexOf('.') === -1) {
          this.juntarNumeros('.');
        }
      },
       porcentagem() {
      this.valorInicial = `${parseFloat(this.valorInicial) / 100}`;
      },
    setarValor() {
      this.numeroAnterior = this.valorInicial;
      this.operadorClicado = true;
      },
    resultado() {
      this.valorInicial = `${this.operador(
        parseFloat(this.numeroAnterior),
        parseFloat(this.valorInicial),
      )}`;
      this.numeroAnterior =null;
    },
    dividir() {
      this.operador = (num1, num2) => num1 / num2;
      this.setarValor();
    },
    multiplicar() {
      this.operador = (num1, num2) => num1 * num2;
      this.setarValor();
    },
    diminuir() {
      this.operador = (num1, num2) => num1 - num2;
      this.setarValor();
    },
    somar() {
      this.operador = (num1, num2) => num1 + num2;
      this.setarValor();
    }
  }
}
