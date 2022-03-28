import { Component, OnInit, Input,HostBinding } from '@angular/core';
import { Risposte } from '../annunci-comp/risposte.model';

@Component({
  selector: 'app-comment-comp',
  templateUrl: './comment-comp.component.html',
  styleUrls: ['./comment-comp.component.css']
})
export class CommentCompComponent implements OnInit {
  @HostBinding('class') cssColor = 'black';
  @Input() vet2:Risposte = undefined!;
  constructor() { }

  ngOnInit(): void {
  }
  
  Like(){
    if(this.cssColor == 'black') this.cssColor = 'red';
    else
    this.cssColor = 'black'; }
  }
  {
}