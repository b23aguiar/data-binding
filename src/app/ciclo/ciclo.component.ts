import { Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input  } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy  {

  @Input() valorInicial = 10;

  constructor() {
    this.log('constructor')
  }

  ngOnInit() {
    this.log('ngOnInit')
  }

  ngOnChanges() {
    this.log('ngOnChanges')
  }

  ngDoCheck() {
    this.log('ngDoCheck')
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    this.log('AfterContentChecked')
  }

  ngAfterViewInit() {
    this.log('AfterViewInit')
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewCheck')
  }

  ngOnDestroy() {
    this.log('OnDestroy')
  }

  log(evento){
    console.log(evento);
  }
}
