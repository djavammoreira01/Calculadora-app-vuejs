
<template>
 <!--eslint-disable --> 
 <div class="calculadora" style="height: 500px; width:  400px;">
    <div class="display">{{valorInicial || '0'}}</div>
    <div v-on:click="limpar" class="botao botaoclicado">C</div>
    <div v-on:click="sinal" class="botao botaoclicado" >+/-</div>
    <div v-on:click="porcentagem" class="botao botaoclicado">%</div>
    <div v-on:click="dividir" class="botao operadores operadorclicado" >÷</div>
    <div v-on:click="juntarNumeros('7')" class="botao botaoclicado" >7</div>
    <div v-on:click="juntarNumeros('8')" class="botao botaoclicado">8</div>
    <div v-on:click="juntarNumeros('9')" class="botao botaoclicado">9</div>
    <div v-on:click="multiplicar" class="botao operadores operadorclicado">x</div>
    <div v-on:click="juntarNumeros('4')" class="botao botaoclicado">4</div>
    <div v-on:click="juntarNumeros('5')" class="botao botaoclicado">5</div>
    <div v-on:click="juntarNumeros('6')" class="botao botaoclicado">6</div>
    <div v-on:click="diminuir" class="botao operadores operadorclicado" >-</div>
    <div v-on:click="juntarNumeros('1')" class="botao botaoclicado">1</div>
    <div v-on:click="juntarNumeros('2')" class="botao botaoclicado">2</div>
    <div v-on:click="juntarNumeros('3')" class="botao botaoclicado">3</div>
    <div v-on:click="somar" class="botao operadores operadorclicado">+</div>
    <div v-on:click="juntarNumeros('0')" class="botao zero botaoclicado" style="border-end-start-radius:10px">0</div>
    <div v-on:click="ponto" class="botao botaoclicado">.</div>
    <div v-on:click="resultado" class="botao operadores operadorclicado" style="border-end-end-radius:10px"> = </div>
  </div>
</template>
<script src="./calculadora.js"></script>
<!--eslint-disable-->
<!--eslint-disable-next-line-->
<!--Add "scoped" attribute to limit CSS to this component only-->
<style src="./calculadora.css" scoped/>