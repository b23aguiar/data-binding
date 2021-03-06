import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url : string = 'http://hazzac.com.br';
  cursoAngular : boolean = true;
  urlImagem : string = 'http://lorempixel.com/400/200/abstract/';

  valorAtual : string = '';
  valorSalvo : string = '';

  isMouseOver : boolean = false;

  nome : string = 'ABC';

  nomeCurso : string = 'Angular';

  pessoa : any = {
    nome: 'teste',
    idade: 20
  }

  valorInicial = 15;

  getValor(){
    return 1;
  }

  constructor() { }

  botaoClicado() {
    alert('Botão Clicado');
  }

  onKeyUp(evento : KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento) {
    console.log(evento.novoValor)
  }

  ngOnInit() {
  }

}
