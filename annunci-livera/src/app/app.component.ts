import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';
import { Annunci } from '../app/annunci.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'annunci-livera';
  annunci:Annunci[];  

  constructor(){
    this.annunci = [];
  }

  inVia(name: HTMLInputElement, telefono: HTMLInputElement, message: HTMLInputElement): boolean {
    this.annunci.push(new Annunci(name.value, telefono.value, message.value));
    console.log(this.annunci)
    name.value = '';
    telefono.value = '';
    message.value = '';
    return false;

  }
}
