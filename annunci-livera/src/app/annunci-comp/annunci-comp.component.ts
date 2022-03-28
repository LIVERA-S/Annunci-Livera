import { Component, OnInit ,Input} from '@angular/core';
import { Annunci } from '../annunci.model';

@Component({
  selector: 'app-annunci-comp',
  templateUrl: './annunci-comp.component.html',
  styleUrls: ['./annunci-comp.component.css']
})
export class AnnunciCompComponent implements OnInit {
  @Input() vet:Annunci = undefined!;
  constructor() { }

  ngOnInit(): void {
  }

}
