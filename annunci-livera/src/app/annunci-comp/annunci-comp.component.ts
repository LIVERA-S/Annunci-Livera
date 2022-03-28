import { Component, OnInit ,Input} from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Annunci } from '../annunci.model';
import { Risposte } from './risposte.model';

@Component({
  selector: 'app-annunci-comp',
  templateUrl: './annunci-comp.component.html',
  styleUrls: ['./annunci-comp.component.css']
})
export class AnnunciCompComponent implements OnInit {
  @Input() vet:Annunci = undefined!;
  show = false;
  risposte:Risposte[];  

  constructor(){
    this.risposte = [];
  }
  
  ngOnInit(): void {
  }
  Espn(){
    this.show = !this.show
  }
  Ans(risposta:HTMLInputElement, telefono:HTMLInputElement):boolean{
   this.risposte.push(new Risposte(risposta.value, telefono.value));
   return false;
  }
}
